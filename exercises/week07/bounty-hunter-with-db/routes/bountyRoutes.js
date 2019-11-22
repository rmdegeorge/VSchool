// bountyRoutes.js

const express = require("express");
const bountyRouter = express.Router();
const Bounty = require('../models/Bounty');

bountyRouter.route('/')
  .get((req,res) => {
    Bounty.find((error,bounties) => {
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

bountyRouter.route('/:_id')
  .delete((req,res) => {
    Bounty.findOneAndDelete(
      {_id: req.params._id},
      (error, bounty) => {
        if (error) return res.status(500).send(error);
        return res.status(200).send(bounty);
      }
    )
  })
  .put((req,res) => {
    Bounty.findOneAndUpdate(
      {_id: req.params._id},
      req.body,
      {new: true},
      (error, bounty) => {
        if (error) return res.status(500).send(error);
        return res.status(200).send(bounty);
      }
    )
  })

module.exports = bountyRouter;
