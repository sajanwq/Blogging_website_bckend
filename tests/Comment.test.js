{/*

//  this is the tst for for commentmodel
const Comment = require("../models/CommentModel")
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


describe(' the schema of commentmodel testing', () => { 
// now the insert testing of commentmodel schema
 it(' to test the insert of the commentmodel', () => {
 const myComment = {
 "Comment": "succesfully commented",
 "Username": "successfully commented",
 };
 
 return Comment.create(myComment)
.then((pro_ret) => {
 expect(pro_ret.Comment).toEqual('successfully commented');
 expect(pro_ret.Comment).toEqual('successfully commented');
 });
 });

 {/*
 // // update testing of blog model
// it(' to test the update of Comment model', async () => {
//  return Comment.findOneAndUpdate({_id :Object('6156f62e5046aa2db8e88164')}, 
// {$set : {Title:'my updated comment'}})
//  .then((pp)=>{
//  expect(pp.Title).toEqual('Commented by me')
//  })
 
// });





// // delete testing of blog model
 it('to test the delete of my Commentmodel', async () => {
 const status = await Comment.deleteMany();
 expect(status.ok).toBe(1);
});


 
})

*/}