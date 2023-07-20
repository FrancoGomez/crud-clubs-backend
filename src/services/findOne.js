const fs = require('node:fs');
const path = require('path');

const findOne = async (req, tla) => {
  try {
    const clubDatabasePath = path.join(__dirname, '../database/clubs.json');
    const clubsDatabase = JSON.parse(fs.readFileSync(clubDatabasePath));

    const newClub = clubsDatabase.find((club) => club.tla === tla);
    newClub.crestUrl = `${req.protocol}://${req.get('host')}/${newClub.crestUrl}`;

    if (Object.keys(newClub).length === 0) return null;

    return newClub;
  } catch (error) {
    return error;
  }
};

module.exports = findOne;
