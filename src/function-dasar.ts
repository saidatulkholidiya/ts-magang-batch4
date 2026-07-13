// ─── SOAL 1 : HITUNG NILAI AKHIR ──────────────────────────────

function hitungNilaiAkhir(
  tugas: number,
  uts: number,
  uas: number
): number {
  return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

const nilaiAkhir = hitungNilaiAkhir(90, 85, 95);

console.log("=== NILAI AKHIR ===");
console.log("Nilai Akhir :", nilaiAkhir);


// ─── SOAL 2 : PENGUMUMAN ──────────────────────────────────────

function buatPengumuman(
  judul: string,
  isi?: string,
  penting: boolean = false
): string {

  let hasil = penting ? `[PENTING] ${judul}` : judul;

  if (isi) {
    hasil += `: ${isi}`;
  }

  return hasil;
}

console.log("\n=== PENGUMUMAN ===");
console.log(
  buatPengumuman(
    "Jadwal Magang",
    "Besok masuk pukul 08.00",
    true
  )
);

console.log(
  buatPengumuman(
    "Libur Nasional"
  )
);


// ─── SOAL 3 : LOG CHECK-IN ────────────────────────────────────

function logCheckIn(
  nama: string,
  waktu: string
): void {
  console.log(`[CHECK-IN] ${nama} - ${waktu}`);
}

console.log("\n=== CHECK-IN PESERTA ===");

logCheckIn(
  "Saidatul Kholidiya",
  "08.00"
);

logCheckIn(
  "Laela Nurul Hidayah",
  "08.05"
);

logCheckIn(
  "Muhammad Rizky",
  "08.10"
);


// ─── SOAL 4 : FORMAT DURASI ───────────────────────────────────

function formatDurasi(
  menit: number,
  tampilkanDetik: boolean = false
): string {

  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;

  let hasil = `${jam} jam ${sisaMenit} menit`;

  if (tampilkanDetik) {
    hasil += " 0 detik";
  }

  return hasil;
}

console.log("\n=== FORMAT DURASI ===");
console.log(formatDurasi(150));
console.log(formatDurasi(150, true));