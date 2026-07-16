import type { Peserta } from "./types/peserta.js";

import {
  isNamaValid,
  isNilaiValid
} from "./utils/validasi.js";

const daftarPeserta: Peserta[] = [
  {
    nama: "Saidatul Kholidiya putri",
    sekolah: "SMKN 6 Malang",
    nilai: 90
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
];

for (const peserta of daftarPeserta) {
  console.log("Nama:", peserta.nama);
  console.log(
    "Nama Valid:",
    isNamaValid(peserta.nama)
  );
  console.log(
    "Nilai Valid:",
    isNilaiValid(peserta.nilai)
  );
  console.log("----------------");
}