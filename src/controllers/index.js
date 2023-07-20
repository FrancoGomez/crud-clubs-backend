const reset = require('../services/reset');
const create = require('../services/create');
const destroy = require('../services/destroy');
const findAll = require('../services/findAll');
const findOne = require('../services/findOne');
const update = require('../services/update');
const requiredParamsExist = require('../services/testClub');

const createClub = async (req, res) => {
  if (!requiredParamsExist(req.body)) return res.status(400).send({ error: 'Missing required params' });
  try {
    const response = await create(req.body);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllClubs = async (req, res) => {
  try {
    const response = await findAll(req);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getClubByTLA = async (req, res) => {
  try {
    const tla = req.params.teamTLA;

    if (tla.length < 3) return res.status(401).send({ error: 'A TLA needs to be 3 characters long' });

    const response = await findOne(req, tla.toUpperCase());
    if (!(Object.keys(response).length === 0)) return res.status(200).json(response);
    return res.status(404).send({ error: 'Club with the specified TLA does not exists' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateClub = async (req, res) => {
  if (!requiredParamsExist(req.body)) return res.status(400).send({ error: 'Missing required params' });
  try {
    const tla = req.params.teamTLA;

    if (tla.length < 3) return res.status(401).send({ error: 'A TLA needs to be 3 characters long' });

    const response = await update(req, tla.toUpperCase());
    if (response) return res.status(200).json(response);
    return res.status(404).send({ error: 'Club with the specified TLA does not exists' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteClub = async (req, res) => {
  try {
    const tla = req.params.teamTLA;

    if (tla.length < 3) return res.status(401).send({ error: 'A TLA needs to be 3 characters long' });

    const response = await destroy(tla.toUpperCase());
    if (response) return res.status(200).json({ success: 'The team has been deleted successfully' });
    return res.status(404).send({ error: 'Club with the specified TLA does not exists' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const resetDatabase = async (req, res) => {
  try {
    const response = await reset();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createClub, getAllClubs, getClubByTLA, updateClub, deleteClub, resetDatabase,
};
