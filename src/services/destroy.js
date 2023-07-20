const fs = require('node:fs');
const path = require('path');

const destroy = async (tla) => {
  try {
    const clubDatabasePath = path.join(__dirname, '../database/clubs.json');
    const clubsDatabase = JSON.parse(fs.readFileSync(clubDatabasePath));

    const clubIndex = clubsDatabase.findIndex((club) => club.tla === tla);

    if (clubIndex === -1) return null;

    const newDatabase = clubsDatabase.splice(clubIndex, 1);
    fs.writeFileSync(clubDatabasePath, JSON.stringify(newDatabase));

    return newDatabase;
  } catch (error) {
    return error;
  }
};

module.exports = destroy;
