const DOMNodeCollection = require ('./dom_node_collection.js')

window.$l = (selector) => {
  if (typeof selector === 'string') {
    return document.querySelectorAll(selector);
  }
}

