const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    id:{type:Number},
    brand:{type: String},
    name:{type: String},
    year:{type: Number},
    price:{type: Number},
    rating: {type: Number},
    imgUrl: {type: String},
    topSpeed: {type: Number},
    category: {type: String}
});

const Product = mongoose.model('Product',productSchema);

async function checkexistingProduct () {
    return await Product.find({});
}

async function addProducts () {
    const existingProduct = await checkexistingProduct();
    if(existingProduct.length === 0){
        Product.insertMany(products).then((docs)=>{
            console.log("docs inserted of products")
        })
        .catch((err)=>{
            console.log("Error inserting products",err);
        })
    } else {
        console.log("Products doc already exist");
    }
}


addProducts();


module.exports = Product;

// const products = [
//     {
//         id: 0,
//         brand: "BMW",
//         name: "M3",
//         year: "2024",
//         price: 80,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/BMW/2021-BMW-M3-Competition-006-2400p.jpg",
//         topSpeed: 200,
//         category: "sport"
//     },
//     {
//         id: 1,
//         brand: "Mercedes Benz",
//         name: "G63",
//         year: "2023",
//         price: 120,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Mercedes-Benz/2025-Mercedes-AMG-G63-001-2800p.jpg",
//         topSpeed: 200,
//         category: "luxury"
//     },
//     {
//         id: 2,
//         brand: "Lucid",
//         name: "Air",
//         year: "2023",
//         price: 110,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lucid/2023-Lucid-Air-Sapphire-003-2400p.jpg",
//         topSpeed: 200,
//         category: "luxury"
//     },
//     {
//         id: 3,
//         brand: "Porsche",
//         name: "911 GT3 RS",
//         year: "2023",
//         price: 200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Porsche/2023-Porsche-911-GT3-RS-007-2400p.jpg",
//         topSpeed: 200,
//         category: "sport"
//     },
//     {
//         id: 4,
//         brand: "Lamborgini",
//         name: "Countach",
//         year: "2022",
//         price:  1300,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lamborghini/2022-Lamborghini-Countach-LPI-800-4-008-2400p.jpg",
//         topSpeed: 200,
//         category: "hypercars"
//     },
//     {
//         id: 5,
//         brand: "Dodge",
//         name: "Charger",
//         year: "1969",
//         price: 60,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Ringbrothers/1969-Ringbrothers-Dodge-Charger-Captiv-005-2400p.jpg",
//         topSpeed: 200,
//         category: "vintage"
//     },
//     {
//         id: 6,
//         brand: "Mclaren",
//         name: "765LT Spyder",
//         year: "2022",
//         price: 300,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/McLaren/2022-McLaren-765LT-Spider-002-2400p.jpg",
//         topSpeed: 200,
//         category: "hypercars"
//     },
//     {
//         id: 7,
//         brand: "Bugatti",
//         name: "Chiron Super Sport",
//         year: "2022",
//         price: 1500,
//         rating: 5,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Bugatti/2022-Bugatti-Chiron-Super-Sport-002-2400p.jpg",
//         topSpeed: 200,
//         category: "hypercars"
//     },
//     {
//         id: 8,
//         brand: "Aston Martin",
//         name: "DB12",
//         year: "2024",
//         price: 800,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Aston-Martin/2024-Aston-Martin-DB12-001-2800p.jpg",
//         topSpeed: 200,
//         category: "sport"
//     },
//     {
//         id: 9,
//         brand: "Bentley",
//         name: "Continental GT Speed",
//         year: "2022",
//         price: 400,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Bentley/2022-Bentley-Continental-GT-Speed-003-2400p.jpg",
//         topSpeed: 200,
//         category: "luxury"
//     },
//     {
//         id: 10,
//         brand: "Ferrari",
//         name: "F40",
//         year: "1987",
//         price: 1200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Ferrari/1987-Ferrari-F40-005-2400p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 11,
//         brand: "Ford",
//         name: "GT40",
//         year: "1966",
//         price: 2000,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Ford/1966-Ford-GT40-Mk-II-004-2800p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 12,
//         brand: "Bentley",
//         name: "Bentayga S",
//         year: "2025",
//         price: 400,
//         rating: 5,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Bentley/2024-Bentley-Bentayga-S-Black-Edition-001-2800p.jpg",
//         topSpeed: 200,
//         category:"luxury"
//     },
//     {
//         id: 13,
//         brand: "Cadillac",
//         name: "Escalade-V",
//         year: "2023",
//         price: 120,
//         rating: 3,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Cadillac/2023-Cadillac-Escalade-V-005-2400p.jpg",
//         topSpeed: 200,
//         category:"luxury"
//     },
//     {
//         id: 14,
//         brand: "Land Rover",
//         name: "Range Rover Sport",
//         year: "2023",
//         price: 290,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Land-Rover/2023-Land-Rover-Range-Rover-Sport-001-2400p.jpg",
//         topSpeed: 200,
//         category:"luxury"
//     },
//     {
//         id: 15,
//         brand: "Lexus",
//         name: "LX 600",
//         year: "2022",
//         price: 70,
//         rating: 3,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lexus/2022-Lexus-LX-600-Offroad-JAOS-005-2400p.jpg",
//         topSpeed: 200,
//         category:"luxury"
//     },
//     {
//         id: 16,
//         brand: "Mercedes Benz",
//         name: "Mayback s580",
//         year: "2021",
//         price: 200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Mercedes-Benz/2021-Mercedes-Maybach-S-580-003-2400p.jpg",
//         topSpeed: 200,
//         category:"luxury"
//     },
//     {
//         id: 17,
//         brand: "Bugatti",
//         name: "EB110",
//         year: "1993",
//         price: 2000,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Bugatti/1993-Bugatti-EB110-SuperSport-006-2400p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 18,
//         brand: "Ford",
//         name: "Mustang GT",
//         year: "1968",
//         price: 56,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Ford/1968-Ford-Mustang-GT-Bullitt-001-2800p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 19,
//         brand: "Lamborghini",
//         name: "Murcielago",
//         year: "2022",
//         price: 2000,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lamborghini/2002-Lamborghini-Murcielago-001-2400p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 20,
//         brand: "Lamborghini",
//         name: "Miura SV",
//         year: "1971",
//         price: 180,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lamborghini/1971-Lamborghini-Miura-SV-005-2800p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 21,
//         brand: "Lamborghini",
//         name: "Countach",
//         year: "1985",
//         price: 1500,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lamborghini/1985-Lamborghini-Countach-Quattrovalvole-004-2800p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 22,
//         brand: "Porsche",
//         name: "911 Speedster",
//         year: "1989",
//         price: 200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Porsche/1989-Porsche-911-Speedster-001-2400p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 23,
//         brand: "Porsche",
//         name: "Carrera GT",
//         year: "2004",
//         price: 1000,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Porsche/2004-Porsche-Carrera-GT-004-2400p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 24,
//         brand: "Dodge",
//         name: "Viper SRT10",
//         year: "2003",
//         price: 80,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Dodge/2003-Dodge-Viper-SRT10-Convertible-003-2800p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 25,
//         brand: "Audi",
//         name: "RS5",
//         year: "2023",
//         price: 150,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Audi/2023-Audi-RS5-Competition-Plus-004-2400p.jpg",
//         topSpeed: 200,
//         category:"sport"
//     },
//         {
//         id: 26,
//         brand: "BMW",
//         name: "M2",
//         year: "2023",
//         price: 90,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/BMW/2023-BMW-M2-001-2400p.jpg",
//         topSpeed: 200,
//         category:"sport"
//     },
//     {
//         id: 27,
//         brand: "Cadillac",
//         name: "CT4-V Blackwing",
//         year: "2024",
//         price: 120,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Cadillac/2022-Cadillac-CT4-V-Blackwing-002-2400p.jpg",
//         topSpeed: 200,
//         category:"sport"
//     },
//     {
//         id: 28,
//         brand: "Ford",
//         name: "Mustang Dark Horse",
//         year: "2024",
//         price: 80,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Ford/2024-Ford-Mustang-Dark-Horse-002-2400p.jpg",
//         topSpeed: 200,
//         category:"sport"
//     },
//     {
//         id: 29,
//         brand: "Mclaren",
//         name: "750s",
//         year: "2024",
//         price: 200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/McLaren/2024-McLaren-750S-Spider-003-2800p.jpg",
//         topSpeed: 200,
//         category:"sport"
//     },
//     {
//         id: 30,
//         brand: "Mercedes Benz",
//         name: "C43 AMG",
//         year: "2023",
//         price: 100,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Mercedes-Benz/2023-Mercedes-AMG-C43-003-2400p.jpg",
//         topSpeed: 200,
//         category:"sport"
//     },
//     {
//         id: 31,
//         brand: "Ford",
//         name: "GT40",
//         year: "1966",
//         price: 2000,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/BMW/2023-BMW-M2-001-2400p.jpg",
//         topSpeed: 200,
//         category:"vintage"
//     },
//     {
//         id: 32,
//         brand: "Maserati",
//         name: "MC20",
//         year: "2023",
//         price: 200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Maserati/2023-Maserati-MC20-Notte-Edition-002-2800p.jpg",
//         topSpeed: 200,
//         category:"hypercars"
//     },
//     {
//         id: 33,
//         brand: "Lamborghini",
//         name: "Aventador LP780-4",
//         year: "2024",
//         price: 200,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-007-2400p.jpg",
//         topSpeed: 200,
//         category:"hypercars"
//     },
//     {
//         id: 34,
//         brand: "Rimac",
//         name: "Nevera R",
//         year: "2025",
//         price: 2500,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Rimac/2025-Rimac-Nevera-R-005-2800p.jpg",
//         topSpeed: 200,
//         category:"hypercars"
//     },
//     {
//         id: 35,
//         brand: "Koenigsegg",
//         name: "Jesko",
//         year: "2021",
//         price: 1500,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Koenigsegg/2021-Koenigsegg-Jesko-Absolut-007-2800p.jpg",
//         topSpeed: 200,
//         category:"hypercars"
//     },
//     {
//         id: 36,
//         brand: "Hennessey",
//         name: "Venom F5",
//         year: "2023",
//         price: 1800,
//         rating: 4,
//         imgUrl: "https://www.wsupercars.com/wallpapers-phone/Hennessey/2023-Hennessey-Venom-F5-Roadster-001-2400p.jpg",
//         topSpeed: 200,
//         category:"hypercars"
//     }
// ]

