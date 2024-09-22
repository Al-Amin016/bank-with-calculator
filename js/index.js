const calculate = document.getElementById('calculate').addEventListener('click', function(){
    // console.log('calculate btn click marche');
    const income = parseFloat(document.getElementById('income').value);
    // console.log(income)
    const software =parseFloat(document.getElementById('software').value)
    // console.log(software);
    const courses = parseFloat(document.getElementById('courses').value);
    // console.log(courses)
    const internet = parseFloat(document.getElementById('internet').value);
    // console.log(internet)

    const totalAmount = software + courses + internet;
    // console.log(totalAmount);

    const results = document.getElementById('results')
    results.classList.remove ('hidden')
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalAmount.toFixed(2);

    const balanceAmount = income - totalAmount;
    // console.log(balanceAmount);
    const balance = document.getElementById('balance');
    balance.innerText = balanceAmount;

    

    
})

const savingCalculat = document.getElementById('calculate-savings').addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const software =parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalAmount = software + courses + internet;
    const balanceAmount = income - totalAmount;

    const saving = parseFloat(document.getElementById('savings').value);
    const savingPlase = (saving * balanceAmount) / 100;
    const savingsAmount = document.getElementById('savings-amount')
    savingsAmount.innerText = savingPlase.toFixed(2)

    const remainingBalance = balanceAmount - savingPlase;

    const remainingBalances = document.getElementById('remaining-balance')
    remainingBalances.innerText = remainingBalance.toFixed(2)
})