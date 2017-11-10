const DOMNodeCollection = require ('./dom_node_collection.js')

window.$l = (selector) => {
  if (typeof selector === 'string') {
    let nodes = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(nodes);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }
}

