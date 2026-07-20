// ─── SOAL 1 : Abstract Class Notifikasi ────────────────────────────────────
class Notifikasi {
    constructor(pesan) {
        this.pesan = pesan;
    }
    log() {
        console.log("[LOG] Notifikasi dikirim");
    }
}
class NotifikasiEmail extends Notifikasi {
    kirim() {
        return `Email terkirim: ${this.pesan}`;
    }
}
class NotifikasiWhatsApp extends Notifikasi {
    kirim() {
        return `WhatsApp terkirim: ${this.pesan}`;
    }
}
class NotifikasiPush extends Notifikasi {
    kirim() {
        return `Push notification terkirim: ${this.pesan}`;
    }
}
const email = new NotifikasiEmail("Laporan magang telah dikirim");
console.log(email.kirim());
email.log();
const whatsapp = new NotifikasiWhatsApp("Meeting dimulai pukul 09.00");
console.log(whatsapp.kirim());
whatsapp.log();
const push = new NotifikasiPush("Ada tugas baru");
console.log(push.kirim());
push.log();
// ─── SOAL 2 : Abstract Class Bentuk Geometri ────────────────────────────────────
class BentukGeometri {
    deskripsi() {
        return `Luas: ${this.hitungLuas()}, Keliling: ${this.hitungKeliling()}`;
    }
}
class Lingkaran extends BentukGeometri {
    constructor(jariJari) {
        super();
        this.jariJari = jariJari;
    }
    hitungLuas() {
        return Math.PI * this.jariJari * this.jariJari;
    }
    hitungKeliling() {
        return 2 * Math.PI * this.jariJari;
    }
}
class Persegi extends BentukGeometri {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }
    hitungLuas() {
        return this.sisi * this.sisi;
    }
    hitungKeliling() {
        return 4 * this.sisi;
    }
}
class Segitiga extends BentukGeometri {
    constructor(alas, tinggi, sisiA, sisiB, sisiC) {
        super();
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisiA = sisiA;
        this.sisiB = sisiB;
        this.sisiC = sisiC;
    }
    hitungLuas() {
        return (this.alas * this.tinggi) / 2;
    }
    hitungKeliling() {
        return (this.sisiA +
            this.sisiB +
            this.sisiC);
    }
}
const lingkaran = new Lingkaran(7);
console.log(lingkaran.deskripsi());
const persegi = new Persegi(8);
console.log(persegi.deskripsi());
const segitiga = new Segitiga(10, 8, 10, 8, 9);
console.log(segitiga.deskripsi());
// ─── SOAL 3 : Abstract Class Tugas Magang ────────────────────────────────────
class TugasMagang {
    constructor(judul, deadline) {
        this.judul = judul;
        this.deadline = deadline;
    }
    info() {
        return `${this.judul} - Deadline: ${this.deadline}`;
    }
}
class TugasHarian extends TugasMagang {
    statusPengerjaan() {
        const sekarang = new Date();
        const deadline = new Date(this.deadline);
        const selisihHari = (sekarang.getTime() - deadline.getTime()) /
            (1000 * 60 * 60 * 24);
        if (selisihHari > 1) {
            return "Terlambat";
        }
        return "Masih dalam batas waktu";
    }
}
class TugasMingguan extends TugasMagang {
    statusPengerjaan() {
        const sekarang = new Date();
        const deadline = new Date(this.deadline);
        const selisihHari = (sekarang.getTime() - deadline.getTime()) /
            (1000 * 60 * 60 * 24);
        if (selisihHari > 7) {
            return "Terlambat";
        }
        return "Masih dalam batas waktu";
    }
}
const tugasHarian = new TugasHarian("Membuat Landing Page", "2026-07-22");
console.log(tugasHarian.info());
console.log(tugasHarian.statusPengerjaan());
const tugasMingguan = new TugasMingguan("Menyelesaikan Studi Kasus TypeScript", "2026-07-27");
console.log(tugasMingguan.info());
console.log(tugasMingguan.statusPengerjaan());
export {};
//# sourceMappingURL=abstract-class.js.map