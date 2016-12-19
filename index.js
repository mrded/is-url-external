'use strict';

module.exports = function(url) {
  var host = window.location.hostname;

  var linkHost = function(url) {
    if (/^(http|https):\/\//.test(url)) { // Absolute URL.
      // The easy way to parse an URL, is to create <a> element.
      // @see: https://gist.github.com/jlong/2428561
      var parser = document.createElement('a');
      parser.href = url;

      return parser.hostname;
    }
    else { // Relative URL.
      return window.location.hostname;
    }
  }(url);

  return host !== linkHost;
};
