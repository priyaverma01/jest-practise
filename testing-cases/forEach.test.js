const {forEach}=require("../functions/mockFunction/forEach")

const mockCallback=jest.fn(x=>42+x);
test("forEach mock functions",()=>{
    forEach([0,1],mockCallback);
     expect(mockCallback.mock.calls).toHaveLength(2);
     
})




