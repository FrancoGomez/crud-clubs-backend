/* eslint-disable no-undef */
/// <reference types="jest" />
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const app = require('../server');

afterEach(async () => {
  await request(app).get('/clubs/backup');
});

describe('create a club', () => {
  describe('given that there are required params missing', () => {
    it('should return a 400 and an error message', async () => {
      const { statusCode, body } = await request(app).post('/clubs/').send({});
      expect(statusCode).toBe(400);
      expect(body.error).toBe('Missing required params');
    });
  });

  describe('given the club has been created successfully', () => {
    const inputClub = {
      id: 1,
      area: 'United Kingdom',
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ASH',
      crestUrl: 'Arsenal_FC.png',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
    };
    const expectedClub = {
      id: 1,
      area: {
        id: null,
        name: 'United Kingdom',
      },
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ASH',
      crestUrl: expect.any(String),
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
      lastUpdated: expect.any(String),
    };

    it('should return a 201 and the created club', async () => {
      const { statusCode, body } = await request(app).post('/clubs/').send(inputClub);
      expect(statusCode).toBe(201);
      expect(body).toEqual(expectedClub);
    });
  });
});

describe('get all clubs', () => {
  const expectedClub = {
    id: 1,
    area: { id: 2072, name: 'United Kingdom' },
    name: 'Arsenal FC',
    shortName: 'Arsenal',
    tla: 'ARS',
    crestUrl: expect.any(String),
    address: '75 Drayton Park London N5 1BU',
    phone: '+44 (020) 76195003',
    website: 'http://www.arsenal.com',
    email: 'info@arsenal.co.uk',
    founded: 1886,
    clubColors: 'Red / White',
    venue: 'Emirates Stadium',
    lastUpdated: '2020-05-14T02:41:34Z',
  };

  describe('given there are clubs', () => {
    it('should return a 200 and the clubs', async () => {
      const { statusCode, body } = await request(app).get('/clubs');
      expect(statusCode).toBe(200);
      expect(body[0]).toEqual(expectedClub);
      expect(body.length).toBe(22);
    });
  });
});

describe('get a club', () => {
  describe('given that no request has that tla', () => {
    it('should return a 401 and an error message', async () => {
      const { statusCode, body } = await request(app).get('/clubs/AR');
      expect(statusCode).toBe(401);
      expect(body.error).toBe('A TLA needs to be 3 characters long');
    });
  });

  describe('given the team exist', () => {
    const expectedClub = {
      id: 1,
      area: {
        id: 2072,
        name: 'United Kingdom',
      },
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ARS',
      crestUrl: expect.any(String),
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
      lastUpdated: expect.any(String),
    };

    it('should return a 200 and the club', async () => {
      const { statusCode, body } = await request(app).get('/clubs/ARS');
      expect(statusCode).toBe(200);
      expect(body).toEqual(expectedClub);
    });
  });

  describe('given the team does not exist', () => {
    it('should return a 404 and an error message', async () => {
      const { statusCode, body } = await request(app).get('/clubs/ARJ');
      expect(statusCode).toBe(404);
      expect(body.error).toBe('Club with the specified TLA does not exists');
    });
  });
});

describe('update a club', () => {
  describe('given that there are required params missing', () => {
    const inputClub = {
      id: 1,
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ASH',
      crestUrl: 'Arsenal_FC.png',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
    };

    it('should return a 400 and an error message', async () => {
      const { statusCode, body } = await request(app).put('/clubs/A').send(inputClub);
      expect(statusCode).toBe(400);
      expect(body.error).toBe('Missing required params');
    });
  });

  describe('given that the tla is invalid', () => {
    const inputClub = {
      id: 1,
      area: 'United Kingdom',
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ASH',
      crestUrl: 'Arsenal_FC.png',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
    };

    it('should return a 401 and an error message', async () => {
      const { statusCode, body } = await request(app).put('/clubs/AB').send(inputClub);
      expect(statusCode).toBe(401);
      expect(body.error).toBe('A TLA needs to be 3 characters long');
    });
  });

  describe('given that no team has that tla', () => {
    const inputClub = {
      id: 1,
      area: 'United Kingdom',
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ASH',
      crestUrl: 'Arsenal_FC.png',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
    };

    it('should return a 404 and an error message', async () => {
      const { statusCode, body } = await request(app).put('/clubs/ABC').send(inputClub);
      expect(statusCode).toBe(404);
      expect(body.error).toBe('Club with the specified TLA does not exists');
    });
  });

  describe('given the club has been updated successfully', () => {
    const inputClub = {
      id: 1,
      area: 'United Kingdom',
      name: 'Arsenal FC',
      shortName: 'New Arsenal',
      tla: 'ASH',
      crestUrl: 'Arsenal_FC.png',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
    };
    const expectedClub = {
      id: 1,
      area: {
        id: null,
        name: 'United Kingdom',
      },
      name: 'Arsenal FC',
      shortName: 'New Arsenal',
      tla: 'ASH',
      crestUrl: expect.any(String),
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
      lastUpdated: expect.any(String),
    };

    it('should return a 200 and the club', async () => {
      const { statusCode, body } = await request(app).put('/clubs/ARS').send(inputClub);
      expect(statusCode).toBe(200);
      expect(body).toEqual(expectedClub);
    });
  });
});

describe('delete a club', () => {
  describe('given that the tla is invalid', () => {
    it('should return a 401 and an error message', async () => {
      const { statusCode, body } = await request(app).delete('/clubs/AR');
      expect(statusCode).toBe(401);
      expect(body.error).toBe('A TLA needs to be 3 characters long');
    });
  });

  describe('given that no team has that tla', () => {
    it('should return a 404 and an error message', async () => {
      const { statusCode, body } = await request(app).delete('/clubs/ABC');
      expect(statusCode).toBe(404);
      expect(body.error).toBe('Club with the specified TLA does not exists');
    });
  });

  describe('given the has been deleted successfully', () => {
    it('should return a 200 and a success message', async () => {
      const { statusCode, body } = await request(app).delete('/clubs/EVE');
      expect(statusCode).toBe(200);
      expect(body.success).toBe('The team has been deleted successfully');
    });
  });
});
