// LANGKAH 1 — Base class
class Pengguna {
  constructor(
    public nama: string,
    public email: string,
    protected createdAt: string = new Date().toISOString()
  ) {}

  info(): string {
    return `${this.nama} (${this.email})`;
  }
}

// LANGKAH 2 — Inheritance
class PesertaMagang extends Pengguna {
  private nilaiList: number[] = [];

  constructor(
    nama: string,
    email: string,
    public sekolah: string,
    public fase: number = 1
  ) {
    super(nama, email);
  }

  tambahNilai(nilai: number): void {
    this.nilaiList.push(nilai);
  }

  getRataRata(): number {
    if (this.nilaiList.length === 0) {
      return 0;
    }

    return (
      this.nilaiList.reduce(
        (total, nilai) => total + nilai,
        0
      ) / this.nilaiList.length
    );
  }

  override info(): string {
    return `${super.info()} - ${this.sekolah}, Fase ${this.fase}`;
  }
}

// LANGKAH 3 — Generic wrapper untuk response
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

function buatResponse<T>(
  data: T,
  message: string = "OK"
): ApiResponse<T> {
  return {
    success: true,
    data,
    message
  };
}

// LANGKAH 4 — Higher order function untuk filter & sort
function urutkanBerdasarkanNilai(
  peserta: PesertaMagang[],
  urutan: "asc" | "desc" = "desc"
): PesertaMagang[] {
  return [...peserta].sort((a, b) => {
    const selisih =
      a.getRataRata() - b.getRataRata();

    return urutan === "asc"
      ? selisih
      : -selisih;
  });
}

// LANGKAH 5 — Implementasi
const saida = new PesertaMagang(
  "Saidatul Kholidiya",
  "saida@mail.com",
  "SMKN 6 Malang",
  1
);

saida.tambahNilai(90);
saida.tambahNilai(95);

const ajeng = new PesertaMagang(
  "Ajeng Nielza Itsna Mufida",
  "ajeng@mail.com",
  "SMKN 6 Malang",
  1
);

ajeng.tambahNilai(88);
ajeng.tambahNilai(92);

const laela = new PesertaMagang(
  "Laela Nurul Hidayah",
  "laela@mail.com",
  "SMKN 5 Malang",
  1
);

laela.tambahNilai(85);
laela.tambahNilai(90);

const semuaPeserta: PesertaMagang[] = [
  saida,
  ajeng,
  laela
];

const terurut = urutkanBerdasarkanNilai(
  semuaPeserta,
  "desc"
);

console.log("=== Data Peserta Magang ===");

terurut.forEach((peserta) => {
  console.log(
    `${peserta.info()} - Rata-rata: ${peserta.getRataRata()}`
  );
});

const response = buatResponse(
  terurut,
  "Data peserta berhasil dimuat"
);

console.log("\n=== Response API ===");
console.log(response);