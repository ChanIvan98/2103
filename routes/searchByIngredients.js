const express = require('express');
const router = express.Router();
const ingredients = require("../Controllers/searchByIngredientController.js");

// This is to ensure that is only accept array as a payload.
var itemRouter = express.Router({strict: true});

router.get('/search-result', (req,res)=>{
    res.render("ingredient-search-result", {user:req.user})
});

router.get("/",(req,res)=>{
    res.render("search-by-Ingredient", {user:req.user})
});

router.post("/search",ingredients.query);

module.exports = router;