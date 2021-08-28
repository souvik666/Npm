var inquirer = require("inquirer");

var inquirer = require("inquirer");
const { type } = require("os");
inquirer
  .prompt([
    {
      name: "username",
      type: "input",
      message: "please eneter your username",
    },
    {
      name: "password",
      type: "password",
      message: "please eneter your password",
      validate(value) {
        const pass = value.length >= 8;
        if (pass) {
          return true;
        } else {
          return "please eneter 8 char pass";
        }
      },
    },
  ])
  .then((answers) => {
    let user = answers.username;
    let password = answers.password;
    let data = {
      user,
      password,
    };
    console.log(data);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
