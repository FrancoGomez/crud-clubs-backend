const { Router } = require('express');
const controllers = require('../controllers');
const upload = require('../storage/index');

require('dotenv').config();

const router = Router();

router.post('/clubs/', upload.single('crest'), controllers.createClub);
router.get('/clubs', controllers.getAllClubs);
router.get('/clubs/backup', controllers.resetDatabase);
router.get('/clubs/:teamTLA', controllers.getClubByTLA);
router.put('/clubs/:teamTLA', upload.single('crest'), controllers.updateClub);
router.delete('/clubs/:teamTLA', controllers.deleteClub);

module.exports = router;
