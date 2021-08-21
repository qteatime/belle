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

  ffi.defun("belle.make-canvas", (element) => {});
};
