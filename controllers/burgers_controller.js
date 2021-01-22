// const express = require('express');

const connection = require('../config/connection')

const burger = require('../models/burger');

module.exports = (app) => {
  
  app.get('/', async (req,res) => {
    let burgers = await burger.selectAll();
    res.render('index',{ burgers: burgers });
  });

  app.post('/', async (req, res) => {
    console.log(req.body)
    let burgers = await burger.add(req.body.burger_name);
    res.redirect('/');
  });

  app.post('/update/:id', async (req, res) => {
    console.log('hello')
    let{ id }= req.params
    let data = await burger.update(id, true);
    res.redirect('/')
  });
}