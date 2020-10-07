// Core module in NodeJS
const path = require('path')

const express = require('express');
const router = express.Router()

router.get("/", (req, res, next) => {
    console.log("Middleware");
    /**
     * sendFile() Detects the correct path based on operating system.
     */
    res.status(200).render('shop', {pageTitle: 'Shop Page'})
  });


module.exports = router