const express = require('express')
const router = express.Router();
const path = require('path')

const rootDir = require('../util/path')

router.get("/add-product", (req, res, next) => {
    console.log("Middleware");
    res.send(
      `<form action="/admin/product" method="POST" >
          <input type="text" name="title">
          <button type="submit">Submit</button>
      </form>`
    );
  });
  
  router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  });

module.exports = router