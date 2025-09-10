import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function tanyaInput(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

async function convertTanggalAsync(input) {
  return new Promise((resolve, reject) => {
    const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    const match = input.match(regex);

    if (!match) {
      reject("Format tanggal salah (gunakan DD-MM-YYYY)");
      return;
    }

    let [, dd, mm, yyyy] = match;
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

export async function manualPakaiAsync() {
  try {
    const inputUser = await tanyaInput("Masukkan tanggal (DD-MM-YYYY): ");
    let hasil = await convertTanggalAsync(inputUser);
    console.log("Tanggal valid:", hasil);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    rl.close();
  }
}

manualPakaiAsync();
