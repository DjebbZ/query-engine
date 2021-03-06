// Generated by CoffeeScript 1.3.1
(function() {
  var Backbone, assert, queryEngine,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  assert = require('assert');

  queryEngine = require(__dirname + '/../lib/query-engine.js');

  Backbone = require('backbone');

  describe('misc', function() {
    return describe('collection property', function() {
      return it('when specificied, should create child collections of the property type', function() {
        var MyQueryCollection, myChildCollection, myQueryCollection;
        MyQueryCollection = (function(_super) {

          __extends(MyQueryCollection, _super);

          MyQueryCollection.name = 'MyQueryCollection';

          function MyQueryCollection() {
            return MyQueryCollection.__super__.constructor.apply(this, arguments);
          }

          MyQueryCollection.prototype.collection = MyQueryCollection;

          MyQueryCollection.prototype.red = 'dog';

          return MyQueryCollection;

        })(queryEngine.QueryCollection);
        myQueryCollection = new MyQueryCollection();
        myChildCollection = myQueryCollection.createChildCollection();
        return assert.ok(myChildCollection instanceof MyQueryCollection);
      });
    });
  });

  null;


}).call(this);
