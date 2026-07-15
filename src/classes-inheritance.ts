// ─── SOAL 1 : CLASS DASAR ────────────────────────────────────

// Class Mentor
class Mentor {
  constructor(
    public nama: string,
    public keahlian: string[]
  ) {}

  tambahKeahlian(skill: string): void {
    this.keahlian.push(skill);
  }

  getInfo(): string {
    return `${this.nama} - keahlian: ${this.keahlian.join(", ")}`;
  }
}

// Object
const mentor = new Mentor(
  "Pak Andi",
  ["HTML", "CSS", "JavaScript"]
);

mentor.tambahKeahlian("TypeScript");

// Output
console.log("=== MENTOR ===");
console.log(mentor.getInfo());


// ─── SOAL 2 : ACCESS MODIFIERS ────────────────────────────────

class Nilai {
  private list: number[] = [];

  tambah(n: number): void {
    this.list.push(n);
  }

  rataRata(): number {
    if (this.list.length === 0) {
      return 0;
    }

    const total = this.list.reduce(
      (hasil, nilai) => hasil + nilai,
      0
    );

    return total / this.list.length;
  }

  tertinggi(): number {
    if (this.list.length === 0) {
      return 0;
    }

    return Math.max(...this.list);
  }
}

// Object
const nilai = new Nilai();

nilai.tambah(88);
nilai.tambah(89);
nilai.tambah(96);

// Output
console.log("\n=== NILAI ===");
console.log("Rata-rata :", nilai.rataRata());
console.log("Tertinggi :", nilai.tertinggi());

// Property private tidak bisa diakses langsung
// console.log(nilai.list); // Error


// ─── SOAL 3 : INHERITANCE ────────────────────────────────────

// Parent Class
class Kegiatan {
  constructor(
    public nama: string,
    public tanggal: string
  ) {}

  deskripsi(): string {
    return `${this.nama} pada ${this.tanggal}`;
  }
}

// Child Class
class JurnalHarian extends Kegiatan {
  constructor(
    nama: string,
    tanggal: string,
    public hambatan: string
  ) {
    super(nama, tanggal);
  }

  deskripsi(): string {
    return `${super.deskripsi()} - Hambatan: ${this.hambatan}`;
  }
}

// Child Class
class SprintTask extends Kegiatan {
  constructor(
    nama: string,
    tanggal: string,
    public prioritas: ("low" | "medium" | "high")
  ) {
    super(nama, tanggal);
  }

  deskripsi(): string {
    return `${super.deskripsi()} - Prioritas: ${this.prioritas}`;
  }
}

// Object
const kegiatan = new Kegiatan(
  "Belajar TypeScript",
  "15 Juli 2026"
);

const jurnal = new JurnalHarian(
  "Mengerjakan latihan",
  "15 Juli 2026",
  "Masih bingung memahami inheritance"
);

const sprint = new SprintTask(
  "Menyelesaikan Soal Latihan",
  "15 Juli 2026",
  "high"
);

// Output
console.log("\n=== KEGIATAN ===");
console.log(kegiatan.deskripsi());

console.log("\n=== JURNAL HARIAN ===");
console.log(jurnal.deskripsi());

console.log("\n=== SPRINT TASK ===");
console.log(sprint.deskripsi());