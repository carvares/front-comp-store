export default function Category(category, getProducts){

    function changeProductsPage(category){
        getProducts(category.id);
    }   

    return(
        <span onClick={changeProductsPage} >{category.category}</span>
    );
}