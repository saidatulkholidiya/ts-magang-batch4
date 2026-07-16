// ─── SOAL 1 ─────────────────────────────────────────
let nama = "Saidatul Kholidiya";
let kelas = "XIII SIJA 2";
let nilaiTS = 95;
let nilaiJS = 90;
// Hitung rata-rata
let rataRata = (nilaiTS + nilaiJS) / 2;
// Cek kelulusan
let lulus = rataRata >= 75;
// Output
console.log("----- DATA NILAI RAPOR ------");
console.log("Nama           :", nama);
console.log("Kelas          :", kelas);
console.log("Nilai TS       :", nilaiTS);
console.log("Nilai JS       :", nilaiJS);
console.log("Rata-rata      :", rataRata);
console.log("Lulus          :", lulus);
// ─── SOAL 2 ──────────────────────────────────────
var Prioritas;
(function (Prioritas) {
    Prioritas["Rendah"] = "RENDAH";
    Prioritas["Sedang"] = "SEDANG";
    Prioritas["Tinggi"] = "TINGGI";
})(Prioritas || (Prioritas = {}));
let daftarTugas = [
    ["Setup TypeScript", Prioritas.Tinggi],
    ["Baca dokumentasi", Prioritas.Sedang]
];
// Output
console.log(" ------ DAFTAR TUGAS ------");
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
    }
    let jumlahDiskon = harga * persenDiskon / 100;
    let hargaAkhir = harga - jumlahDiskon;
    console.log("Harga Awal      :", harga);
    console.log("Diskon          :", `${persenDiskon}%`);
    console.log("Harga Akhir     :", hargaAkhir);
    console.log("-------------------");
    return hargaAkhir;
}
// Output
console.log("----- DETAIL DISKON ------");
hitungDiskon(100000, 10);
hitungDiskon(100000, "MAGANG10");
hitungDiskon(100000, "NAWASENA20");
hitungDiskon(100000, "ABC");
export {};
//# sourceMappingURL=latihan-jumat.js.map