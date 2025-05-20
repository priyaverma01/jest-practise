const {fetchData}=require("../functions/Promise")
test("The data is peanut butter",()=>{
    return fetchData().then(data=>{
        expect(data).toBe('peanut butter')
    })
})

