/* eslint-disable no-undef */
/// <reference types="jest" />

const mapClub = require('../club');

describe('create a club object', () => {
  describe('given that there are no params', () => {
    it('should return an object full of null params', () => {
      const dateSpy = jest.spyOn(global, 'Date');
      const mappedClub = mapClub({});
      const date = dateSpy.mock.instances[0];
      const expectedClub = {
        id: null,
        area: {
          id: null,
          name: null,
        },
        name: null,
        shortName: null,
        tla: null,
        crestUrl: null,
        address: null,
        phone: null,
        website: null,
        email: null,
        founded: null,
        clubColors: null,
        venue: null,
        lastUpdated: date,
      };

      expect(mappedClub).toEqual(expectedClub);
    });
  });

  describe('given the params are insufficient', () => {
    it('should return an object with some params that are null', () => {
      const dateSpy = jest.spyOn(global, 'Date');
      const mappedClub = mapClub({ tla: 'abc' });
      const date = dateSpy.mock.instances[0];
      const expectedClub = {
        id: null,
        area: {
          id: null,
          name: null,
        },
        name: null,
        shortName: null,
        tla: 'ABC',
        crestUrl: null,
        address: null,
        phone: null,
        website: null,
        email: null,
        founded: null,
        clubColors: null,
        venue: null,
        lastUpdated: date,
      };

      expect(mappedClub).toEqual(expectedClub);
    });
  });

  describe('given that the params are the necessary ones', () => {
    it('should return a full object', () => {
      const dateSpy = jest.spyOn(global, 'Date');
      const mappedClub = mapClub({
        id: 22,
        areaId: 2323,
        area: 'Argentina',
        name: 'Club Altetico River Plate',
        shortName: 'River Plate',
        tla: 'RIV',
        crestUrl: '1688475762229.jpg',
        address: 'Av. Figueroa Alcorta 7597, Buenos Aires',
        phone: '+54 (11) 5238-2505',
        website: 'https://www.cariverplate.com.ar/',
        email: 'club@cariverplate.com.ar',
        founded: '1901',
        clubColors: 'Red / White',
        venue: 'Estadio Mâs Monumental',
      });
      const date = dateSpy.mock.instances[0];
      const expectedClub = {
        id: 22,
        area: {
          id: 2323,
          name: 'Argentina',
        },
        name: 'Club Altetico River Plate',
        shortName: 'River Plate',
        tla: 'RIV',
        crestUrl: '1688475762229.jpg',
        address: 'Av. Figueroa Alcorta 7597, Buenos Aires',
        phone: '+54 (11) 5238-2505',
        website: 'https://www.cariverplate.com.ar/',
        email: 'club@cariverplate.com.ar',
        founded: '1901',
        clubColors: 'Red / White',
        venue: 'Estadio Mâs Monumental',
        lastUpdated: date,
      };

      expect(mappedClub).toEqual(expectedClub);
    });
  });
});
