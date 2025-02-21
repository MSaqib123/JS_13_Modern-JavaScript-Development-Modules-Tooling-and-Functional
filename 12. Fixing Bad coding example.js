//=====================================================================
//=========================== Asphghati code ==========================
//=====================================================================
const budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ];
  

  //========== Transaction Limmits ===========
  const SpendingLimits = {
    jonas: 1500,
    matilda: 100,
  };
  
  //============= Refectoring code ============
  const getLimit = user=>SpendingLimits?.[user] ?? 0;


  //========== Add Expense ===========
  const addExpense = function (value, description, user = 'jonas') {
    //if (!user) user = 'jonas';
    user = user.toLowerCase();

      //============= If =============
      // if (SpendingLimits[user]) {
      //   limit = SpendingLimits[user];
      // } else {
      //   limit = 0;
      // }

      //============= Ternary Operator =============
      //const limit = SpendingLimits[user] ? SpendingLimits[user] : 0;

      //============= Optional Channing =============
      //SpendingLimits?.[user]  =   (const limit = SpendingLimits[user] ? SpendingLimits[user] : 0;)
      //const limit = getLimit(user); //SpendingLimits?.[user] ?? 0;
      if (value <= getLimit(user)) {
        budget.push({ 
          value: -value,
          description ,//: description, //object litteral syntax
          user //: user  //object litteral syntax
        });
      }
  };
  addExpense(10, 'Pizza 🍕');
  addExpense(200, 'Going to movies 🍿', 'Matilda');
  addExpense(200, 'Stuff', 'Jay');
  console.log(budget);
  

  //========== Check Expense ===========
  const checkExpense = function () {
    for (const entry of budget) {
      if (entry.value < -getLimit(entry.user)) {
        entry.flag = 'limit';
      }

      //--- bad code ---
      // if (SpendingLimits[entry.user]) {
      //   lim = SpendingLimits[entry.user];
      // } else {
      //   lim = 0;
      // }

      //---------- Refector Code ---------
      //const limit = getLimit(entry.user)//SpendingLimits?.[user] ?? 0;
    }
  };
  checkExpense();
  console.log(budget);
  

  //======================================
  //========== Log Big Expense ===========
  //======================================
  const logbigExpenses = function (bigLimit) {
    let output = '';
    for (const entry of budget) {
      // if (entry.value <= -bigLimit) {
      //   //Imojis are 2 char
      //   output += `${entry.description.slice(-2)} + / `; // Emojis are 2 chars
      // }
      //More Declaritive
      output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''
    }
    output = output.slice(0, -2); //Remove last '/ '
    console.log(output);
  };
  
  logbigExpenses(100)