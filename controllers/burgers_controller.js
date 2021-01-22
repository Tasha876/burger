const express = require('express');



const connection = require('../config/connection')

const burger = require('../models/burger');

module.exports = (app) => {
  
  app.get('/', async (req,res) => {
    let burgers = await burger.selectAll();
    res.render('index', {burgers: burgers});
  });

  app.post('/', async (req, res) => {
    console.log(req.body)
    let burgers = await burger.add(req.body.burger_name);
    res.render('/')
  });

  app.post('/update'), async (req, res) => {
    let burger = req.body
    let data = await burger.update(burger.id, burger.burger_name, burger.devoured);
    res.json(data)
  }
}