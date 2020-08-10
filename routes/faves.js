const express = require('express');
const router = express.Router();
const axios = require('axios');

const db = require('../models');

let API_KEY = process.env.API_KEY;

router.get('/', async (req, res) => {
    try {
      // TODO: Get all records from the DB and render to view
      const locateMovies = await db.fave.findAll() 
      res.render('fave', { fave: locateMovies });
    } catch (error) {
  
      console.log(error, 'error');
  
    }
      
  });


router.post('/', async (req, res) => {
    try {
      // TODO: Get form data and add a new record to DB
      await db.fave.findOrCreate({
        where: {
          title: req.body.title,
        },
        defaults: {
            imdbID: req.body.imdbID
        }
      });
      res.redirect('fave');
    } catch (error) {
  
      console.log(error, 'error');
    }
    
  });


 
module.exports = router;