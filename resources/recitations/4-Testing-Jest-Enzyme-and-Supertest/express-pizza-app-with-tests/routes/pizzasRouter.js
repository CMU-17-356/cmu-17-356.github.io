const express = require("express");
const router = express.Router();

let pizzas = [
  { id: "1", name: "pepperoni pizza", price: 20 },
  { id: "2", name: "hawaiian pizza", price: 16 }
];

router.get("/", (req, res) => {
  res.json(pizzas);
});

router.get("/:id", (req, res, next) => {
  const pizza = pizzas.find(element => element.id == req.params.id);

  if (pizza) {
    res.json(pizza);
  } else {
    next();
  }
});

router.post("/", (req, res) => {
  const newPizza = {
    id: String(pizzas.length + 1),
    name: req.body.name,
    price: req.body.price
  };
  pizzas = [...pizzas, newPizza];
  res.json(newPizza);
});

router.put("/:id", (req, res) => {
  pizzas = pizzas.map(pizza => {
    const idOfRequestedPizza = req.params.id;

    if (pizza.id === idOfRequestedPizza) return Object.assign(pizza, req.body);
    else return pizza;
  });

  res.json(pizzas.find(pizza => pizza.id === req.params.id));
});

router.delete("/:id", (req, res) => {
  pizzas = pizzas.filter(pizza => pizza.id != req.params.id);
  res.json(`pizza with id ${req.params.id} deleted successfully`);
});

module.exports = router;
