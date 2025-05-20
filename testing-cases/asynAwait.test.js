const {fetchData}=require("../functions/Promise");
test("the data is peanut butter",async()=>{
    const data=await fetchData();
    expect(data).toBe("peanut butter")
})

test("the fetch fails with error",async()=>{
    try{
         await fetchData();
    }catch(error){
        expect(error).toMatch("error")
    }
})

//you can combine async await with .resolve and .rejects

// test('the data is peanut butter',async()=>{
//     await expect(fetchData()).resolves.toBe('peanut butter')
// })
// test('fetch fails with error',async()=>{
//     await expect(fetchData()).rejects.toMatch("error")
// })




