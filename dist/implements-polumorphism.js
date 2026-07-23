class TugasHarian {
    constructor(nama, nilai) {
        this.nama = nama;
        this.nilai = nilai;
    }
    hitungNilai() {
        // Implementasi hitungNilai
        return 0;
    }
    buatLaporan() {
        return "Laporan tugas harian";
    }
}
console.log("=== TUGAS HARIAN ===");
const tugasHarian = new TugasHarian("Tugas 1", 85);
console.log("Nama:", tugasHarian.nama);
console.log("Nilai:", tugasHarian.hitungNilai());
console.log("Laporan:", tugasHarian.buatLaporan());
// ─── SOAL 2 : Interface ────────────────────────────────────
class NotifikasiDasar {
    isValid() {
        // Implementasi isValid
        return true;
    }
}
class NotifikasiUrgent extends NotifikasiDasar {
    kirim() {
        return "Notifikasi urgent terkirim";
    }
    isValid() {
        // Implementasi isValid khusus untuk NotifikasiUrgent
        return true;
    }
}
class NotifikasiBiasa extends NotifikasiDasar {
    kirim() {
        return "Notifikasi biasa terkirim";
    }
    isValid() {
        // Implementasi isValid khusus untuk NotifikasiBiasa
        return true;
    }
}
console.log("=== NOTIFIKASI ===");
const notifikasiUrgent = new NotifikasiUrgent();
console.log(notifikasiUrgent.kirim());
console.log("Valid:", notifikasiUrgent.isValid());
const notifikasiBiasa = new NotifikasiBiasa();
console.log(notifikasiBiasa.kirim());
console.log("Valid:", notifikasiBiasa.isValid());
export {};
//# sourceMappingURL=implements-polumorphism.js.map