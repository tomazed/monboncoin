'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askUser() {
  return new Promise((resolve) => {
    rl.question('What is your username? ', (user) => { resolve(user) })
  })
}

function askPwd(user) {
  return new Promise((resolve) => {
    rl.question('What is your age? ', (pwd) => { resolve([user, pwd]) })
  })
}

function outputEverything([user, pwd]) {
  console.log(`Your username is ${user} and your pwd is ${pwd}`)
}

askUser().then(askPwd).then(outputEverything)