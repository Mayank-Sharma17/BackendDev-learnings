// express server setup
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date(); // The Date object is an inbuilt datatype of JavaScript language. It is used to work with dates and times. The Date object is created by using new keyword, i.e. new Date(). The Date object can be used date and time in terms of millisecond precision within 100 million days before or after 1/1/1970.
  const day = today.getDay(); // The getDay() method returns the day of the week (0 to 6) of a date. Sunday = 0, Monday = 1

  let type = "a weekday"; // default type and advice
  let adv = "it's time to work hard";

  if (day === 6 || day === 0) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type, // js object picked up by the index.ejs
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Serve running on port no ${port}.`);
});
