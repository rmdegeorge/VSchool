// bountyRoutes.js

const express = require("express");
const bountyRouter = express.Router();

const Bounty = require('../Bounty');

const uuid = require('uuid');

// const database = require('../bountiesData.json');
// bountyRouter.use(express.json());

bountyRouter.route('/')
  // .get((req,res) => {
  //   res.send(database);
  // })
  // .post((req,res) => {
  //   req.body._id = uuid.v4();
  //   database.push(req.body);
  //   res.send(req.body);
  // });
  .get((req,res) => {
    Bounty.find((error,bounty) => {
      if (error) return res.status(500).send(error);
      return res.status(200).send(bounties);
    })
  })
  .post((req,res) => {
    const newBounty = new Bounty(req.body);
    newBounty.save((error, bounty) => {
      if (error) return res.status(500).send(error);
      return res.status(201).send(bounty);
    });
  })


// bountyRouter.route('/:_id')
//   .get((req,res) => {
//     const foundBounty = database.find(bounty => bounty._id == req.params._id);
//     res.send(foundBounty);
//   })
//   .put((req,res) => {
//     let {_id} = req.params;
//     let updatedBounty = req.body;
//     database.forEach(bounty => bounty._id == _id && Object.assign(bounty, updatedBounty));
//     res.send(updatedBounty);
//   })
//   .delete((req,res) => {
//     let {_id} = req.params;
//     let index = database.findIndex(bounty => bounty._id == _id);
//     database.splice(index,1);
//     res.send('Successfully deleted Bounty');
//   });


module.exports = bountyRouter;
