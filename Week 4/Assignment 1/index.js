const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based task")
  .version("0.8.0");

program
  .command("count")
  .description("count the number of words in file")
  .arguments("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) console.log(err);
      else {
        const words = data.split(/\s+/).filter(Boolean).length;
        console.log(`Their are ${words} word in ${file} file.`);
      }
    });
  });

program.parse();
