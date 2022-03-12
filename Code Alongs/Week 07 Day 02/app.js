// import { create } from 'express-handlebars';

const express = require("express");
const exphbs = require("express-handlebars");

// create Express app
// const hbs = create();
const app = express();
const serverNum = 4000;

// data handled by node application
var partials = {
  message: "Hello World!",
};

// configure express-handlebars as our view engine
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

// set/point-to view directories
app.set("view engine", "hbs");
app.set("views", "./views");

// set the views for specific routes expected to be accessed
app.get("/", (req, res) => {
  res.render("home", {
    cards: [
      {
        inPhaseFour: false,
        title: "Iron Man",
        text: " Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity.",
        imageURL: "https://www.marvelsynergy.com/images/iron-man-infinity-war.png",
      },
      {
        inPhaseFour: false,
        title: "Captain America",
        text: `Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak of human perfection by an experimental "super-soldier serum" after joining the military to aid the United States government's efforts in World War II.`
        ,
        imageURL: "https://cdn.vox-cdn.com/thumbor/99DmqObvYm8uSQFMNcOfox1-q-E=/0x0:2158x1068/1400x1050/filters:focal(1159x295:1503x639):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/49618171/capammain.0.jpg",
      },
      {
        inPhaseFour: true,
        title: "Thor",
        text: `Thor is an Asgardian warrior-prince, the God of Thunder, and a self-proclaimed protector of Earth. Thor subsequently became well known for his actions on Earth, which included acting as a founding member of the Avengers despite being the only Avenger that is not from Earth.
        `,
        imageURL: "https://pyxis.nymag.com/v1/imgs/aee/f4b/e92897befe8b00b057826626e7076188e1-chris-hemsworth-thor.rsquare.w1200.jpg",
      },
      {
        inPhaseFour: true,
        title: "Hulk",
        text: `Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.`,
        imageURL: "https://cdn.britannica.com/64/182864-050-8975B127/Scene-The-Incredible-Hulk-Louis-Leterrier.jpg",
      } //end of cards array
    ],
    name: "Gary",
    class: "FED2201"
  });
});

// // using partials with 'express-handlebars' package
// hbs.getPartials().then( (partials) => {
//     console.log(partials)
// })

// establish where server will actually run locally
app.listen(serverNum, () => {
  console.log(`The web server has started on port ${serverNum}`);
});
