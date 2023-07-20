const fs = require('node:fs');
const path = require('path');

const reset = async () => {
  try {
    const clubDatabasePath = path.join(__dirname, '../database/clubs.json');
    const backupPath = path.join(__dirname, '../database/backup.json');
    const backup = JSON.parse(fs.readFileSync(backupPath));
    fs.writeFileSync(clubDatabasePath, JSON.stringify(backup));

    return backup;
  } catch (error) {
    return error;
  }
};

module.exports = reset;
