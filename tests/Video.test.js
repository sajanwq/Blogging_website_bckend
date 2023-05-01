{/*
//  this is the tst for for videomodel
const Video = require("../models/VideoModel")
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


describe(' the schema of video model testing', () => { 
// now the insert testing of bl video model schema
 it(' to test the insert of the Videomodel', () => {
 const myVideo = {
 "Title": "This is video title ",
 "Description": "This is my main content",

 };
 
 return Video.create(myVideo)
.then((pro_ret) => {
 expect(pro_ret.Title).toEqual('This is video title');
 expect(pro_ret.Description).toEqual('This is my main content');

 });
 });

 // update testing of blog model
it(' to test the update of blog model', async () => {
 return Blog.findOneAndUpdate({_id :Object('6156f26a7f37d933d4f27645')}, 
{$set : {Title:'my blog  title updated'}})
 .then((pp)=>{
 expect(pp.Title).toEqual('This is blog title')
 })
 
});





// delete testing of blog model
 it('to test the delete of my blogmodel', async () => {
 const status = await Blog.deleteMany();
 expect(status.ok).toBe(1);
});


 
})
*/}
