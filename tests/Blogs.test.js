//  this is the tst for for Blogmodel
const Blog = require("../models/BlogModel")
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


describe(' the schema of blogmodel testing', () => { 
// now the insert testing of blogmodel schema
//  it(' to test the insert of the blogmodel', () => {
//  const myBlog = {
//  "Title": "This is my blog title",
//  "Introduction": "This is my blog Introduction",
//  "MainContent": "This is my main content",
//  "Conclusion":"This is my conclusion"
//  };
 
//  return Blog.create(myBlog)
// .then((pro_ret) => {
//  expect(pro_ret.Title).toEqual('This is my blog title');
//  expect(pro_ret.Introduction).toEqual('This is my blog Introduction');
//  expect(pro_ret.MainContent).toEqual('This is my main content');
//  expect(pro_ret.Conclusion).toEqual('This is my conclusion');
//  });
//  });

 // update testing of blog model
// it(' to test the update of blog model', async () => {
//  return Blog.findOneAndUpdate({_id :Object('61573ff4f452ff3a48f2aa03')}, 
// {$set : {Title:'Title is updated successfully!!'}})
//  .then((pp)=>{
//  expect(pp.Title).toEqual('This is my blog title')
//  })
 
// });





// delete testing of blog model
 it('to test the delete of my blogmodel', async () => {
 const status = await Blog.deleteMany();
 expect(status.ok).toBe(1);
});


 
})