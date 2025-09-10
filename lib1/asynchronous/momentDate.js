import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// helper supaya rl.question bisa di-await
async function tanyaInput(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

export async function pakaiMoment() {
  try {
    const input = await tanyaInput("Masukkan tanggal (DD-MM-YYYY): ");
    const formAwal = "DD-MM-YYYY";
    const parseInput = moment(input, formAwal, true);

    if (parseInput.isValid()) {
      console.log("Tanggal valid:", parseInput.format("DD/MM/YYYY"));
    } else {
      console.log("Format salah");
    }
  } catch (err) {
    console.log("Error:", err);
  } finally {
    rl.close();
  }
}

pakaiMoment();
