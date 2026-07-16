// SOAL 2
// Generic Function
function getLast(arr) {
    return arr[arr.length - 1];
}
console.log(getLast([
    10,
    20,
    30
]));
console.log(getLast([
    "HTML",
    "CSS",
    "TypeScript"
]));
// Response 1 peserta
const responPeserta = {
    success: true,
    data: {
        nama: "Saidatul Kholidiya",
        sekolah: "SMKN 6 Malang",
        nilai: 95
    },
    message: "Data peserta berhasil diambil"
};
// Response list peserta
const responListPeserta = {
    success: true,
    data: [
        {
            nama: "Saidatul Kholidiya",
            sekolah: "SMKN 6 Malang",
            nilai: 95
        },
        {
            nama: "Ajeng Nielza Itsna Mufida",
            sekolah: "SMKN 6 Malang",
            nilai: 90
        },
        {
            nama: "Laela Nurul Hidayah",
            sekolah: "SMKN 5 Malang",
            nilai: 85
        }
    ],
    message: "Daftar peserta berhasil diambil"
};
console.log(responPeserta);
console.log(responListPeserta);
export {};
//# sourceMappingURL=modules-generics.js.map