//=======================================================================
//------------------------ Module in Javascript ------------------------
//=======================================================================
// 1. Reusable piece of code that - Encapsulate - implementation details
// 2. Usually a standalone file , but it doesn't have to be

//-------------------------------------
//----- 2. export (publicApi) ---------
//-------------------------------------
//we can export values out of module 
//it can be any value or data type it can object , class , int,boo....
// export {score}
// what ever we export from module is Called public api

//-------------------------------------
//----- 1. import (dependancy) --------
//-------------------------------------
//we can  import other module in the working moduel by   import module
// import {rand} from './location.js'

//if we are uing any import in  Module that means that module depand on the imported module


//-------------------------------------
//----- 3. Benifit of Module --------
//-------------------------------------
//1. Compose software   :   Modules are small building block which we used build  large application
//2. Isolate Component  :   Module can be develop is isolation without thinking about entire codebase.
//3. Abstract codce     :   Write the Low level code in M and import these abstraction into other module.
//4. Organize code      :   Modules naturally lead to a more organized codes.
//5. Reuse code         :   Module allow us to easily reuse the same code even across multiple projects

//=======================================================================
//------------------------ ES6 Module in Javascript ---------------------
//=======================================================================
//Modules stored in Files 
//exactly one module per files
//                                        ES6 Module             Script
//1. Toplevel variables         :       scoped to Moduel       Globale
//2. Defautl Mode               :       StrickModie            'Sloopy' mode
//3. Top-level this             :       undefined               window
//4. Import and export          :        ✅ Yes                🚫 NO
//5. HTML  Linking              :       type="module"          <script> plane link
//6. File downloading           :       Asynchronous           Synchronous 


//=======================================================================
//------------------------ Module Proccess in JS ------------------------
//=======================================================================
// See the image    Javascript3.png
