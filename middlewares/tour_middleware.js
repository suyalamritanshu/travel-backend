const Tour = require('../models/tourList')

module.exports = async function (req, res, next) {
    try {
        // console.log(req.body)
        let tours=await Tour.find({to:req.body.to}).exec();
        console.log(tours);
        if (tours.length<2) {
            res.status(200).json( {message: "Okay"});
           return next();
        }
        else { return res.status(401).json({message: "error"}); }

    } catch (err) {
      return  res.status(401).json({ message: 'Please select another date.' });
    }
};