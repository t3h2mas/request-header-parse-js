var request = require('request');

var base_url = "http://localhost:5000/";

describe("request-header-parse-js", function () {
  describe("GET /", function () {
    it("returns 200 resp", function (done) {
        request.get(base_url, function (error, response, body) {
          expect(response.statusCode).toBe(200);
        });
        done();
    });
  });

  describe("Parse headers", function () {
    it("returns correct headers", function() {
      var language = "English, not!";
      var software = "foobar (Linux Wins)";

      var options = {
        url: base_url,
        headers: {
          'accept-language': language,
          'user-agent': software
        }
      };

      request(options, function (error, response, body) {
        var resp = JSON.parse(body);

        expect(resp.language).toBe('English');
        expect(resp.software).toBe('Linux Wins');
        done();
      });
    });
  });
});
