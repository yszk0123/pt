/**
 * This is a workaround for Jest.
 * window.location.href can't be changed in tests.
 * https://github.com/facebook/jest/issues/890#issuecomment-298594389
 */

export default function setURL(url) {
  const parser = document.createElement('a');
  parser.href = url;
  [
    'href',
    'protocol',
    'host',
    'hostname',
    'origin',
    'port',
    'pathname',
    'search',
    'hash',
  ].forEach(prop => {
    Object.defineProperty(window.location, prop, {
      value: parser[prop],
      writable: true,
    });
  });
}
