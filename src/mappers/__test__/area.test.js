/* eslint-disable no-undef */
/// <reference types="jest" />

const mapArea = require('../area');

describe('create an area object', () => {
  describe('given that there are no params', () => {
    it('should return an object full of null params', () => {
      expect(mapArea()).toEqual({
        id: null,
        name: null,
      });
    });
  });

  describe('given the params are insufficient', () => {
    it('should return an object with just one param that is null', () => {
      expect(mapArea({
        name: 'Argentina',
      })).toEqual({
        id: null,
        name: 'Argentina',
      });
    });
  });

  describe('given that the params are the necessary ones', () => {
    it('should return a full object', () => {
      expect(mapArea({
        id: 1,
        name: 'Argentina',
      })).toEqual({
        id: 1,
        name: 'Argentina',
      });
    });
  });
});
