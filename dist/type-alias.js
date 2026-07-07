"use strict";
// ─── SOAL 1 : TYPE ALIAS ─────────────────────────────────────
Object.defineProperty(exports, "__esModule", { value: true });
const hasilPenilaian = {
    kehadiran: 10,
    materi: 9,
    kode: 8,
    problemSolving: 9,
    komunikasi: 10
};
const fase = "Fase 1";
console.log("=== HASIL PENILAIAN ===");
console.log("Fase              :", fase);
console.log("Kehadiran         :", hasilPenilaian.kehadiran);
console.log("Materi            :", hasilPenilaian.materi);
console.log("Kode              :", hasilPenilaian.kode);
console.log("Problem Solving   :", hasilPenilaian.problemSolving);
console.log("Komunikasi        :", hasilPenilaian.komunikasi);
const jurnal1 = {
    tanggal: "15 Juli 2026",
    checkIn: "08.00",
    checkOut: "17.00",
    kegiatan: "Mempelajari Type Alias dan Interface",
    hambatan: "Masih memahami penggunaan Type Alias.",
    rencanaBesok: "Mengerjakan latihan berikutnya.",
    linkCommit: "https://github.com/saidatulkholidiya/ts-magang-batch4"
};
const jurnal2 = {
    tanggal: "16 Juli 2026",
    checkIn: "08.00",
    checkOut: "17.00",
    kegiatan: "Mempelajari Interface Extend",
    hambatan: "Masih memahami penggunaan extends.",
    rencanaBesok: "Review kembali materi."
};
console.log("\n=== JURNAL HARIAN ===");
console.log("Tanggal           :", jurnal1.tanggal);
console.log("Check In          :", jurnal1.checkIn);
console.log("Check Out         :", jurnal1.checkOut);
console.log("Kegiatan          :", jurnal1.kegiatan);
console.log("Hambatan          :", jurnal1.hambatan);
console.log("Rencana Besok     :", jurnal1.rencanaBesok);
console.log("Link Commit       :", jurnal1.linkCommit);
console.log("------------------------------------");
console.log("Tanggal           :", jurnal2.tanggal);
console.log("Check In          :", jurnal2.checkIn);
console.log("Check Out         :", jurnal2.checkOut);
console.log("Kegiatan          :", jurnal2.kegiatan);
console.log("Hambatan          :", jurnal2.hambatan);
console.log("Rencana Besok     :", jurnal2.rencanaBesok);
console.log("Link Commit       :", jurnal2.linkCommit);
const peserta1 = {
    id: 1,
    nama: "Saidatul Kholidiya",
    sekolah: "SMK Negeri 6 Malang",
    fase: 1,
    status: "aktif"
};
const peserta2 = {
    id: 2,
    nama: "Laela Nurul Hidayah",
    sekolah: "SMK Negeri 5 Malang",
    fase: 5,
    status: "lulus"
};
const peserta3 = {
    id: 3,
    nama: "Andi Saputra",
    sekolah: "SMK Negeri 4 Malang",
    fase: 1,
    status: "berhenti"
};
// Function Filter Peserta
function filterPeserta(list, status) {
    return list.filter((peserta) => peserta.status === status);
}
const daftarPeserta = [
    peserta1,
    peserta2,
    peserta3
];
// Menampilkan Peserta Aktif
console.log("\n=== PESERTA AKTIF ===");
filterPeserta(daftarPeserta, "aktif").forEach((peserta) => {
    console.log("ID              :", peserta.id);
    console.log("Nama            :", peserta.nama);
    console.log("Sekolah         :", peserta.sekolah);
    console.log("Fase            :", peserta.fase);
    console.log("Status          :", peserta.status);
    console.log("--------------------------------");
});
// Menampilkan Peserta Lulus
console.log("\n=== PESERTA LULUS ===");
filterPeserta(daftarPeserta, "lulus").forEach((peserta) => {
    console.log("ID              :", peserta.id);
    console.log("Nama            :", peserta.nama);
    console.log("Sekolah         :", peserta.sekolah);
    console.log("Fase            :", peserta.fase);
    console.log("Status          :", peserta.status);
    console.log("--------------------------------");
});
// Menampilkan Peserta Berhenti
console.log("\n=== PESERTA BERHENTI ===");
filterPeserta(daftarPeserta, "berhenti").forEach((peserta) => {
    console.log("ID              :", peserta.id);
    console.log("Nama            :", peserta.nama);
    console.log("Sekolah         :", peserta.sekolah);
    console.log("Fase            :", peserta.fase);
    console.log("Status          :", peserta.status);
    console.log("--------------------------------");
});
//# sourceMappingURL=type-alias.js.map