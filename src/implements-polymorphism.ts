// ─── SOAL 1 : Interface ────────────────────────────────────
interface BisaDinilai {
    hitungNilai(): number;
}

interface BisaDilaporkan {
    buatLaporan(): string;
}

interface DapatDiverifikasi {
    isValid(): boolean;
}

class TugasHarian implements BisaDinilai, BisaDilaporkan {
    constructor(
        public nama: string,
        public nilai: number
    ) {}

    hitungNilai(): number {
        // Implementasi hitungNilai
        return this.nilai;
    }

    buatLaporan(): string {
        return "Laporan tugas harian";
    }
}

console.log("=== TUGAS HARIAN ===");
const tugasHarian = new TugasHarian("Tugas 1", 85);
console.log("Nama:", tugasHarian.nama);
console.log("Nilai:", tugasHarian.hitungNilai());
console.log("Laporan:", tugasHarian.buatLaporan());

// ─── SOAL 2 : Abstract Class ────────────────────────────────────
abstract class NotifikasiDasar implements DapatDiverifikasi {
    abstract kirim(): string;

    abstract isValid(): boolean;
}

class NotifikasiUrgent extends NotifikasiDasar {
    kirim(): string {
        return "Notifikasi urgent terkirim";
    }
    
    isValid(): boolean {
        // Implementasi isValid khusus untuk NotifikasiUrgent
        return true;
    }}

class NotifikasiBiasa extends NotifikasiDasar {
    kirim(): string {
        return "Notifikasi biasa terkirim";
    }
    
    isValid(): boolean {
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

// ─── SOAL 3 : Polymorphism ────────────────────────────────────
abstract class Laporan {
    abstract generate(): string;
}

class LaporanHarian extends Laporan {
    generate(): string {
        return "Laporan harian dihasilkan";
    }
}

class LaporanMingguan extends Laporan {
    generate(): string {
        return "Laporan mingguan dihasilkan";
    }

}
class LaporanBulanan extends Laporan {
    generate(): string {
        return "Laporan bulanan dihasilkan";
    }   
}

const laporanList: Laporan[] = [
    new LaporanHarian(),
    new LaporanMingguan(),
    new LaporanBulanan()
];

console.log("=== LAPORAN ===");
laporanList.forEach((laporan) => {
    console.log(laporan.generate());
});