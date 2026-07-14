// ─── SOAL 1 : FUNCTION OVERLOADING ────────────────────────────

// Interface Peserta
interface Peserta {
  id: number;
  nama: string;
  nilai: number;
}

// Data Peserta
const daftarPeserta: Peserta[] = [
  {
    id: 1,
    nama: "Budi",
    nilai: 75
  },
  {
    id: 2,
    nama: "Ajeng",
    nilai: 90
  },
  {
    id: 3,
    nama: "Saidatul",
    nilai: 95
  },
  {
    id: 4,
    nama: "Dedi",
    nilai: 80
  }
];

// Overloading
function cariPeserta(id: number): Peserta | undefined;
function cariPeserta(nama: string): Peserta | undefined;

function cariPeserta(
  keyword: number | string
): Peserta | undefined {

  if (typeof keyword === "number") {
    return daftarPeserta.find((peserta) => peserta.id === keyword);
  }

  return daftarPeserta.find(
    (peserta) => peserta.nama === keyword
  );
}

// Output
console.log("=== PENCARIAN BERDASARKAN ID ===");
console.log(cariPeserta(2));

console.log("\n=== PENCARIAN BERDASARKAN NAMA ===");
console.log(cariPeserta("Ajeng"));


// ─── SOAL 2 : REST PARAMETERS ─────────────────────────────────

function hitungRataRata(
  ...nilai: number[]
): number {

  const total = nilai.reduce(
    (hasil, n) => hasil + n,
    0
  );

  return total / nilai.length;
}

// Output
console.log("\n=== HITUNG RATA-RATA ===");
console.log("Rata-rata 1 :", hitungRataRata(80, 85, 90));
console.log("Rata-rata 2 :", hitungRataRata(75, 80, 85, 90));


// ─── SOAL 3 : CALLBACK FUNCTION ───────────────────────────────

function urutkanPeserta(
  peserta: Peserta[],
  comparator: (a: Peserta, b: Peserta) => number
): Peserta[] {
  return [...peserta].sort(comparator);
}

// Urut berdasarkan nilai ascending (paling kecil ke besar)
const ascending = urutkanPeserta(
  daftarPeserta,
  (a, b) => a.nilai - b.nilai
);

// Urut berdasarkan nilai descending (paling besar ke kecil)
const descending = urutkanPeserta(
  daftarPeserta,
  (a, b) => b.nilai - a.nilai
);

// Output
console.log("\n=== ASCENDING ===");
console.log(ascending);

console.log("\n=== DESCENDING ===");
console.log(descending);


// ─── SOAL 4 : HIGHER-ORDER FUNCTION ───────────────────────────

// Function
function buatFilterNilai(
  minimal: number
): (peserta: Peserta) => boolean {

  return function (peserta: Peserta): boolean {
    return peserta.nilai >= minimal;
  };
}

// Menggunakan array.filter()
const pesertaLulus = daftarPeserta.filter(
  buatFilterNilai(85)
);

// Output
console.log("\n=== FILTER NILAI ===");
console.log("Peserta dengan nilai >= 85");
console.log(pesertaLulus);
