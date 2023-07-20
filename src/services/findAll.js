const fs = require('node:fs');
const path = require('path');

const findAll = async (req) => {
  try {
    const clubDatabasePath = path.join(__dirname, '../database/clubs.json');
    const clubsDatabase = JSON.parse(fs.readFileSync(clubDatabasePath));

    clubsDatabase.map((club) => {
      const updatedClub = club;
      updatedClub.crestUrl = `${req.protocol}://${req.get('host')}/${club.crestUrl}`;
      return updatedClub;
    });

    return clubsDatabase;
  } catch (error) {
    return error;
  }
};

module.exports = findAll;
