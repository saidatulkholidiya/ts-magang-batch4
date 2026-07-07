// ─── SOAL 1 : TYPE ALIAS ─────────────────────────────────────

// Type Alias Union
type FaseProgram =
  | "Fase 1"
  | "Fase 2"
  | "Fase 3"
  | "Fase 4"
  | "Fase 5";

// Type Alias Primitif
type NilaiAspek = number;

// Type Alias Object
type HasilPenilaian = {
  kehadiran: NilaiAspek;
  materi: NilaiAspek;
  kode: NilaiAspek;
  problemSolving: NilaiAspek;
  komunikasi: NilaiAspek;
};

const hasilPenilaian: HasilPenilaian = {
  kehadiran: 10,
  materi: 9,
  kode: 8,
  problemSolving: 9,
  komunikasi: 10
};

const fase: FaseProgram = "Fase 1";

console.log("=== HASIL PENILAIAN ===");

console.log("Fase              :", fase);
console.log("Kehadiran         :", hasilPenilaian.kehadiran);
console.log("Materi            :", hasilPenilaian.materi);
console.log("Kode              :", hasilPenilaian.kode);
console.log("Problem Solving   :", hasilPenilaian.problemSolving);
console.log("Komunikasi        :", hasilPenilaian.komunikasi);


// ─── SOAL 2 : INTERFACE EXTENDS ──────────────────────────────

interface Absensi {
  tanggal: string;
  checkIn: string;
  checkOut: string;
}

interface JurnalHarian extends Absensi {
  kegiatan: string;
  hambatan: string;
  rencanaBesok: string;
  linkCommit?: string;
}

const jurnal1: JurnalHarian = {
  tanggal: "15 Juli 2026",
  checkIn: "08.00",
  checkOut: "17.00",
  kegiatan: "Mempelajari Type Alias dan Interface",
  hambatan: "Masih memahami penggunaan Type Alias.",
  rencanaBesok: "Mengerjakan latihan berikutnya.",
  linkCommit: "https://github.com/saidatulkholidiya/ts-magang-batch4"
};

const jurnal2: JurnalHarian = {
  tanggal: "16 Juli 2026",
  checkIn: "08.00",
  checkOut: "17.00",
  kegiatan: "Mempelajari Interface Extend",
  hambatan: "Masih memahami penggunaan extends.",
  rencanaBesok: "Review kembali materi."
};

console.log("\n=== JURNAL HARIAN ===");

console.log("Tanggal           :", jurnal1.tanggal);
console.log("Check In          :", jurnal1.checkIn);
console.log("Check Out         :", jurnal1.checkOut);
console.log("Kegiatan          :", jurnal1.kegiatan);
console.log("Hambatan          :", jurnal1.hambatan);
console.log("Rencana Besok     :", jurnal1.rencanaBesok);
console.log("Link Commit       :", jurnal1.linkCommit);

console.log("------------------------------------");

console.log("Tanggal           :", jurnal2.tanggal);
console.log("Check In          :", jurnal2.checkIn);
console.log("Check Out         :", jurnal2.checkOut);
console.log("Kegiatan          :", jurnal2.kegiatan);
console.log("Hambatan          :", jurnal2.hambatan);
console.log("Rencana Besok     :", jurnal2.rencanaBesok);
console.log("Link Commit       :", jurnal2.linkCommit);


// ─── SOAL 3 : TYPE ALIAS + INTERFACE ─────────────────────────

// Type Alias Union
type PesertaStatus = "aktif" | "lulus" | "berhenti";

interface Peserta {
  id: number;
  nama: string;
  sekolah: string;
  fase: number;
  status: PesertaStatus;
}

const peserta1: Peserta = {
  id: 1,
  nama: "Saidatul Kholidiya",
  sekolah: "SMK Negeri 6 Malang",
  fase: 1,
  status: "aktif"
};

const peserta2: Peserta = {
  id: 2,
  nama: "Laela Nurul Hidayah",
  sekolah: "SMK Negeri 5 Malang",
  fase: 5,
  status: "lulus"
};

const peserta3: Peserta = {
  id: 3,
  nama: "Andi Saputra",
  sekolah: "SMK Negeri 4 Malang",
  fase: 1,
  status: "berhenti"
};

// Function Filter Peserta
function filterPeserta(
  list: Peserta[],
  status: PesertaStatus
): Peserta[] {
  return list.filter((peserta) => peserta.status === status);
}

const daftarPeserta: Peserta[] = [
  peserta1,
  peserta2,
  peserta3
];

// Menampilkan Peserta Aktif
console.log("\n=== PESERTA AKTIF ===");

filterPeserta(daftarPeserta, "aktif").forEach((peserta) => {
  console.log("ID              :", peserta.id);
  console.log("Nama            :", peserta.nama);
  console.log("Sekolah         :", peserta.sekolah);
  console.log("Fase            :", peserta.fase);
  console.log("Status          :", peserta.status);
  console.log("--------------------------------");
});

// Menampilkan Peserta Lulus
console.log("\n=== PESERTA LULUS ===");

filterPeserta(daftarPeserta, "lulus").forEach((peserta) => {
  console.log("ID              :", peserta.id);
  console.log("Nama            :", peserta.nama);
  console.log("Sekolah         :", peserta.sekolah);
  console.log("Fase            :", peserta.fase);
  console.log("Status          :", peserta.status);
  console.log("--------------------------------");
});

// Menampilkan Peserta Berhenti
console.log("\n=== PESERTA BERHENTI ===");

filterPeserta(daftarPeserta, "berhenti").forEach((peserta) => {
  console.log("ID              :", peserta.id);
  console.log("Nama            :", peserta.nama);
  console.log("Sekolah         :", peserta.sekolah);
  console.log("Fase            :", peserta.fase);
  console.log("Status          :", peserta.status);
  console.log("--------------------------------");
});