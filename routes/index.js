const path = require('path');
const express = require('express');
const router = express.Router();
let projectData = {};

router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname, '../','views','/index.html'));
});

router.get('/result',(req,res) => {
    res.sendFile(path.join(__dirname,'../','views','/result.html'));
    
});

//Post Route
router.post('/result',(req, res) => {
    projectData = ({
        temperature: req.body.temp,
        date: req.body.date,
        content: req.body.content
    });
    res.send(projectData);
});

router.get("*", (req, res) => {
    res.send("Page not found.");
})

module.exports.routes = router;
