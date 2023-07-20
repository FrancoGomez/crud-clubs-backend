const Area = require('../entities/area');
/**
 * @param {Object} data
 * @returns {Area}
 */
const mapArea = (area = {}) => new Area(area.id || null, area.name || null);

module.exports = mapArea;
