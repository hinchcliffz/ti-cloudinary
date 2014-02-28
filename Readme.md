## ti-cloudinary

Simple components for cloudinary images.

Assumes you are using [ember-app-kit](https://github.com/stefanpenner/ember-app-kit) (more specifically [ember-jj-abrams-resolver](https://github.com/stefanpenner/ember-jj-abrams-resolver))

## Installation

Import the initializer before you create your app, e.g.

```js
  import Resolver from 'ember/resolver';
  import 'ti-cloudinary/initializer';

  export default Ember.Application.extend({
    Resolver: Resolver['default']
  });
```

## Usage

```handlebars
  {{#ti-resized-background-img src="srcUrlHere" width=100 height=300 crop="fit"}}
    content goes here
  {{/ti-resized-background-img}}

  {{ti-resized-img src="srcUrlHere" width=100 height=300 crop="fit"}}
```

Only `crop`, `gravity`, `width`, and `height` work right now. Pull requests welcome!

## TODO

Tests!!

## LICENSE

MIT
