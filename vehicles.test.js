const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index');
var vehicles = require('./vehicleList.json');
const should = chai.should();

chai.use(chaiHttp);

describe('express_recipes_pagination', () => {

    it('Should return 200 for /vehicles with default pagination', (done) => {
        chai.request(server)
            .get('/vehicles')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(vehicles.slice(0, 7));
                done()
            })
    });
    it('Should respond with correct data when we pass valid limit and page', (done) => {
        chai.request(server)
            .get('/vehicles?limit=3&page=1')
            .then(response => {
                response.status.should.eql(200);
                response.body.length.should.eql(3);
                done()
            })
    })
    it('Should respond with correct data when we pass valid limit and page and a certain filter', (done) => {
        chai.request(server)
            .get('/vehicles?limit=3&page=1&filter=ID.3 Pro S')
            .then(response => {
                response.status.should.eql(200);
                response.body.length.should.eql(1);
                done()
            })
    })
    it('Should respond with correct data when only page is set in query', (done) => {
        chai.request(server)
            .get('/vehicles?page=3')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(vehicles.slice(14, 21));
                done()
            })
    });

    it('Should respond with correct data when only limit is set in query', (done) => {
        chai.request(server)
            .get('/vehicles?limit=2')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(vehicles.slice(0, 2));
                done()
            })
    });

    it('Should respond with correct data when both limit and page are out of bounds', (done) => {
        chai.request(server)
            .get('/vehicles?limit=100&page=99')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql([]);
                done()
            })
    })

})