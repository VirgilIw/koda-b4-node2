import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function manualDateNative() {
  rl.question("Masukkan tanggal (DD-MM-YYYY): ", (input) => {
    // cek format dasar pakai regex
    const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    const match = input.match(regex);
    // menghasilkan array

    if (!match) {
      console.log("Format salah! (gunakan DD-MM-YYYY)");
      rl.close();
      return;
    }

    // destruktur tanggal
    let [, dd, mm, yyyy] = match;
    // 10 itu basis data karna kita mau angka desimal
    let day = parseInt(dd, 10);
    let month = parseInt(mm, 10);
    let year = parseInt(yyyy, 10);

    // cek jumlah hari di bulan tsb
    // getDate ini untuk ambil hari
    let daysInMonth = new Date(year, month, 0).getDate();

    if (month < 1 || month > 12 || day < 1 || day > daysInMonth) {
      console.log("Tanggal tidak valid!");
    } else {
      console.log("Tanggal valid:", `${dd}/${mm}/${yyyy}`);
    }

    rl.close();
  });
}

manualDateNative();
