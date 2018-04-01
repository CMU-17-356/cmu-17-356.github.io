var expect = require('chai').expect;
var request = require('request');

it('should return 200', function (done) {
  request.get('http://localhost:8080', function (err, res, body){
    expect(res.statusCode).to.equal(200);
    //expect(res.body).to.equal('wrong header');
    done();
  });
});
