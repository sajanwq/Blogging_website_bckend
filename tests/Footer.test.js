{/*}

//  this is the test for for Footermodel
const Footer = require("../models/FoooterModel")
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


describe(' the schema of  footer model testing', () => { 
// now the insert testing of commentmodel schema
//  it(' to test the insert of the Footermodel', () => {
//  const myFooter = {
//  "Title": " this is  updated footer title",
//  "Description": "This is footer description",
//  };
 
//  return Footer.create(myFooter)
// .then((pro_ret) => {
//  expect(pro_ret.Title).toEqual(' This is footer title');
//  });
//  });

 // update testing of blog model
it(' to test the update of Comment model', async () => {
 return Comment.findOneAndUpdate({_id :Object('6156f62e5046aa2db8e88164')}, 
{$set : {Title:'my updated comment'}})
 .then((pp)=>{
 expect(pp.Title).toEqual('Commented by me')
 })
 
});





// // delete testing of blog model
 it('to test the delete of my Commentmodel', async () => {
 const status = await Footer.deleteMany();
 expect(status.ok).toBe(1);
});


 
})

*/}