// ─── SOAL 1 ─────────────────────────────────────

let nama: string = "Saidatul Kholidiya";
let kelas: string = "XIII SIJA 2";
let nilaiTS: number = 80;
let nilaiJS: number = 78;

let rataRata: number = (nilaiTS + nilaiJS) / 2;

let lulus: boolean = rataRata >= 75;

// Output
console.log("=== Data Nilai Rapor ===");
console.log("Nama       :", nama);
console.log("Kelas      :", kelas);
console.log("Nilai TS   :", nilaiTS);
console.log("Nilai JS   :", nilaiJS);
console.log("Rata-rata  :", rataRata);
console.log("Lulus      :", lulus);


// ─── SOAL 2 ────────────────────────────────

enum Prioritas {
  Rendah = "RENDAH",
  Sedang = "SEDANG",
  Tinggi = "TINGGI"
}

let daftarTugas: [string, Prioritas][] = [
  ["Setup TypeScript", Prioritas.Tinggi],
  ["Baca dokumentasi", Prioritas.Sedang]
];

// Output
 console.log("=== Daftar Tugas ===");
daftarTugas.forEach((tugas) => {
  console.log(`Tugas: ${tugas[0]} | Prioritas: ${tugas[1]}`);
});


// ─── SOAL 3 ─────────────────────────────

type Diskon = number | string;

function hitungDiskon(harga: number, diskon: Diskon): number {
  let persenDiskon: number = 0;

  if (typeof diskon === "number") {
    persenDiskon = diskon;
  }

  if (typeof diskon === "string") {
    if (diskon === "MAGANG10") {
      persenDiskon = 10;
    } else if (diskon === "NAWASENA20") {
      persenDiskon = 20;
    } else {
      persenDiskon = 0;
    }
  }

  let hargaAkhir: number = harga - (harga * persenDiskon / 100);

  // Output detail
  console.log(`Harga Awal   : ${harga}`);
  console.log(`Diskon       : ${persenDiskon}%`);
  console.log(`Harga Akhir  : ${hargaAkhir}`);
  console.log("----------------------");

  return hargaAkhir;
}

// Output

  console.log("=== Detail Diskon ===");

hitungDiskon(100000, 10);
hitungDiskon(100000, "MAGANG10");
hitungDiskon(100000, "NAWASENA20");
hitungDiskon(100000, "ABC");