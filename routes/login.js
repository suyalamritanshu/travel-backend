const router = require("express").Router();
const sign = require("../models/login");


//Create a new tour

router.post("/",  async (req, res) => {
  
    const newList = new sign(req.body);
    try {
      const savedList = await newList.save();
     return res.status(201).json(savedList);
    } catch (err) {
      console.log(err);
     return res.status(400);
    }
}) ;


module.exports = router;
