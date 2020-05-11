const express = require("express"),
      app     = express();
      cards   = require("./cards.json");
      cardFn = require("./card.js");

app.use(express.static("public"));

app.get("/carta", (req, res) => {
    let result = cardFn.findCards(req.query);
    
    res.status(200).send({cards: result});
});


app.listen(process.env.PORT || 3000);