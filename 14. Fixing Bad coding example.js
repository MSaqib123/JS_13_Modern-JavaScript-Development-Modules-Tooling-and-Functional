//=====================================================================
//======================== Functinal Programing =======================
//=====================================================================
//1. Imitiablity
//2. SideEffect and pure function
//3. Making data transfromration using pure functions  ,  map , filter reduce


//================================================
//================= Object.freeze() ==============
//================================================
//---- 1. we can not add new Property to Objeet.freez
//---- 2. but we  reinitizlie the Value to existing properyt in Object.Freez()
//its not deepFreez logic
//-- budget[0].value = 10000 ---  this will change the vale
//-- buget[0].Country = "Pakistan"   ----  not work ,  ths will not add because this properyt is not in buget object
//-- buget[0] = "Sajid"     --- not work




const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ]);
  

  //========== Transaction Limmits ===========
  const SpendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
  });
  
  //============= Refectoring code ============
  //const getLimit = user=>SpendingLimits?.[user] ?? 0;
  const getLimit = (limit,user)=>limit?.[user] ?? 0;


  //========== Add Expense ===========
  const addExpense = function (state,limit,value, description, user = 'jonas') {
    const cleanUser = user.toLowerCase();
    user = user.toLowerCase();

    //---- bad ----
    // if (value <= getLimit(user)) 
    // {
    //   //this create dublic state
    //   return [...state,{value: -value,description ,user :cleanUser}]

    //   //---- object freez will not allowed push -----
    //   //budget.push({ value: -value,description ,user :cleanUser});
    // }

    //---- bravo ----
    return value <= getLimit(limit,user) ? [...state,{value: -value,description ,user :cleanUser}] : state;
  };

  const budget1 =addExpense(budget,SpendingLimits,1000, 'Pizza 🍕');
  const budget2= addExpense(budget1,SpendingLimits,100, 'Going to movies 🍿', 'Matilda');
  const budget3=addExpense(budget1,SpendingLimits,200, 'Stuff', 'Jay');
  console.log(budget3);
  //----- Note -------
  //in react we use [Composing technique] to pass the preview result to next  
  //its advance concept will be claared in react project
  

  //============= Check Expense ==============
  //***** Bad *****
  // const checkExpense = function (state,limit) {
  //   return state.map(entry => {
  //     return entry.value < -getLimit(limit,entry.user) ? {...entry, flag:'limit'}:entry;
  //   })
  //   // for (const entry of budget) {
  //   //   if (entry.value < -getLimit(limit,entry.user)) {
  //   //     entry.flag = 'limit';
  //   //   }
  //   // }
  // };

  //***** Good *****
  const checkExpense = (state,limit) => 
      state.map(entry =>  
        entry.value < -getLimit(limit,entry.user) ? {...entry, flag:'limit'}:entry)

  const finalBudget = checkExpense(budget3,SpendingLimits);
  console.log(finalBudget);
  

  //======================================
  //========== Log Big Expense ===========
  //======================================
  const logbigExpenses = function (state,bigLimit) {
    //----------------- Best logic ----------------
    const bigExpenses = state
      .filter(entry => entry.value <= -bigLimit)
      // .map(entry=>entry.description.slice(-2))
      // .join(' / ');
      .reduce((str, cur) => str ? `${str} / ${cur.description.slice(-2)}` : cur.description.slice(-2), '');
   
    console.log(bigExpenses);

    //----------------- Bad logic ----------------
    // let output = '';
    // for (const entry of budget) {
    //   //More Declaritive
    //   output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
    // }
    // output = output.slice(0, -2); //Remove last '/ '
    // console.log(output);
  };
  //logbigExpenses(finalBudget,100)
  logbigExpenses(finalBudget,500)