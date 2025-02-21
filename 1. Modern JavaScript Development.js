//=======================================================================
//-------------- Modern Javascript Project Building  --------------------
//=======================================================================
//How we write js today.
//because we don't not write over code in 1 single script
//sent that script to  browser as at is.
//----- no ----
//but the way devle  appplication 


//--------------------------------------------------
//============== 1. Module ==================
//--------------------------------------------------
//back in the day we used to write our all code into 1 big js file or  maybee multiple scripts

//--- Modern Js ---
//but we divide our project into multiple modules -- why ?
//to make our code more organized  and maintainable.   
// these modules can share data betweeen them

//--------------------------------------------------
//============== 2. 3rd Party Module  =======
//--------------------------------------------------
//we can also include 3rd party modules into our application code
//there are 10000ds of Open Source modules
//  which we also call3ed packages that developer share on the NPM repository
// 1. NPM repository (node package manager) NODE JS
// this Libray contain  Open source Packages to include 3rd party code in our project
// and we can use these package  for free  in our own code 

//--- Example ---
//React framework , or Jquyer 
// or even the leaflet library

//All these package are avalible in  NPM

//--------------------------------------------------
//============== 3. NPM =====================
//--------------------------------------------------
//(node package manager)
//contain open-source package include 3rd party code in our code  (react , jquyer)



//--------------------------------------------------
//============== 4. Build Process ===========
//--------------------------------------------------
//proccess in which final Javascript big bunde is build for   Deployment in server


//--------------------------------------------------
//============== 5. Bundling ================
//--------------------------------------------------
// Join all modules into one file
// Banifits
// 1. older browsers do not support module at all. so it convert to   readable code for older browser
// 2. better for performences  whihc is leesss fileds.



//--------------------------------------------------
//========= 6. Transpiling and PolyFilling =========
//--------------------------------------------------
//this convert the  -- Modern JS to back to ES6
//this ------> BABEL <------library Work to do this



//--------------------------------------------------
//========= 7. Don't Perform by UR self ---=========
//--------------------------------------------------
//we do not permform this  convertion  code step by our self  we used
//3rd party tool to implement this  BUILD proccess for us



//===============================================================================================
//===================================== WebPack or PARCEL =======================================
//===============================================================================================
//----- called  JS Bundlers ------

//=========================
//======= 1.  Webpack =====
//=========================
//webpack is more populer one but
//but its need configuration
//very confusion becuase we have configure everything manulally



//=========================
//======= 2. Parcel =======
//=========================
//is  0 configuration bundler
//which simply  work out of the box
//we don't need to write any setup code


///------ these are avalible in  NPM --------