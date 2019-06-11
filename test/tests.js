const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised).should();

const User = require('../models/users');

describe('Users model tests', async () => {
    // Test method for adding users to the database
    // it('should be a valid user object', async () => {
    //     //method should be an instance method because you are creating a new instance of a User
    //     //info you want the user class to have will be the parameters
    //     //first parameter will be null because of id schema: id, first_name, last_name, email, password
    //     const userInstance = new User(null, 'pepe', 'frog', 'PepeTheFrog@aol.com', 'pw');
    //     //you need to call the method on the instance of the user and store the value in a variable
    //     const theUser = await userInstance.createUser();
    //     //expect the result returned from createUser to return an object
    //     expect(theUser).to.be.an('object');
    // });

    // Test method for checking user can be found in database
    it('can be found in database', async () => {
        //method should be static method because you are just checking if it exists
        const validUser = await User.userExists('PepeTheFrog@aol.com');
        expect(validUser).to.be.an('object'); 
        //expect(validUser).to.not.be.an('undefined');
    });
});