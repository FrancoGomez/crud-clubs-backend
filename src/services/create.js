const fs = require('node:fs');
const path = require('path');
const mapClub = require('../mappers/club');

const create = async (club) => {
  try {
    const clubDatabasePath = path.join(__dirname, '../database/clubs.json');
    const clubsDatabase = JSON.parse(fs.readFileSync(clubDatabasePath));

    const clubMapped = mapClub(club, { id: clubsDatabase.length });

    clubsDatabase.push(clubMapped);
    fs.writeFileSync(clubDatabasePath, JSON.stringify(clubsDatabase));

    return clubMapped;
  } catch (error) {
    return error;
  }
};

module.exports = create;
