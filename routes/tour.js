const router = require("express").Router();
const tourList = require("../models/tourList");


//Create a new tour

router.post("/", cursor.limit(2),  async (req, res) => {
  
    const newList = new tourList(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  
});


module.exports = router;
