// ========================> use of inquirer <============================
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkanimation from 'chalk-animation'
const sleep=()=>{
    return new Promise((res) => {
        setTimeout(res,2000)
    })
}
async function hyeverone() {
    let animationTitle=chalkanimation.rainbow('I am a calculator');
    console.log(chalk.greenBright(`
    _____________________
   |  _________________  |
   | |      CALC       | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `));
    animationTitle.start();
    await sleep();
    animationTitle.stop();
}
hyeverone();
function welcome() {
    const response=inquirer.prompt([{
        type:"number",
        name:"num1",
        message:"Enter the first Num",
        },
        {
            type:"number",
            name:"num2",
            message:"Enter the Second Num" 
        },
        {
            type:"list",
            name:"operator",
            choices:["+","-","*","/","^"],
            message:"Enter the operator"
        }

    ])
    .then((answers) => {
        console.log(answers);
        if (answers.operator==='+') {
            sum(answers.num1,answers.num2);  
        }
        else if (answers.operator==='-') {
            subtract(answers.num1,answers.num2);
        }else if (answers.operator==='*') {
            multiply(answers.num1,answers.num2);
        }else if (answers.operator==='/') {
            division(answers.num1,answers.num2);
        }else if (answers.operator==='^') {
            power(answers.num1,answers.num2);
        }   
        else(console.log('invalid operator')
        )
        
      })
       
}
function sum(num1:number,num2:number) {
    const result=num1+num2;
    console.log('sum:',result);
}
function subtract(num1:number,num2:number) {
    const result=num1-num2;
    console.log('subtract:',result);
}
function multiply(num1:number,num2:number) {
    const result=num1*num2;
    console.log('Multiplay:',result);
}
function division(num1:number,num2:number) {
    const result=num1/num2;
    console.log('division:',result.toFixed(2));
}
function power(num1:number,num2:number) {
    const result=num1**num2;
    console.log('power:',result);
}

setTimeout(() => {
    welcome();
},2000);


