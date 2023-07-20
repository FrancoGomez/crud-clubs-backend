const fs = require('node:fs');
const path = require('path');
const mapClub = require('../mappers/club');

const update = async (req, tla) => {
  try {
    const clubDatabasePath = path.join(__dirname, '../database/clubs.json');
    const clubsDatabase = JSON.parse(fs.readFileSync(clubDatabasePath));
    const oldClub = clubsDatabase.find((club) => club.tla === tla);

    if (!oldClub) return null;
    if (req.file) req.body.crestUrl = req.file.filename;

    const newClub = mapClub(req.body, oldClub);
    const oldClubIndex = clubsDatabase.findIndex((club) => club.tla === tla);
    clubsDatabase[oldClubIndex] = newClub;

    fs.writeFileSync(clubDatabasePath, JSON.stringify(clubsDatabase));

    return newClub;
  } catch (error) {
    return error;
  }
};

module.exports = update;
