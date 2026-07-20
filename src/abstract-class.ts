// ─── SOAL 1 : Abstract Class Notifikasi ────────────────────────────────────

abstract class Notifikasi {
  constructor(
    protected pesan: string
  ) {}

  abstract kirim(): string;

  log(): void {
    console.log("[LOG] Notifikasi dikirim");
  }
}

class NotifikasiEmail extends Notifikasi {
  kirim(): string {
    return `Email terkirim: ${this.pesan}`;
  }
}

class NotifikasiWhatsApp extends Notifikasi {
  kirim(): string {
    return `WhatsApp terkirim: ${this.pesan}`;
  }
}

class NotifikasiPush extends Notifikasi {
  kirim(): string {
    return `Push notification terkirim: ${this.pesan}`;
  }
}

const email = new NotifikasiEmail(
  "Laporan magang telah dikirim"
);

console.log(email.kirim());
email.log();

const whatsapp = new NotifikasiWhatsApp(
  "Meeting dimulai pukul 09.00"
);

console.log(whatsapp.kirim());
whatsapp.log();

const push = new NotifikasiPush(
  "Ada tugas baru"
);

console.log(push.kirim());
push.log();


// ─── SOAL 2 : Abstract Class Bentuk Geometri ────────────────────────────────────

abstract class BentukGeometri {
  abstract hitungLuas(): number;

  abstract hitungKeliling(): number;

  deskripsi(): string {
    return `Luas: ${this.hitungLuas()}, Keliling: ${this.hitungKeliling()}`;
  }
}

class Lingkaran extends BentukGeometri {
  constructor(
    private jariJari: number
  ) {
    super();
  }

  hitungLuas(): number {
    return Math.PI * this.jariJari * this.jariJari;
  }

  hitungKeliling(): number {
    return 2 * Math.PI * this.jariJari;
  }
}

class Persegi extends BentukGeometri {
  constructor(
    private sisi: number
  ) {
    super();
  }

  hitungLuas(): number {
    return this.sisi * this.sisi;
  }

  hitungKeliling(): number {
    return 4 * this.sisi;
  }
}

class Segitiga extends BentukGeometri {
  constructor(
    private alas: number,
    private tinggi: number,
    private sisiA: number,
    private sisiB: number,
    private sisiC: number
  ) {
    super();
  }

  hitungLuas(): number {
    return (this.alas * this.tinggi) / 2;
  }

  hitungKeliling(): number {
    return (
      this.sisiA +
      this.sisiB +
      this.sisiC
    );
  }
}

const lingkaran = new Lingkaran(7);
console.log(lingkaran.deskripsi());

const persegi = new Persegi(8);
console.log(persegi.deskripsi());

const segitiga = new Segitiga(
  10,
  8,
  10,
  8,
  9
);

console.log(segitiga.deskripsi());

// ─── SOAL 3 : Abstract Class Tugas Magang ────────────────────────────────────

abstract class TugasMagang {
  constructor(
    protected judul: string,
    protected deadline: string
  ) {}

  abstract statusPengerjaan(): string;

  info(): string {
    return `${this.judul} - Deadline: ${this.deadline}`;
  }
}

class TugasHarian extends TugasMagang {
  statusPengerjaan(): string {
    const sekarang = new Date();
    const deadline = new Date(this.deadline);

    const selisihHari =
      (sekarang.getTime() - deadline.getTime()) /
      (1000 * 60 * 60 * 24);

    if (selisihHari > 1) {
      return "Terlambat";
    }

    return "Masih dalam batas waktu";
  }
}

class TugasMingguan extends TugasMagang {
  statusPengerjaan(): string {
    const sekarang = new Date();
    const deadline = new Date(this.deadline);

    const selisihHari =
      (sekarang.getTime() - deadline.getTime()) /
      (1000 * 60 * 60 * 24);

    if (selisihHari > 7) {
      return "Terlambat";
    }

    return "Masih dalam batas waktu";
  }
}

const tugasHarian = new TugasHarian(
  "Membuat Landing Page",
  "2026-07-22"
);

console.log(tugasHarian.info());
console.log(tugasHarian.statusPengerjaan());

const tugasMingguan = new TugasMingguan(
  "Menyelesaikan Studi Kasus TypeScript",
  "2026-07-27"
);

console.log(tugasMingguan.info());
console.log(tugasMingguan.statusPengerjaan());