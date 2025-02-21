//=======================================================================
//------------------------ ES6 Module in Javascript ---------------------
//=======================================================================
// CameCase used in Module name

//--- 1. Export Module ------
//isa hum  export krain ga
console.log("exported modules")


//--=================== 2. Export Variable =================
const shippingCost = 10;
// export {shippingCost}


//--=================== 3. Export Multiple values =================
// const Cart = [25,55,22];
// const studentName = "SAQIB"
// export {shippingCost,Cart,studentName}


//--=================== 4. Export Function =================
//--=================== 4. Nammed Export =================
export const cart = []
export const addtoCart = function(product,quantity)
{
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to cart`);
}


//named export is from multiple export
// const totalPrice= 237;
// const totalQuantity = 23;
// export {totalPrice, totalQuantity}

//--=================== 5. Rename the Export =================
const totalPrice= 237;
const totalQuantity = 23;
export {totalPrice as p, totalQuantity as q}



//--=================== 6. Default Exports =================
//export default  value ..
//Name is involved in default export
export default function(product,quantity)
{
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to cart`);
}

