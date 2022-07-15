// 1. create the item list and add the items
// 2. update the item quantity
// 3. remove the item from the list
// 4. the total price of all the items added to shopping cart

const createUser = require('./create');
const prompt = require('prompt-sync')();
const operation = prompt('which operation you want to perform?');

/*
   add
   update
   list delete
   */

   switch (operation){
     case 'add':
                createUser.addUser();
                break;
     case 'update':
                break;
     case 'delete':
                break;
     default:
             console.log('No operation is going to perform')
             break;                       
    
   }