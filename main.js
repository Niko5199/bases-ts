"use strict";
var validations;
(function (validations) {
    function validateText(text) {
        return text.length > 3 ? true : false;
    }
    validations.validateText = validateText;
    const validateDate = (date) => {
        return isFinite(date.valueOf()) ? false : true;
    };
})(validations || (validations = {}));
console.log(validations.validateText('Hello'));
//# sourceMappingURL=main.js.map