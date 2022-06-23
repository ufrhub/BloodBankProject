export const isEmpty = Value => {

    if (!Value) {
        return true
    } else {
        return false
    };

};

export const isValid = Email => {

    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);

};

export const isLength = Password => {

    if (Password.length < 8) {
        return true
    } else {
        return false
    };

};

export const isMatch = (Password, ConfirmPassword) => {

    if (Password === ConfirmPassword) {
        return true
    } else {
        return false
    };

};

export const isValidPin = (PinCode) => {

    if (/^(\d{4}|\d{6})$/.test(PinCode)) {
        return true;

    } else { return false; }

};

export const isValidPhone = Phone => {

    // eslint-disable-next-line
    const re = /^[6-9]\d{9}$/gi;
    return re.test(Phone);

};

export const isValidAmount = Amount => {

    // eslint-disable-next-line
    const re = /^[0-9]{1,7}$/gi;
    return re.test(Amount);

};