const createElement = (type, attributes, ...children) => {
  const element = document.createElement(type);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    } else if (typeof child === "object") {
      child = Object.values(child).toString();
    }

    const childDiv = createElement("div");

    childDiv.append(child);

    element.append(childDiv);
  }

  return element;
};

export default createElement;
