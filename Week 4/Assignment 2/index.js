const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program.name("todo").description("file base todo app");
version("0.8.0");

program
  .command("add")
  .description("add a todo title and display it.")
  .argument("<string>", "save the todo title in todos file")
  .action((str) => {});
