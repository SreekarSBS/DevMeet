const validator= require('validator')

const validate = (req) => {
    const {firstName , emailId , password} = req.body;

    if(!firstName || firstName.length < 4 || firstName.length > 50)
        throw new Error("First name must be between 4 and 50 characters long");
    if(!validator.isEmail(emailId))
        throw new Error("Invalid email format");
    if(!validator.isStrongPassword(password))
        throw new Error("Please enter a Strong Password")
}

const validateUserUpdateRequest = (req) => {
    const ALLOWED_UPDATES = ['firstName', 'lastName', 'password' , 'photoURL', 'about' , 'skills', 'location' , 'gender' , 'age'];
    return Object.keys(req.body).every((field) => ALLOWED_UPDATES.includes(field))
}

module.exports  = {validate , validateUserUpdateRequest}