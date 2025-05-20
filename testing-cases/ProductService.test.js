const {getTopProductsTitle}=require("../functions/mockFunction/ProductService")

test("getTopProductsTitle return top 3 products title ",async()=>{
     const mockFetchFn=jest.fn().mockResolvedValue([
    { title: 'iPhone 9' },
    { title: 'Samsung Galaxy' },
    { title: 'MacBook Pro' },
    { title: 'iPad Mini' }
    ])
     const result=await getTopProductsTitle(mockFetchFn);

     expect(mockFetchFn).toHaveBeenCalled();
     expect(result).toEqual(['iPhone 9', 'Samsung Galaxy', 'MacBook Pro'])
})

