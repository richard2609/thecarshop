import { useState, useEffect } from 'react';
import './UserName.css';
const UserName = () => {

    async function fetchUserName () {
            // Fetch user data from the backend API
    //  await fetch('http://localhost:3001/username', {
    //     credentials: 'include', // Include cookies (to handle session)
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch user data');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     setUser(data); // Set the user data
    //   })
    //   .catch(error => {
    //     console.error('Error fetching user:', error);
    //   });

    const response = await fetch('http://localhost:3001/username',{
        credentials: 'include',
      });
    const data = await response.json();
    setUser(data);
    console.log(data);

    }

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserName();
  }, []);

  if(!user){
    return <p>Guest</p>
  }
  else{
    
  if (user.message === "Unauthorized") {
    return <p className='user-name'>Guest</p>;
  }
 else{
    return (
        <div>
          <p className='user-name'>{user.name}</p>
        </div>
      );
 }
  }


}

export default UserName;