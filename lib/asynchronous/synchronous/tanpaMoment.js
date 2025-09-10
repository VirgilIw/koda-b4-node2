import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function tanpaMomentThen() {
  function convertTanggalAsync(input) {
    return new Promise((resolve, reject) => {
      const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
      const matches = input.match(regex);

      //   console.log(matches);

      if (!matches) {
        reject("Format tanggal salah");
        return;
      }

      let [, dd, mm, yyyy] = matches;
      let day = parseInt(dd, 10);
      let month = parseInt(mm, 10);
      let year = parseInt(yyyy, 10);

      let daysInMonth = new Date(year, month, 0).getDate();
      if (month < 1 || month > 12 || day < 1 || day > daysInMonth) {
        reject("Tanggal tidak valid");
        return;
      }

      resolve(`${dd}/${mm}/${yyyy}`);
    });
  }

  function tangkapParameter() {
    rl.question("Masukkan tanggal (DD-MM-YYYY): ", (inputUser) => {
      convertTanggalAsync(inputUser)
        .then((hasil) => {
          console.log("Format benar:", hasil);
          rl.close();
        })
        .catch((err) => {
          console.log("Error:", err);
          rl.close();
        });
    });
  }

  tangkapParameter();
}

tanpaMomentThen();
