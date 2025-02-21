//=====================================================================
//=========================== 1. Top level Await ======================
//=====================================================================
//______ Note ___
//starting with new ES6 2022  vers ..
//we can now used  this (AWAIT keyword) outside of async function but only in Modules
//--- got it --- thats why this is in module section


//------ Benifit --------
//its very good that we can use  Await  without async method

//------ SaidEffect -------
//but it also  block execution of entire module

// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);
// console.log("Do Something for chiecking execution block")


//=====================================================
//================= Get Last Post =====================
//=====================================================
//at(-1) will get the last post
const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return {
        title:data.at(-1).title,
        text:data.at(-1).body
    }
}

//const lastPost = getLastPost();
//return the promise becuase the async function
// console.log(lastPost);

//----- 1st way -----
const lPost = getLastPost();
lPost.then(last => console.log(last))

//----- 2nd way ----- TopLevelAwait
//but we can use  topLevelAwait
const lastPost = await getLastPost();
console.log(lastPost);


//======================== Note ==================
//TopLevel Await is very handy feature in Module but it also block the execution of code
//so please  used in  at last end of preiorty
//do not used it to much used it when need in urgent




