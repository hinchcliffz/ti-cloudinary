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

export { resizedSrc, ResizedImgComponent, ResizedBackgroundImgComponent };
