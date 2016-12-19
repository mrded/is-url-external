'use strict';

module.exports = function(url) {
  var host = window.location.host;

  var linkHost = function(url) {
    // The easy way to parse an URL, is to create <a> element.
    // @see: https://gist.github.com/jlong/2428561
    var parser = document.createElement('a');
    parser.href = url;

    return parser.hostname;
  }(url);

  return host !== linkHost;
};
