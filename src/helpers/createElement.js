const createElement = (type, attributes, ...children) => {
  const element = document.createElement(type);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    element.appendChild(child);
  }

  return element;
};

export default createElement;
