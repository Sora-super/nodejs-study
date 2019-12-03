function getSuffixName (url) {
  switch (url) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/js';
    default:
      return 'text/html';

  }
}

exports.getSuffixName = getSuffixName