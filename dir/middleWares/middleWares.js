"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleMaxLengthValidator = exports.titleCorrectValidatorMiddleWare = void 0;
const helpers_1 = require("../helpers/helpers");
const titleCorrectValidatorMiddleWare = (req, res, next) => {
    const title = req.body.title;
    if (!title || !title.length) {
        res.status(400).send((0, helpers_1.getCurrentFieldError)('title', 'incorrect Title'));
        return;
    }
    else {
        next();
    }
};
exports.titleCorrectValidatorMiddleWare = titleCorrectValidatorMiddleWare;
const titleMaxLengthValidator = (req, res, next) => {
    const title = req.body.title;
    if (title && title.length > 40) {
        res.status(400).send((0, helpers_1.getCurrentFieldError)('title', 'Title length is not valid'));
        return;
    }
    else {
        next();
    }
};
exports.titleMaxLengthValidator = titleMaxLengthValidator;
//# sourceMappingURL=middleWares.js.map