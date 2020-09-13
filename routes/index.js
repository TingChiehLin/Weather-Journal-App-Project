const path = require('path');
const express = require('express');
const router = express.Router();
// const projectdata = {};

router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname, '../','views','/index.html'));
});

router.get("*", (req, res) => {
    res.send("Page not found.");
})

// router.get('/result',(req,res) => {
//     res.status(200).send(projectData);
// });

//Post Route
router.post('/result',(req, res) => {
    
    // projectData.push({
    //     temperature: req.body.temp,
    //     date: req.body.date,
    //     content: req.body.content
    // });

    //console.log(req.body);
    // res.status(200).send({
    //     sucess: true,
    //     message: "Data send successfully",
    //     data: projectData
    // });
});


module.exports.routes = router;
