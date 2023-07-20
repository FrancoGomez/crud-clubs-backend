const Club = require('../entities/club');
/**
 * @param {Object} data
 * @returns {Club}
 */
const mapClub = (club, oldClub = {}) => new Club(
  club.id || oldClub.id || null,
  {
    id: club.areaId || null,
    name: club.area || null,
  },
  club.name || null,
  club.shortName || null,
  club.tla ? club.tla.toUpperCase() : null,
  club.crestUrl || oldClub.crestUrl || null,
  club.address || null,
  club.phone || null,
  club.website || null,
  club.email || null,
  club.founded || null,
  club.clubColors || null,
  club.venue || null,
);

module.exports = mapClub;
