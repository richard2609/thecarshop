const express = require ("express");
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const productsRouter = require("./routes/productsroute/productsroute");
const categoriesRouter = require('./routes/categoriesroute/categoriesroute');
const User = require('./models/users/users.model');
const usersRouter = require("./routes/usersroute/usersroute");
const cartRouter = require("./routes/cartroute/cartroute");


dotenv.config();

const config = {
  CLIENT_ID:process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


// Express session setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Google OAuth configuration
passport.use(new GoogleStrategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
     console.log(profile);
      User.findOne({ googleId: profile.id })
      .then(existingUser => {
        if (existingUser) {
          // User already exists
          return done(null, existingUser);
        } else {
          // Create a new user
          new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          })
          .save()
          .then(user => done(null, user));
        }
      })
    

  }
));

// Serialize and deserialize user (for session support)
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes for Google OAuth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
  (req, res) => {
    // Successful authentication
    res.redirect('http://localhost:3000/');
  }
);

// Middleware function to check authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

app.get('/login', (req, res) => {
  console.log("logged in")
  res.redirect('/auth/google');
});
// Logout route
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // Optionally destroy the session
    req.session.destroy(() => {
      // Redirect to the homepage or login after logging out
      console.log("logged out")
      res.redirect('http://localhost:3000/');
    });
  });
});


app.use('/shop',productsRouter);
app.use('/categories',categoriesRouter);
app.use('/username',usersRouter);
app.use('/cart',cartRouter);



const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, ()=> console.log(`Server port: ${PORT}`));
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  module.exports = ensureAuthenticated;