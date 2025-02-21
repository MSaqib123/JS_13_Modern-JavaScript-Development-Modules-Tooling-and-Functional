//======================================================
//================ Module Pattern ======================
//======================================================
//in old school way   befor ES6 we    create the  custom Modules  using   IFEE Pattern

// but these  old school way are also being used in many project and many institude or many softaware house
// -- so to understand the Custom Module we  should also knwo how it works -----

//---- IIFE Module Paterent in old JS -------
//the mean goal of module to  Encapsulate the funcatiolity to have  private data
const ShoppingCart2 = (function(){
    const cart = []
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product,quantity){
        cart.push({product,quantity});
        console.log(`${quantity} ${product} added to cart`);
    }

    const orderStock = function(product,quantity){
        console.log(`${quantity} ${product} orderd from supplier`);
    }

    //---- export ---
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();


ShoppingCart2.addToCart('apple',4)
ShoppingCart2.addToCart('pizza',2)
console.log(ShoppingCart2)
console.log(ShoppingCart2.totalPrice)
console.log(ShoppingCart2.totalQuantity)
//---- but this will not be accessble -----
ShoppingCart2.orderStock('apple',24)