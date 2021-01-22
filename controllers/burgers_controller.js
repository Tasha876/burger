const express = require('express');



const connection = require('../config/connection')

module.exports = (app) => {
  const burger = require('../models/burger.js');

  app.get('/api/all', (req,res) => {
    let data = burger.selectAll();
    res.json(data)
  });

  app.post('/api/new', (req, res) => {
    let data = burger.add('bigMac');
    res.json(data);
  });

  // app.post('/api/new'), (req, res) => {
  //   let burger = req.body
  //   let data = burger.update(burger.id, burger.burger_name, burger.devoured);
  //   res.json(data)
  // }
}