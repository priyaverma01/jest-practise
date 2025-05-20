// greet.js

function getGreeting(nameProvider) {
    const name = nameProvider();
    return `Hello, ${name}!`;
  }
  
  module.exports = { getGreeting };
  

