import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1102;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (myBalance >= amountAns.amount) {
            console.log(`Your remaning balance is:  ${myBalance - amountAns.amount}`);
        }
        else {
            console.log("Insuficient balance");
        }
        ;
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
    //  else if (myBalance < amountAns.amount){
    //     console.log("Insuficient balance")}
    //  }}
    else if (operationAns.operation === "fast cash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "select any one option",
                type: "list",
                choices: [500, 1000, 5000, 10000],
            },
        ]);
        if (cashAmount.amount = cashAmount.cash) {
            console.log(`Your remaning balance is:  ${myBalance - cashAmount.amount}`);
        }
        //    console.log(`your remaning balance: ${myBalance - cashAmount.amount}`)
    }
}
else {
    console.log("Incorrect pin code");
}
// else{
//     console.log("Insuficient balance")}
