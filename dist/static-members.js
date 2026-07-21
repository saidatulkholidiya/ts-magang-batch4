// ─── SOAL 1 : Static Property & Method ────────────────────────────────────
class SprintTask {
    constructor(namaTask) {
        this.namaTask = namaTask;
        SprintTask.totalTask++;
    }
    static getTotalTask() {
        return SprintTask.totalTask;
    }
}
SprintTask.totalTask = 0;
const task1 = new SprintTask("Membuat Landing Page");
const task2 = new SprintTask("Membuat Dashboard");
const task3 = new SprintTask("Membuat Form Login");
const task4 = new SprintTask("Membuat API");
const task5 = new SprintTask("Testing");
console.log("Total Task:", SprintTask.getTotalTask());
// ─── SOAL 2 : Static Readonly ────────────────────────────────────
class AppConfig {
    static getInfo() {
        return `
APP NAME     : ${AppConfig.APP_NAME}
VERSION      : ${AppConfig.VERSION}
MAX PESERTA  : ${AppConfig.MAX_PESERTA}
`;
    }
}
AppConfig.APP_NAME = "SiTrack";
AppConfig.VERSION = "1.0.0";
AppConfig.MAX_PESERTA = 4;
console.log(AppConfig.getInfo());
// ─── SOAL 3 : Static Factory ────────────────────────────────────
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }
    static buat(nilai) {
        if (nilai < 0 || nilai > 100) {
            console.log("Nilai tidak valid!");
            return null;
        }
        return new Nilai(nilai);
    }
    getNilai() {
        return this.nilai;
    }
}
const nilai1 = Nilai.buat(90);
const nilai2 = Nilai.buat(120);
if (nilai1) {
    console.log("Nilai:", nilai1.getNilai());
}
console.log(nilai2);
// ─── SOAL 4 : Static Utility ────────────────────────────────────
class StringHelper {
    static capitalize(str) {
        return (str.charAt(0).toUpperCase() +
            str.slice(1));
    }
    static slugify(str) {
        return str
            .toLowerCase()
            .replace(/ /g, "-");
    }
    static truncate(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        }
        return (str.slice(0, maxLength) +
            "...");
    }
}
console.log(StringHelper.capitalize("saidatul kholidiya"));
console.log(StringHelper.slugify("Belajar TypeScript Dasar"));
console.log(StringHelper.truncate("Mempelajari Static Properties & Methods pada TypeScript", 20));
export {};
//# sourceMappingURL=static-members.js.map