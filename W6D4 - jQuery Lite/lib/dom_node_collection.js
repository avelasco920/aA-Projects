class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
  
  html(arg) {
    if (arg) {
      this.nodes.forEach(function(node) {
        node.innerHTML = arg;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }
  
  empty() {
    this.html("");
  }
  
  append(argument) {
    if (argument instanceof HTMLElement) {
      this.nodes.forEach(function(node) {
        node.appendChild(argument);
      });
    } else if (typeof argument === 'string') {
      this.nodes.forEach(function(node) {
        node.innerHTML += argument;
      });
    } else {
      this.nodes.forEach(function(node) {
        argument.nodes.forEach(function(elToAppend) {
          node.append(elToAppend.cloneNode(true));
        });
      }); 
    }
  }
  
  children() {
    let allChildren = [];
    this.nodes.forEach(function(node) {
      allChildren = allChildren.concat(node.children);
    });
    return new DOMNodeCollection(allChildren);
  }
  
  parent() {
    let allParents = [];
    this.nodes.forEach(function({parentNode}){
      debugger;
      if (!parentNode.visited) {
        parentNode.visited = true;
        allParents = allParents.concat(parentNode);
      }
    });
    allParents.forEach(function(node){
      node.visited = null;
    })
    return new DOMNodeCollection(allParents);
  }
  
  find(selector) {
    if (typeof selector === 'string') {
      let nodes = Array.from(document.querySelectorAll(selector));
      return new DOMNodeCollection(nodes);
    } else if (selector instanceof HTMLElement) {
      return new DOMNodeCollection([selector]);
    }
  }
  
  remove(selector) {
    this.each(node => node.parentNode.removeChild(node));
  }
  
}

module.exports = DOMNodeCollection;