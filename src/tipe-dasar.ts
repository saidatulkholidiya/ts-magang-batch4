// ─── 1. TIPE PRIMITIF ────────────────────────────────────────────
let namaLengkap: string = "saidatul kholidiya";
let usia: number = 18;
let aktif: boolean = true;

// Type inference — TypeScript bisa tebak sendiri
let kota = "Malang";      // TypeScript tahu ini string
let nilai = 95.5;          // TypeScript tahu ini number

// Coba uncomment baris di bawah dan lihat error-nya:
// kota = 100;   // Error: Type 'number' is not assignable to type 'string'


// ─── 2. ANY vs UNKNOWN ───────────────────────────────────────────
let dataAny: any = "hello";
dataAny = 17;           // OK — any mematikan semua pengecekan
dataAny = true;         // OK — tapi berbahaya!

let dataUnknown: unknown = "test";
// dataUnknown.toUpperCase(); // Error! Harus cek tipe dulu

if (typeof dataUnknown === "string") {
  console.log(dataUnknown.toUpperCase()); // OK — sudah dicek
}


// ─── 3. ARRAY ────────────────────────────────────────────────────
let nilaiUjian: number[] = [85, 92, 78, 90, 88];
let namaKelas: Array<string> = ["Siti", "Bob", "Charlie"];

// Array methods — TypeScript tahu tipenya
const nilaiTertinggi = Math.max(...nilaiUjian);  // number
const semualulus = nilaiUjian.every(n => n >= 75); // boolean
const nilaiGanda = nilaiUjian.map(n => n * 2);     // number[]

console.log("Nilai tertinggi:", nilaiTertinggi);
console.log("Semua lulus?", semualulus);


// ─── 4. ENUM ─────────────────────────────────────────────────────
// String enum — lebih disarankan karena nilainya jelas saat di-debug
enum StatusMagang {
  Aktif     = "AKTIF",
  Selesai   = "SELESAI",
  Berhenti  = "BERHENTI"
}

let statusSaida: StatusMagang = StatusMagang.Aktif;
console.log("Status Saida:", statusSaida); // "AKTIF"

function cekStatus(status: StatusMagang): string {
  if (status === StatusMagang.Aktif) return "Sedang berjalan";
  if (status === StatusMagang.Selesai) return "Sudah selesai";
  return "Berhenti di tengah jalan";
}

console.log(cekStatus(StatusMagang.Selesai));


// ─── 5. UNION TYPES ──────────────────────────────────────────────
// Variabel bisa berisi lebih dari satu tipe
type ID = string | number;

let userId: ID = "USR-007";
userId = 17;  // OK — karena ID bisa string atau number

function formatID(id: ID): string {
  if (typeof id === "string") {
    return id.toUpperCase();   // TypeScript tahu id adalah string di sini
  }
  return `ID-${id}`;           // TypeScript tahu id adalah number di sini
}

console.log(formatID("usr-007")); // "USR-007"
console.log(formatID(17));        // "ID-17"