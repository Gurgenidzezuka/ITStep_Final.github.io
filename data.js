

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  var Users = [
    {name:"Nikolz", email:"Nikoloz@gmail.com", password:"password12", phone:"1234567890"},
    {name:"Luck", email:"LUCK@gmail.com", password:"password25", phone:"9876543210"},
    {name:"Morgan", email:"Morgan@gmail.com", password:"password67", phone:"5678901234"},
    {name:"Steve", email:"Steve@gmail.com", password:"password20", phone:"4321098765"},
    {name:"Rick", email:"Rickr@gmail.com", password:"password15", phone:"7890123456"}
 ];
 
 console.log(Users);
 function Hotel(name, location, country, city, stars, img, role, rooms, roomPhoto, price, activity, description) {
    this.name = name;
    this.location = location;
    this.country = country;
    this.city = city;
    this.stars = stars;
    this.img = img;
    this.role = role;
    this.rooms = rooms;
    this.roomPhoto = roomPhoto;
    this.price = price;
    this.activity = activity;
    this.description = description;
}

var Hotels_Restaurants = [
    new Hotel(
        "Monastero Santa Rosa Hotel & Spa",
        "Salerno, Italy",
        "Italy",
        "Salerno",
        "hotel",
        4,
        "$2875",
        "Diving",
        
    ),
    new Hotel(
        "Grand Hotel Tremezzo",
        "Lake Como, Italy",
        "Italy",
        "Como",
        "hotel",
        6,
        "$1517",
        "Rafting",
    ),
    new Hotel(
        "The Oberoi Udaivilas Hotel",
        "Udaipur, India",
        "India",
        "Udaipur",
        "hotel",
        3,
        "Wingsuit surfing",
       
    ),
    new Hotel(
        "AKA Beverly Hills Hotel",
        "Los Angeles, USA",
        "USA",
        "Los Angeles",
        "hotel",
        5,
        "Mountain biking",
        
    ),
    new Hotel(
        "Majestic Elegance",
        "Dominican Republic",
        "Dominican Republic",
        "hotel",
        4,
        "skiing"

    ),
    new Hotel(
        "Dreams Watervilla",
        "Meeru Island, Maldives",
        "Maldives",
        "hotel",
        5,
        "Water Sports"
    ),
    new Hotel(
        "Waldorf Astoria",
        "Rome, Italy",
        "Italy",
        "hotel",
        3,
        "golf"
    ),
    new Hotel(
        "Gilli Air",
        "Indonesia",
        "Indonesia",
        "hotel",
        4,
        "golf"
    ),
    new Hotel(
        "Gilli Air",
        "Indonesia",
        "Indonesia",
        "hotel",
        4,
        "Yoga and Wellness"

    ),
    new Hotel(
        "The Savoy",
        "London,Uk",
        "UK",
        "hotel",
        4,
        "biking"
    ),
    new Hotel(
        "Aman",
        "Tokyo,Japan",
        "Japan",
        "hotel",
        4,
        "sailing"
    ),
    new Hotel(
        "Burj Al Arab Jumeirah",
        "United Arab Emirates",
        "United Arab Emirates",
        "hotel",
        5,
        "surfing" 
    ),
    new Hotel(
        "The Plaza Hotel",
        "New York,Usa",
        "USA",
        "hotel",
        5,
        "skateboarding" 
    ),
];

console.log(Hotels_Restaurants);



var Activities = [];

function Activity(title, img) {
  this.title = title;
  this.img = img;
}

function addActivity(title, img) {
  var activity = new Activity(title, img);
  Activities.push(activity);
}

addActivity("Sailing", "images/sailing.png");
addActivity("Climbing", "images/climbing.png");
addActivity("Skiing", "images/skiing.png");
addActivity("Hiking", "images/Hiking.png");
addActivity("running", "images/runn.png");
addActivity("ioga", "images/ioga.png");
addActivity("surfing", "images/surf.png");
addActivity("biking", "images/biking2.png");
addActivity("skateboarding", "images/skateboarding.png");
addActivity("hunting", "images/hunting.png");
addActivity("fishing", "images/fishing.png");
addActivity("Dancing", "images/dancing.png");

console.log(Activities);
