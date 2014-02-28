import ResizedImgTemplate from 'templates/ti-resized-img';
import ResizedBackgroundImgTemplate from 'templates/ti-resized-background-img';

import { ResizedImgComponent, ResizedBackgroundImgComponent } from 'ti-cloudinary';

export default Ember.onLoad('Ember.Application', function(application) {
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
