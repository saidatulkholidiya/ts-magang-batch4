"use strict";
// ─── SOAL 1 ─────────────────────────────────────
Object.defineProperty(exports, "__esModule", { value: true });
// Variabel data nilai rapor
let nama = "Saidatul Kholidiya";
let kelas = "XIII SIJA 2";
let nilaiTS = 80;
let nilaiJS = 78;
// Hitung rata-rata
let rataRata = (nilaiTS + nilaiJS) / 2;
// Tentukan lulus atau tidak
let lulus = rataRata >= 75;
// Output
console.log("=== Data Nilai Rapor ===");
console.log("Nama       :", nama);
console.log("Kelas      :", kelas);
console.log("Nilai TS   :", nilaiTS);
console.log("Nilai JS   :", nilaiJS);
console.log("Rata-rata  :", rataRata);
console.log("Lulus      :", lulus);
// ─── SOAL 2 ────────────────────────────────
// String enum
var Prioritas;
(function (Prioritas) {
    Prioritas["Rendah"] = "RENDAH";
    Prioritas["Sedang"] = "SEDANG";
    Prioritas["Tinggi"] = "TINGGI";
})(Prioritas || (Prioritas = {}));
// Array Tuple
let daftarTugas = [
    ["Setup TypeScript", Prioritas.Tinggi],
    ["Baca dokumentasi", Prioritas.Sedang]
];
// Output
console.log("=== Daftar Tugas ===");
daftarTugas.forEach((tugas) => {
    console.log(`Tugas: ${tugas[0]} | Prioritas: ${tugas[1]}`);
});
function hitungDiskon(harga, diskon) {
    let persenDiskon = 0;
    // Jika diskon berupa angka
    if (typeof diskon === "number") {
        persenDiskon = diskon;
    }
    // Jika diskon berupa kode voucher
    if (typeof diskon === "string") {
        if (diskon === "MAGANG10") {
            persenDiskon = 10;
        }
        else if (diskon === "NAWASENA20") {
            persenDiskon = 20;
        }
        else {
            persenDiskon = 0;
        }
    }
    // Hitung harga akhir
    let hargaAkhir = harga - (harga * persenDiskon / 100);
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
//# sourceMappingURL=latihan-jumat.js.map