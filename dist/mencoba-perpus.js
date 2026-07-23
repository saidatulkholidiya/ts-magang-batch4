// ===============================
// TYPE ALIAS
// ===============================
// ===============================
// OBJECT
// ===============================
const buku1 = {
    id: 1,
    judul: "Belajar TypeScript",
    penulis: "John Doe",
    kategori: "referensi",
    tahunTerbit: 2022,
    status: "tersedia",
};
const buku2 = {
    id: 2,
    judul: "Laravel 11",
    penulis: "Taylor Otwell",
    kategori: "referensi",
    tahunTerbit: 2024,
    status: "dipinjam",
};
const buku3 = {
    id: 3,
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    kategori: "fiksi",
    tahunTerbit: 2005,
    status: "tersedia",
};
const anggota1 = {
    id: 1,
    nama: "Jane Smith",
    alamat: "Jl. Merdeka",
    tanggalLahir: new Date("2000-01-01"),
    statusKeanggotaan: "aktif",
};
const anggota2 = {
    id: 2,
    nama: "Budi Santoso",
    alamat: "Jl. Sudirman",
    tanggalLahir: new Date("1999-03-12"),
    statusKeanggotaan: "aktif",
};
// ===============================
// CLASS
// ===============================
class Perpustakaan {
    // Constructor
    constructor(nama) {
        this.daftarBuku = [];
        this.daftarAnggota = [];
        this.namaPerpustakaan = nama;
    }
    tambahBuku(buku) {
        this.daftarBuku.push(buku);
    }
    tambahAnggota(anggota) {
        this.daftarAnggota.push(anggota);
    }
    tampilkanSemuaBuku() {
        console.log(`\n=== ${this.namaPerpustakaan} ===`);
        this.daftarBuku.forEach((buku) => {
            console.log(`${buku.id}. ${buku.judul} - ${buku.penulis} (${buku.status})`);
        });
    }
    cariBuku(judul) {
        return this.daftarBuku.find((buku) => buku.judul.toLowerCase() === judul.toLowerCase());
    }
}
// ===============================
// INHERITANCE
// ===============================
class Person {
    constructor(nama) {
        this.nama = nama;
    }
    introduce() {
        console.log(`Halo, saya ${this.nama}.`);
    }
}
class UserPerpus extends Person {
    constructor(nama, role) {
        super(nama);
        this.role = role;
    }
    introduce() {
        super.introduce();
        console.log(`Role saya adalah ${this.role}.`);
    }
}
class Admin extends UserPerpus {
    constructor(nama) {
        super(nama, "admin");
    }
    introduce() {
        super.introduce();
        console.log("Saya bertugas mengelola perpustakaan.");
    }
}
// ===============================
// MENJALANKAN PROGRAM
// ===============================
const perpus = new Perpustakaan("Perpustakaan Kota");
perpus.tambahBuku(buku1);
perpus.tambahBuku(buku2);
perpus.tambahBuku(buku3);
perpus.tambahAnggota(anggota1);
perpus.tambahAnggota(anggota2);
perpus.tampilkanSemuaBuku();
console.log("\n=== Cari Buku ===");
const hasil = perpus.cariBuku("Belajar TypeScript");
if (hasil) {
    console.log("Buku ditemukan:");
    console.log(hasil);
}
else {
    console.log("Buku tidak ditemukan.");
}
console.log("\n=== Inheritance ===");
const admin = new Admin("Saida");
admin.introduce();
export {};
//# sourceMappingURL=mencoba-perpus.js.map