const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { type } = require("os");

inquirer
  .prompt([
    {
      name: "username",
      type: "input",
      message: "Username",
    },
    {
      name: "password",
      type: "password",
      message: "Password",
      validate(value) {
        if (value.length >= 8) return true;
        else return "password must be 8 char long";
      },
    },
    {
      name: "address",
      type: "input",
      message: "address",
    },
    {
      name: "phone",
      type: "number",
      message: "Phone Number",
      filter(value) {
        return Number(value);
      },
    },
    {
      name: "pref",
      type: "list",
      message: "Choose your crust:",
      choices: ["veg", "nonveg"],
    },
  ])
  .then((answer) => {
    let sum = 0;
    let username = answer.username;
    let address = answer.address;
    let phone = answer.phone;
    let pref = answer.pref;
    let data = {
      username,
      address,
      phone,
      pref,
    };
    console.log(answer.pref2);
    if (answer.pref === "veg") {
      inquirer
        .prompt([
          {
            name: "vegitem",
            type: "list",
            message: "Today available",
            choices: ["Panir -90/", "veg biriyani -90/", "veg chaowmin -90/"],
          },
          {
            name: "qnty",
            type: "input",
            message: "qnty",
            filter(value) {
              return Number(value);
            },
          },
        ])
        .then((el) => {
          /* sum += 90;
          let data = {
            username,
            address,
            phone,
            pref,
            qnty,
          };
          console.log(data); */
          sum += 90;
          sum *= el.qnty;
          data.qnty = el.qnty;
          data.sum = sum;
          console.log(data);
        });
    } else {
      inquirer
        .prompt([
          {
            name: "noneveg",
            type: "list",
            message: "Today available",
            choices: ["chkn -180/", "mutton -180/", "biriyani -180/"],
          },
          {
            name: "qnty",
            type: "input",
            message: "qnty",
            filter(value) {
              return parseInt(value);
            },
          },
        ])
        .then((el) => {
          sum += 180;
          sum *= el.qnty;
          data.qnty = el.qnty;
          data.sum = sum;
          console.log(data);
        });
    }
  });
