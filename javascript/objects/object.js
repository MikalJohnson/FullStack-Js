/*
Developed by: Mikal Johnson
This program simulates a very simple login system and displays a newsfeed if the login is successful.
*/

let database = [
    {
        username: "Mikal",
        password: "cougars24"
    }
];
let newsfeed = [
    {
        username: "Henry",
        timeline: "I just obtain my first job!!!"
    },
    {
        username: "Lewis",
        timeline: "Going hiking this weekend, who wants to join?"
    },
    {
        username: "Katy",
        timeline: "I going to Italy soon"
    }
];

let userNameInput = prompt("Please enter username");
let passwordInput = prompt("Please enter your password");

function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsfeed);
    } else {
        return "Access Denied";
    }
};

console.log(signIn(userNameInput, passwordInput));