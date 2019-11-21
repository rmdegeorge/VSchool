// bountyRoutes.js

const express = require("express");
const bountyRouter = express.Router();

const uuid = require('uuid');

const database = require('../bountiesData.json');
bountyRouter.use(express.json());

bountyRouter.route('/')
  .get((req,res) => {
    res.send(database);
  })
  .post((req,res) => {
    req.body._id = uuid.v4();
    database.push(req.body);
    res.send(req.body);
  });

bountyRouter.route('/:_id')
  .get((req,res) => {
    const foundBounty = database.find(bounty => bounty._id == req.params._id);
    res.send(foundBounty);
  })
  .put((req,res) => {
    let {_id} = req.params;
    let updatedBounty = req.body;
    database.forEach(bounty => bounty._id == _id && Object.assign(bounty, updatedBounty));
    res.send(updatedBounty);
  })
  .delete((req,res) => {
    let {_id} = req.params;
    let index = database.findIndex(bounty => bounty._id == _id);
    database.splice(index,1);
    res.send('Successfully deleted Bounty');
  });


module.exports = bountyRouter;
