//=======================================================================
//------------------------ ES6 Module in Javascript ---------------------
//=======================================================================
//------ Import Export modules neeed  Server to be executed ----------------
//in main entry it should  be    type="module"

//--- Importing Module ------
//yahan hum  shoppigcard import krain gaa
//space is not allowed in  import
//import './3.shoppingCart.js'

//========================================================================
//============== 1. Import only console and display things ===============
//========================================================================
//import './3.shoppingCart.js'


//========================================================================
//============== 2. Import  Var , Int, number ===============
//========================================================================
// import {shippingCost} from './3.shoppingCart.js'
// console.log(shippingCost , "comming from imported module")


//========================================================================
//============== 3. Multiple Imports by Import Modules ===============
//========================================================================
// import {shippingCost,Cart,studentName} from './3.shoppingCart.js'
// console.log(shippingCost , "comming from imported module")
// console.log(Cart , "comming from imported module")
// console.log(studentName , "comming from imported module")

//========================================================================
//============== 4. Export Function , Named Export ====================
//========================================================================
// import {addtoCart,totalPrice, totalQuantity} from './3.shoppingCart.js'
// addtoCart('Books',24)
// console.log(totalPrice);
// console.log(totalQuantity);
// //--- this comming after import message
// //console.log("Export and Import Module")


//========================================================================
//================ Renamed the Imports as well as ====================
//========================================================================
// import {addtoCart,totalPrice as price, totalQuantity as quantities} from './3.shoppingCart.js'
// addtoCart('Books',24)
// console.log(price);
// console.log(quantities);
//--- this comming after import message
//console.log("Export and Import Module")


//========================================================================
//================ Renamed the Exported as well as ====================
//========================================================================
// import {addtoCart,p, q} from './3.shoppingCart.js'
// addtoCart('Books',24)
// console.log(p);
// console.log(q);
//--- this comming after import message
//console.log("Export and Import Module")


//========================================================================
//================ Import all Export of Module (*) ====================
//========================================================================
// import * as shoppigcard from './3.shoppingCart.js'
// shoppigcard.addtoCart('Books',24)
// console.log(shoppigcard.p);
// console.log(shoppigcard.q);
//--- this comming after import message
//console.log("Export and Import Module")



//========================================================================
//================ default import ====================
//========================================================================
//in default import  we can give any desired name   without  {} brackets

// import add from './3.shoppingCart.js'
// add('Pizza',2)
// add('Whitepipers',2)



//========================================================================
//================ default import + Named imports ====================
//========================================================================

// import add ,{addtoCart,p, q}  from './3.shoppingCart.js'
// add('Pizza',2)
// add('Whitepipers',2)
// console.log(p);
// console.log(q);




//========================================================================
//================ imports  are Life connection not Copy ====================
//========================================================================
import add ,{cart}  from './3.shoppingCart.js'
add('Pizza',2)
add('Whitepipers',2)
add('banana',25)

console.log(cart)

//its proved the cart  is not copy of value which we export 
//it did not give any  []  value  
// it gives all  added produt to cart