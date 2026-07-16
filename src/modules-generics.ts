import type { Peserta } from "./types/peserta.js";

// SOAL 2
// Generic Function

function getLast<T>(
  arr: T[]
): T {
  return arr[arr.length - 1]!;
}

console.log(
  getLast<number>([
    10,
    20,
    30
  ])
);

console.log(
  getLast<string>([
    "HTML",
    "CSS",
    "TypeScript"
  ])
);

// SOAL 3
// Generic Interface

interface Respon<T> {
  success: boolean;
  data: T;
  message: string;
}

// Response 1 peserta
const responPeserta: Respon<Peserta> = {
  success: true,
  data: {
    nama: "Saidatul Kholidiya",
    sekolah: "SMKN 6 Malang",
    nilai: 95
  },
  message: "Data peserta berhasil diambil"
};

// Response list peserta
const responListPeserta: Respon<Peserta[]> = {
  success: true,
  data: [
    {
      nama: "Saidatul Kholidiya",
      sekolah: "SMKN 6 Malang",
      nilai: 95
    },
    {
      nama: "Ajeng Nielza Itsna Mufida",
      sekolah: "SMKN 6 Malang",
      nilai: 90
    },
    {
      nama: "Laela Nurul Hidayah",
      sekolah: "SMKN 5 Malang",
      nilai: 85
    }
  ],
  message: "Daftar peserta berhasil diambil"
};

console.log(responPeserta);
console.log(responListPeserta);