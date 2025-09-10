import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pertanyaan(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawabanUser) => {
      resolve(jawabanUser);
    });
  });
}

export async function manualDate() {
  rl.question("Masukan tanggal (dd-mm-yyyy)", (jawabanManual) => {
    if (!jawabanManual.includes("-")) {
      console.log("format jawaban salah");
      rl.close();
      return;
    }
    const hasil = jawabanManual.replace(/-/g, "/");
    console.log(hasil);
    rl.close();
  });
}

