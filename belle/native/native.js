exports.default = (ffi) => {
  function h(tag, attrs, children) {
    const e = document.createElement(tag);
    for (const [k, v] of attrs) {
      e.setAttribute(k, v);
    }
    for (const x of children) {
      e.append(x);
    }
    return e;
  }

  ffi.defun("belle.box", (tag) => {
    return ffi.box(document.createElement(ffi.text_to_string(tag)));
  });

  ffi.defun("belle.text", (content) => {
    return ffi.box(document.createTextNode(ffi.text_to_string(content)));
  });

  ffi.defun("belle.append", (box, child) => {
    ffi.unbox(box).append(ffi.unbox(child));
    return box;
  });

  ffi.defun("belle.set-attribute", (box, name, value) => {
    ffi
      .unbox(box)
      .setAttribute(ffi.text_to_string(name), ffi.text_to_string(value));
    return box;
  });

  ffi.defun("belle.get-attribute", (box, name) => {
    return ffi.text(ffi.unbox(box).getAttribute(ffi.text_to_string(name)));
  });
};
