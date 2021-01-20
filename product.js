'use strict'

var buttons;
// This array holds differnet statements that will appear in the alert message
var statements = ["Sorry, this item is out of stock", "There is nothing for you here", "It will be delivered shortly :)"];

// The different "onclick" functions that are connected to the certain buttons
function outStock(){
    buttons = setTimeout(noStock, 1500);
};

function outStock2(){
    buttons = setTimeout(noStock1, 1500);
};

function outStock3(){
    buttons = setTimeout(noStock2, 1500);
};


//Three different funtions that select a message from the array then change the color of the button depending which button is clicked
function noStock(){
    var button1 = document.getElementById("button1");
    
    if (button1.clicked !== true){
    alert(JSON.stringify(statements[0]));
    button1.style.background = "red";
    } ;

};

function noStock1(){

var button2 = document.getElementById("button2");

if(button2.clicked !== true){
        alert(JSON.stringify(statements[1]));
        button2.style.background = "red";
    }; 
};

function noStock2(){
    var button3 = document.getElementById("button3");

    if(button3.clicked !== true){
            alert(JSON.stringify(statements[2]));
            button3.style.background = "green";
        }; 
};



