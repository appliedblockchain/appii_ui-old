// Generated by CoffeeScript 1.10.0
var BApi, G, c;

c = console || {
  log: function() {}
};

G = window;

BApi = (function() {
  function BApi(host) {
    this.host = host;
    this.host = "http://" + this.host;
    this.root = this.host + "/api";
  }

  BApi.prototype.methodGet = function(contractName, name, values) {
    var query;
    query = "";
    if (values != null) {
      query = $.param(values);
    }
    return this.root + "/" + contractName + "/" + name + "?" + query;
  };

  BApi.prototype.methodPost = function(contractName, name) {
    return this.root + "/" + contractName + "/" + name;
  };

  BApi.prototype.get = function(contract, methodName, values) {
    return new Promise((function(_this) {
      return function(resolve, reject) {
        return $.getJSON(_this.methodGet(contract, methodName, values)).fail(reject).then(function(val) {
          return resolve(val.value);
        });
      };
    })(this));
  };

  BApi.prototype.post = function(contract, methodName, values) {
    return new Promise((function(_this) {
      return function(resolve, reject) {
        return $.post(_this.methodPost(contract, methodName), values).fail(reject).then(function(val) {
          return resolve(val.value);
        });
      };
    })(this));
  };

  BApi.prototype.blocksLog = function() {
    return new Promise((function(_this) {
      return function(resolve, reject) {
        return $.getJSON(_this.host + "/blocks_log").fail(reject).then(resolve);
      };
    })(this));
  };

  return BApi;

})();
