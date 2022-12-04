const createElement = (type, attributes, ...children) => {
  const element = document.createElement(type);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    const childDiv = createElement("div");
    childDiv.appendChild(child);
    element.appendChild(childDiv);
  }

  return element;
};

export default createElement;
