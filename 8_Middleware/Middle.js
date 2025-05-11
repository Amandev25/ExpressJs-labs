import express from 'express';
function UserCredentials(req, res, next){
    console.log("Username: (alex)");
    console.log("Email: (alex21@gmail.com)");
    console.log("Password: (alex222333)");
    console.log("age : (18)");
    next();
}

export default UserCredentials;