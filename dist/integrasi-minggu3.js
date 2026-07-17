// LANGKAH 1 — Base class
class Pengguna {
    constructor(nama, email, createdAt = new Date().toISOString()) {
        this.nama = nama;
        this.email = email;
        this.createdAt = createdAt;
    }
    info() {
        return `${this.nama} (${this.email})`;
    }
}
// LANGKAH 2 — Inheritance
class PesertaMagang extends Pengguna {
    constructor(nama, email, sekolah, fase = 1) {
        super(nama, email);
        this.sekolah = sekolah;
        this.fase = fase;
        this.nilaiList = [];
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
    getRataRata() {
        if (this.nilaiList.length === 0) {
            return 0;
        }
        return (this.nilaiList.reduce((total, nilai) => total + nilai, 0) / this.nilaiList.length);
    }
    info() {
        return `${super.info()} - ${this.sekolah}, Fase ${this.fase}`;
    }
}
function buatResponse(data, message = "OK") {
    return {
        success: true,
        data,
        message
    };
}
// LANGKAH 4 — Higher order function untuk filter & sort
function urutkanBerdasarkanNilai(peserta, urutan = "desc") {
    return [...peserta].sort((a, b) => {
        const selisih = a.getRataRata() - b.getRataRata();
        return urutan === "asc"
            ? selisih
            : -selisih;
    });
}
// LANGKAH 5 — Implementasi
const saida = new PesertaMagang("Saidatul Kholidiya", "saida@mail.com", "SMKN 6 Malang", 1);
saida.tambahNilai(90);
saida.tambahNilai(95);
const ajeng = new PesertaMagang("Ajeng Nielza Itsna Mufida", "ajeng@mail.com", "SMKN 6 Malang", 1);
ajeng.tambahNilai(88);
ajeng.tambahNilai(92);
const laela = new PesertaMagang("Laela Nurul Hidayah", "laela@mail.com", "SMKN 5 Malang", 1);
laela.tambahNilai(85);
laela.tambahNilai(90);
const semuaPeserta = [
    saida,
    ajeng,
    laela
];
const terurut = urutkanBerdasarkanNilai(semuaPeserta, "desc");
console.log("=== Data Peserta Magang ===");
terurut.forEach((peserta) => {
    console.log(`${peserta.info()} - Rata-rata: ${peserta.getRataRata()}`);
});
const response = buatResponse(terurut, "Data peserta berhasil dimuat");
console.log("\n=== Response API ===");
console.log(response);
export {};
//# sourceMappingURL=integrasi-minggu3.js.map