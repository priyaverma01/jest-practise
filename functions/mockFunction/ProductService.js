const fetchProducts=async()=>{
    const response= await fetch("https://dummyjson.com/products")
    const data=await response.json();
    return data.products;
};
const getTopProductsTitle = async (fetchFn = fetchProducts) => {
    const products = await fetchFn();
    return products.slice(0,3).map(p=>p.title)
}
module.exports={fetchProducts,getTopProductsTitle}



