const namaSaya = "saidatul kholidiya";
const asalSekolah = "SMK Negeri 6 Malang";
const kabupaten = "Malang";
const sudahBelajarJavaScript = true;
const targetSelesaiMagang = 2026;
function perkenalan(nama, sekolah, sudahJS) {
    const statusJS = sudahJS ? "sudah" : "belum";
    return `Nama saya ${nama} dari ${sekolah}. Saya ${statusJS} belajar JavaScript sebelumnya.`;
}
console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript));
export {};
//# sourceMappingURL=perkenalan.js.map