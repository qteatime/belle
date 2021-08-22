"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ffi) => {
    ffi.defun("conversion.list-to-interpolation", (xs) => {
        return ffi.interpolation(ffi.list_to_array(xs));
    });
};
