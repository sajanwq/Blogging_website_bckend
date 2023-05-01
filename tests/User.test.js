{/*//  this is the tst for for Blogmodel
const User = require("../models/userModel")
const mongoose = require('mongoose');

//  the name of my database is set here
const url = 'mongodb://localhost:27017/SportsAndTravel_test';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});


describe(' the schema of Usermodel testing', () => { 
// now the insert testing of blogmodel schema
 it(' to test the insert of the Usermodel', () => {
 const myUser= {
 "FullName": "sajan",
 "Email": "sajan@gmail.com",
 "PhoneNumber":"1122"
 };
 
 return User.create(myUser)
.then((pro_ret) => {
 expect(pro_ret.FullName).toEqual('sajan');
 expect(pro_ret.Email).toEqual('sajan@gmail.com');
 expect(pro_ret.PhoneNumber).toEqual('1122');
 });
 });

 // update testing of user model
it(' to test the update of User model', async () => {
 return User.findOneAndUpdate({_id :Object('6156f26a7f37d933d4f27645')}, 
{$set : {FuLLName:'pratap'}})
 .then((pp)=>{
 expect(pp.FuLLName).toEqual('prabesh')
 })
 
});





// delete testing of User model
 it('to test the delete of my Usermodel', async () => {
 const status = await User.deleteMany();
 expect(status.ok).toBe(1);
});


 
})*/}