const namaSaya: string = "saidatul kholidiya"; 
const asalSekolah: string = "SMK Negeri 6 Malang"; 
const kabupaten: string = "Malang";
const sudahBelajarJavaScript: boolean = true; 
const targetSelesaiMagang: number = 2026; 

function perkenalan(
  nama: string,
  sekolah: string,
  sudahJS: boolean
): string {
  const statusJS = sudahJS ? "sudah" : "belum";
  return `Nama saya ${nama} dari ${sekolah}. Saya ${statusJS} belajar JavaScript sebelumnya.`;
}

console.log(perkenalan(namaSaya, asalSekolah, sudahBelajarJavaScript));