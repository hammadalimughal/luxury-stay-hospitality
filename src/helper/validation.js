var name_valid = /^[A-Za-z_.\-]{3,13}$/;
var msg_valid = /^([A-Za-z0-9_\-\.]{5,100})$/;
var email_valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const phone_valid = /^((\+92|0092|92|0)?(3[0-9]{2}[0-9]{7}|(2[0-9]{2}|4[0-9]{2})[0-9]{6,7}))$/;


const isValidName = (name) => name_valid.test(name)
const isValidEmail = (email) => email_valid.test(email)
const isValidMsg = (msg) => msg_valid.test(msg)
const isValidPhone = (phone) => phone_valid.test(phone)

export { isValidName, isValidEmail, isValidMsg, isValidPhone }