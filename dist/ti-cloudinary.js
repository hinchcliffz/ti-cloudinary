define("templates/ti-resized-background-img", ["exports"], function (__exports__) { __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });
define("templates/ti-resized-img", ["exports"], function (__exports__) { __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
}); });
define("ti-cloudinary",
  ["exports"],
  function(__exports__) {
    "use strict";
    var ResizedImgComponent, ResizedBackgroundImgComponent, resizedSrc;

    resizedSrc = function() {
      var query = [],
        transformation;

      if (this.get('src')) {
        query.push('a_exif');

        if (this.get('crop')) {
          query.push('c_' + this.get('crop'));
        } else {
          query.push('c_fit');
        }

        if (this.get('gravity')) {
          query.push('g_' + this.get('gravity'));
        }

        if (this.get('width')) {
          query.push('w_' + this.get('width'));
        }

        if (this.get('height')) {
          query.push('h_' + this.get('height'));
        }

        transformation = query.join(',');

        return this.get('src').replace(/\/v(\d+)/, '/' + transformation + '/v$1');
      }
    };

    ResizedImgComponent = Ember.Component.extend( {
      resizedSrc: resizedSrc.property('src', 'width', 'height'),
      tagName: 'img',
      attributeBindings: 'resizedSrc:src'.w()
    });

    ResizedBackgroundImgComponent = Ember.Component.extend({
      resizedSrc: resizedSrc.property('src', 'width', 'height'),
      attributeBindings: 'resizedBackgroundImg:style'.w(),
      resizedBackgroundImg: function() {
        return 'background-image: url(' + this.get('resizedSrc') + ')';
      }.property('resizedSrc')
    });

    __exports__.resizedSrc = resizedSrc;
    __exports__.ResizedImgComponent = ResizedImgComponent;
    __exports__.ResizedBackgroundImgComponent = ResizedBackgroundImgComponent;
  });
define("ti-cloudinary/initializer",
  ["templates/ti-resized-img","templates/ti-resized-background-img","ti-cloudinary","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var ResizedImgTemplate = __dependency1__["default"];
    var ResizedBackgroundImgTemplate = __dependency2__["default"];

    var ResizedImgComponent = __dependency3__.ResizedImgComponent;
    var ResizedBackgroundImgComponent = __dependency3__.ResizedBackgroundImgComponent;

    __exports__["default"] = Ember.onLoad('Ember.Application', function(application) {
      application.initializer({
        name: 'ti-cloudinary',

        initialize: function(container, application) {
          container.register('template:components/ti-resized-img', ResizedImgTemplate);
          container.register('template:components/ti-resized-background-img', ResizedBackgroundImgTemplate);
          container.register('component:ti-resized-img', ResizedImgComponent);
          container.register('component:ti-resized-background-img', ResizedBackgroundImgComponent);
        }
      });
    });
  });