define([
  "superapi",
  "superagent"
], function (superapi, superagent) {
  "use strict";

  describe.skip("request url", function () {
    it("should append the service url to the baseUrl", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "/foo"
          }
        }
      });

      api.url("foo").should.eql("http://foo.domain.tld/api/foo");
    });

    it("should add a slash in front of route path if missing", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "foo"
          }
        }
      });

      api.url("foo").should.eql("http://foo.domain.tld/api/foo");
    });

    it("should support route as a string", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: "bar"
        }
      });

      api.url("foo").should.eql("http://foo.domain.tld/api/bar");
    });

    it("should throw error if path is missing", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {}
        }
      });

      // fail in PhantomJS as bind not available
      api.url.bind(null, "foo").should.throw();
    });
  });

  describe.skip("request method", function () {
    it("should default to GET", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: "bar"
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("GET");
    });

    it("should support GET", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: "bar",
          method: "get"
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("GET");
    });

    it("should support POST", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            method: "POST"
          }
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("POST");
    });

    it("should support PUT", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            method: "PUT"
          }
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("PUT");
    });

    it("should support DELETE", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            method: "DELETE"
          }
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("DELETE");
    });

    it("should support HEAD", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            method: "HEAD"
          }
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("HEAD");
    });

    it("should support PATCH", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            method: "PATCH"
          }
        }
      });
      api.agent = superagent;
      api.request("foo").method.should.eql("PATCH");
    });
  });

  describe.skip("request headers", function () {
  });

  describe.skip("service request headers", function () {
    it("should add service headers", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            headers: {
              "Content-type": "json"
            }
          }
        }
      });
      api.agent = superagent;
      api.request("foo")._header.should.have.ownProperty("content-type");
      api.request("foo")._header["content-type"].should.eql("json");
    });
  });

  describe.skip("service request options", function () {
    it("should add headers options", function () {
      var api = superapi.default({
        baseUrl: "http://foo.domain.tld/api",
        services: {
          foo: {
            path: "bar",
            options: {
              type: "json",
              accept: "png"
            }
          }
        }
      });
      api.agent = superagent;
      api.request("foo")._header.should.have.ownProperty("content-type");
      api.request("foo")._header["content-type"].should.eql("application/json");

      api.request("foo")._header.should.have.ownProperty("accept");
      api.request("foo")._header.accept.should.eql("png");
    });
  });
});
