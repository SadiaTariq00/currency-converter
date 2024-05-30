#! /usr/bin/env node

import inquirer from "inquirer";
 const currency:any = {
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    JYP:1.82,
    AUD:181.11,
    CHF:308.07,
    
 };

 let useranswer = await inquirer.prompt(
    [
        {
            name : "from",
            message: "Enter form currency",
            type: "list",
            choices:["USD" , "EUR","GBP","INR","PKR","JYP","AUD","CHF"],

        },{
            name:"to",
            message: "Enter to currency",
            type: "list",
            choices:["USD" , "EUR","GBP","INR","PKR","JYP","AUD","CHF"],

        },{
            name:"amount", 
            message:"Enter you amount",
            type:"number",
        }
    ]
 )
 let fromamount = currency [useranswer.from]
 let toamount = currency [useranswer.to]
 let amount = useranswer.amount
 let baseamount = amount/ fromamount
 let convertedamount = baseamount * toamount
 console.log (convertedamount);