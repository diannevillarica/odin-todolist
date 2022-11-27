const setAttributes = (elem, attrs) => {
  for (var key in attrs) {
    elem.setAttribute(key, attrs[key]);
  }
};

export default setAttributes;
