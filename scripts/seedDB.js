const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the cxplace collection and inserts the cxplaces below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cxdb",
  {
    useMongoClient: true
  }
);

const cxplaceSeed = [
  {
    name: "Dolarex, LLC",
    address: "707 Broadway Ste 1410 San Diego, CA 92101",
    lat: "32.715403",
    lng: "-117.158024",
    phone: "(619) 662-6049",
    commision: "0",
    buy: "18.40",
    sell: "18.20",
    hours: "Monday to Friday, 7:00AM to 4:00PM",
    image: "http://www.dolarex.com/voxfiles/skins/skn-dolarex/htmls/images/dolarex-logo.png",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "Golden Money Transfer Inc",
    address: "739 4th Ave #204 San Diego, CA 92101",
    lat: "32.55051",
    lng: "-117.038746",
    phone: "(888) 702-5656",
    commision: "0",
    buy: "18.36",
    sell: "18.18",
    hours: "Monday to Sunday, 8:00AM to 7:00PM",
    image: "http://www.coosanjer.com.gt/wp-content/uploads/2017/02/Golden-Money-green-logo-small.jpg",
    comments:["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "Casa de Cambio",
    address: "117 W Ysdiro Blvd San Ysidro, CA 92173",
    lat: "32.552803",
    lng: "-117.044974",
    phone: "(619) 428-0410",
    commision: "0",
    buy: "18.35",
    sell: "18.20",
    hours: "Monday to Friday, 9:00AM to 5:00PM",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "TJ Currency Exchange",
    address: "335 E San Ysidro Blvd, San Ysidro, CA 92173",
    lat: "32.551146",
    lng: "-117.038337",
    phone: "(619) 428-0066",
    commision: "12",
    buy: "17.59",
    sell: "17.29",
    hours: "Monday to Friday, 7:00AM to 4:00PM",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],		
    date: new Date(Date.now())
  },
  {
    name: "Intercam",
    address: "364 E.San Ysidro Blvd San Ysidro, CA 92173",
    lat: "32.55051",
    lng: "-117.038746",
    phone: "(619) 690-0776",
    commision: "0",
    buy: "17.60",
    sell: "17.48",
    hours: "Monday to Friday, 7:00AM to 4:00PM",
    image: "http://mallsmexico.com/imagenes/2016/02/23203_Intercam.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "SD Money Exchange",
    address: "395 E San Ysidro Blvd #A San Ysidro, CA 92173",
    lat: "32.551156",
    lng: "-117.037687",
    phone: "(619) 576-3503",
    commision: "12",
    buy: "17.60",
    sell: "17.50",
    hours: "Monday to Friday, 7:00AM to 4:00PM",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "Agau Holdings LLC",
    address: "2745 Otay Pacific Dr San Diego, CA 92154",
    lat: "32.548146",
    lng: "-116.974664",
    phone: "(619) 955-7210",
    commision: "0",
    buy: "17.80",
    sell: "17.61",
    hours: "Open 24 Hours",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "Currency Exchange International",
    address: "1640 Camino Del Rio N San Diego, CA 92108",
    lat: "32.76586",
    lng: "-117.155795",
    phone: "(619) 574-0133",
    commision: "0",
    buy: "16.77",
    sell: "16.77",
    hours: "Monday to Friday, 10:00AM to 9:00PM",
    image: "ttps://media.glassdoor.com/sqll/751786/currency-exchange-international-squarelogo-1429768257677.png",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "JSD",
    address: "654 E San Ysidro Blvd San Diego, CA 92173",
    lat: "32.546661",
    lng: "-117.033158",
    phone: "(619) 428-4685",
    commision: "0",
    buy: "17.40",
    sell: "17.30",
    hours: "Monday to Sunday, 7:30AM to 7:30PM",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "Express Pawn Shop",
    address: "390 E San Ysidro Blvd San Ysidro, CA 92173",
    lat: "32.550464",
    lng: "-117.037965",
    phone: "(619) 428-1800",
    commision: "0",
    buy: "17.50",
    sell: "17.45",
    hours: "Monday to Sunday, 9:00AM to 8:00PM",
    image: "https://www.expresspawn.com/images/logo.png",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "ABC Money Exchange",
    address: "2510 Otay Center Dr San Diego, CA 92154",
    lat: "32.553151",
    lng: "-116.942766",
    phone: "(619) 934-1403",
    commision: "0",
    buy: "17.57",
    sell: "17.50",
    hours: "Monday to Sunday, 9:00AM to 8:00PM",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
  {
    name: "Zulemy",
    address: "Blvd.Agua Caliente 11050 22014 Tijuana, Baja California Mexico",
    lat: "32.514901",
    lng: "-117.011578",
    phone: "+52 664 972 9158",
    commision: "0",
    buy: "18.31",
    sell: "18.25",
    hours: "Monday to Friday, 7:00AM to 4:00PM",
    image: "https://image.freepik.com/free-vector/modern-money-changer-logo-template-designs_7649-31.jpg",
    comments: ["test1", "test2"],
    date: new Date(Date.now())
  },
];


db.Cxplace
  .remove({})
  .then(() => db.Cxplace.collection.insertMany(cxplaceSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const userSeed = [
  {
    username: "jaime",
    password: "12345",
    pic: "test",
    date: new Date(Date.now())
  },
  {
    username: "elma",
    password: "12345",
    pic: "test",
    date: new Date(Date.now())
  },
  {
    username: "jens",
    password: "12345",
    pic: "test",
    date: new Date(Date.now())
  },
  {
    username: "allan",
    password: "12345",
    pic: "test",
    date: new Date(Date.now())
  },
  {
    username: "tom",
    password: "12345",
    pic: "test",
    date: new Date(Date.now())
  },
];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  
  });
