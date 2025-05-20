jest.mock('../functions/greet',()=>(
    {
        sayHello:jest.fn()
    })
)


const {sayHello}= require("../functions/greet");
const {welcomeUser}=require("../functions/welcome")

test("welcomeUser should call sayHello functio",()=>{
    welcomeUser('priya')

    expect(sayHello).toHaveBeenCalled();
    expect(sayHello).toHaveBeenCalledWith('priya');
})

