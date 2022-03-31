function isAvailableEmail(sEmail) {
    let reg = /^[\w]+(\.[\w]+)*@[\w]+(\.[\w]+)+$/;

    return reg.test(sEmail);
}