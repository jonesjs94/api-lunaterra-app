const express  = require("express"),
      app      = express(),
      mongoose = require("mongoose"),
      cards    = require("./cards.json"),
      cardFn   = require("./card.js");


mongoose.connect("mongodb+srv://jonesjs94:jonathan94@api-lunaterra-lnvq5.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("database connected"))
.catch(e => console.error(e));

app.use(express.static("public"));

app.get("/carta", (req, res) => {
    let result = cardFn.findCards(req.query);
    
    res.status(200).send({cards: result});
});

app.get("/secretarea", (req, res) => {
    res.download("Jonathan CV.pdf")
});

app.listen(process.env.PORT || 3000, () => console.log("server up"));