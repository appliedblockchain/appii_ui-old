// Generated by CoffeeScript 1.10.0
var BR;

BR = {
  getEntryId: function() {
    var entry_id;
    entry_id = s(location.hash).strRightBack("/").value();
    return Number(entry_id);
  },
  loadFromCollection: (function(_this) {
    return function(name, entry_id, ctx, presenter) {
      var coll, coll_name, elem;
      coll_name = BR.pluralize(name);
      coll = StoreData[coll_name];
      elem = _(coll).find(function(e) {
        return entry_id === e.id;
      });
      if (presenter) {
        elem = presenter(elem);
      }
      ctx[name] = elem;
      ctx.update();
      _this.store = ctx.opts.store;
      return _this.store.on('update', function(data) {
        coll = data[coll_name];
        elem = _(coll).find(function(e) {
          return entry_id === e.id;
        });
        if (presenter) {
          elem = presenter(elem);
        }
        ctx[name] = elem;
        return ctx.update();
      });
    };
  })(this),
  bindUpdateEntityForm: (function(_this) {
    return function(name, entry_id, ctx, presenter) {
      var coll_name, form;
      coll_name = BR.pluralize(name);
      form = "form#" + name + "_form";
      _this.message = "";
      return ctx.on('mount', function(data) {
        var spinner;
        spinner = $(form + " .spinner");
        return $(form + " input[type=submit]").on("click", function(evt) {
          var obj, values;
          spinner.css({
            visibility: "visible"
          });
          obj = ctx[name];
          values = $("" + form).serializeArray();
          _(values).each(function(entry) {
            return obj[entry.name] = entry.value;
          });
          c.log("Updating " + name + ":", obj);
          return User.update(obj).then(function(resp) {
            c.log(name + " updated:", resp);
            spinner.css({
              visibility: "hidden"
            });
            return $(form + " .message").html("saved!");
          })["catch"](function(error) {
            return c.log("Error updating current " + name + ":", error);
          });
        });
      });
    };
  })(this),
  pluralize: function(word) {
    if (s(word).endsWith('y')) {
      word = word.substring(word.length - 1);
      return word + "ies";
    } else {
      return word + "s";
    }
  }
};
