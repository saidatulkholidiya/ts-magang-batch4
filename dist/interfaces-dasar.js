"use strict";
// ─── SOAL 1 : INTERFACE PESERTA ────────────────────────────────
Object.defineProperty(exports, "__esModule", { value: true });
const peserta1 = {
    id: 1,
    nama: "Saidatul Kholidiya",
    sekolah: "SMK Negeri 6 Malang",
    fase: 1,
    nilaiAkhir: 95,
    github: "https://github.com/saidatulkholidiya"
};
const peserta2 = {
    id: 2,
    nama: "Laela Nurul Hidayah",
    sekolah: "SMK Negeri 5 Malang",
    fase: 1
};
console.log("=== DATA PESERTA ===");
console.log("ID            :", peserta1.id);
console.log("Nama          :", peserta1.nama);
console.log("Sekolah       :", peserta1.sekolah);
console.log("Fase          :", peserta1.fase);
console.log("Nilai Akhir   :", peserta1.nilaiAkhir);
console.log("Github        :", peserta1.github);
console.log("--------------------------------");
console.log("ID            :", peserta2.id);
console.log("Nama          :", peserta2.nama);
console.log("Sekolah       :", peserta2.sekolah);
console.log("Fase          :", peserta2.fase);
console.log("Nilai Akhir   :", peserta2.nilaiAkhir);
console.log("Github        :", peserta2.github);
const mentor = {
    nama: "Pak Sugeng Eko Saputro",
    email: "sugengekos@nawasena.com",
    keahlian: ["TypeScript", "JavaScript"],
    review(peserta, catatan) {
        return `Feedback untuk ${peserta.nama}: ${catatan}`;
    }
};
console.log("\n=== REVIEW MENTOR ===");
console.log("Nama Mentor   :", mentor.nama);
console.log("Email         :", mentor.email);
console.log("Keahlian      :", mentor.keahlian.join(", "));
console.log("\n=== REVIEW MENTOR ===");
console.log(mentor.review(peserta1, "Kerja bagus, tetap semangat belajar!"));
const kelas = {
    nama: "TypeScript Batch 4",
    peserta: [peserta1],
    mentor: mentor,
    tambahPeserta(p) {
        this.peserta.push(p);
    },
    cariPeserta(nama) {
        return this.peserta.find((p) => p.nama === nama);
    }
};
// Menambah peserta
kelas.tambahPeserta(peserta2);
console.log("\n=== DAFTAR PESERTA ===");
kelas.peserta.forEach((p) => {
    console.log("ID            :", p.id);
    console.log("Nama          :", p.nama);
    console.log("Sekolah       :", p.sekolah);
    console.log("Fase          :", p.fase);
    console.log("-------------------------------");
});
// Mencari peserta 
const hasilCari = kelas.cariPeserta("Laela Nurul Hidayah");
console.log("\n=== HASIL PENCARIAN ===");
if (hasilCari) {
    console.log("ID            :", hasilCari.id);
    console.log("Nama          :", hasilCari.nama);
    console.log("Sekolah       :", hasilCari.sekolah);
    console.log("Fase          :", hasilCari.fase);
}
//# sourceMappingURL=interfaces-dasar.js.map