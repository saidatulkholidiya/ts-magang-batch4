"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namaSaya = "saidatul kholidiya"; // ← isi nama kamu
const asalSekolah = "SMK Negeri 6 Malang"; // ← SMK 5 Malang atau SMK 6 Malang
const kabupaten = "Malang";
const sudahBelajarJavaScript = true; // atau false
const targetSelesaiMagang = 2026; // tahun target
function perkenalan(nama, sekolah, sudahJS) {
    const statusJS = sudahJS ? "sudah" : "belum";
    return `Nama saya ${nama} dari ${sekolah}. Saya ${statusJS} belajar JavaScript sebelumnya.`;
}
console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript));
//# sourceMappingURL=perkenalan.js.map