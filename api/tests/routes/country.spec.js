/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const newCountry = {
  
  name: 'Inventado',
  continent: 'Americas',
  capital: 'inventada',
  image: '#',
  id: 'INV'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(newCountry)));
  describe('GET api/countries', () => {
    it('should get 200', () =>
      agent.get('/api/countries').expect(200)
    );
  });
});
