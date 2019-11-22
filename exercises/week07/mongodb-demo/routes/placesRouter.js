const express = require('express');
const placeRouter = express.Router();
const Place = require('../models/Place');

placeRouter.route('/')
  .post((req,res) => {
    const newPlace = new Place(req.body);
    newPlace.save((error, place) => {
      if (error) return res.status(500).send(error); // handles the error
      return res.status(201).send(place)
    })
  })
  .get((req,res) => {
    Place.find((error, places) => {
      if(error) return res.status(500).send(error);
      return res.status(200).send(places);
    })
  })

placeRouter.route('/:_id')
  .get((req,res) => {
    Place.findById(req.params._id, (error, place) => {
      if (error) return res.status(500).send(error);
      return res.status(200).send(place);
    })
  })
  .put((req, res) => {
    Place.findOneAndUpdate(
      {_id: req.params._id},
      req.body,
      {new: true},
      (error, place) => {
        if (error) return res.status(500).send(error);
        return res.status(200).send(place);
      }
    )
  })
  .delete((req,res) => {
    Place.findOneAndDelete(
      {_id: req.params._id},
      (error, place) => {
        if (error) return res.status(500).send(error);
        return res.status(200).send(place);
      }
    )
  })

module.exports = placeRouter;
