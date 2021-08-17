const { Command } = require("commander");
var QRCode = require("qrcode");
/* for example from the CLI I should be able to write in this format:
node index.js <text_for_qrcode> --output filename.png */
/* QRCode.toString(filename, { type: "terminal" }, function (err, url) {
  console.log(url);
}); */
let fname;
const program = new Command();
program.version("0.0.1");
program
  .argument("<nameforqr>")
  .argument("<filename>")
  .action(function (nameforqr, filename) {
    //console.log(filename, nameforqr);
    QRCode.toFile(
      `/home/souvik/cake/NPM/${filename}`,
      `${nameforqr}`,
      {
        color: {
          dark: "#00F", // Blue dots
          light: "#0000", // Transparent background
        },
      },
      function (err) {
        if (err) throw err;
        console.log("done");
      }
    );
  });
program.parse();
