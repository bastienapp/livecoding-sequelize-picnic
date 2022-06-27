const PicNic = require("../models/picnic.model");

async function getAll(req, res) {
  res.send(await PicNic.findAll());
}

async function create(req, res) {
  const picnic = await PicNic.create(req.body);
  res.status(201).send(picnic);
}

module.exports = { getAll, create };
