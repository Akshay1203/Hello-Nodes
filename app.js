console.log('Starting app.js');

const fs=require('fs');
const os=require('os');

var user=os.userInfo();

const notes=require('./notes.js')
const res=notes.addNum(9,-2);
console.log(res);
//console.log(user);
/*fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}` , function (err){

    if(err){
        console.log('Unable to write file');
    }
});*/