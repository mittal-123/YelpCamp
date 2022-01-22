const mongoose= require('mongoose');
const cities= require('./cities');
const {places, descriptors}= require('./seedHelpers');
const Campground= require('../models/campground');

mongoose.connect('mongodb://localhost:27017/db_YelpCamp');

const db= mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connected");
});

const sample= array => array[Math.floor(Math.random() * array.length)];

const seedDB= async()=>{
    await Campground.deleteMany({});
    for(let i=0; i<300;i++){
        const random1000= Math.floor(Math.random()*1000);
        const price= Math.floor(Math.random()*20)+10;
        const camp= new Campground({
            author: "61e11b2ba91a8cdd945b5dfa",
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel harum laborum. Molestias, voluptatem dignissimos. In laudantium assumenda impedit ducimus aut? Reprehenderit dolorum officia consequuntur placeat temporibus atque repellendus error.',
            price,
            geometry: {
              type: "Point",
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude,
              ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/mittal-123/image/upload/v1642142525/YelpCamp/lq9498sllnfveqel22xe.png',
                  filename: 'YelpCamp/lq9498sllnfveqel22xe',
                },
                {
                  url: 'https://res.cloudinary.com/mittal-123/image/upload/v1642142385/YelpCamp/npy39vcxbhnmw3rg0nbl.png',
                  filename: 'YelpCamp/npy39vcxbhnmw3rg0nbl',
                }
              ]
        })
        await camp.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close();
})