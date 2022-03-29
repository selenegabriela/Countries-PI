/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
  
  name: 'Senderismo',
  idCountry: 'VEN'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Activity.create(activity)));
  describe('GET api/countries', () => {
    it('should get 200', () =>
      agent.get('/api/countries').expect(200)
    );
  });
});
