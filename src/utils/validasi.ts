// Validasi Nama
export function isNamaValid(
  nama: string
): boolean {
  return nama.length >= 3;
}

// Validasi Nilai
export function isNilaiValid(
  nilai: number
): boolean {
  return nilai >= 0 && nilai <= 100;
}