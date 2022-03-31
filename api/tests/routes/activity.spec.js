const request = require('supertest');
var expect = require("chai").expect;
var { Activity } = require('../../src/db.js')
console.log(request);
const session = require('supertest-session');
const app = require('../../src/app.js');
const agent = session(app);

describe("Routes", function () {
  

  describe("GET /api/activity", function () {
    it("GET responde con un string que anuncia que no hay actividades", function () {
      return agent 
        .get("/api/activity")  
        .expect(function (res) {
          expect(res.body).to.eql('Sin actividades agregadas'); 
        });
    });
  })
  

})

describe('post', function (){
    describe('POST', function(){

        it("POST Activity. Se puede acceder al nombre de la actividad creada después de postearla", function () {
            Activity.create({name: 'Senderismo', difficulty: '4', duration: 'Más de 12 horas', season:'Otoño', idCountry: 'MEX'})
            .then((r) => {
                
                return agent
                  .get("/api/activity")
                  .expect("Content-Type", /json/)
                  .expect(function (res) {
                      console.log(res.body[0].name)
                    expect(res.body[0].name).to.eql('Senderismo');
                  });
            })
          });
    })
})
