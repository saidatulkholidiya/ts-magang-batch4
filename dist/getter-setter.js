// ─── SOAL 1 : Getter & Setter ────────────────────────────────────
class Akun {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(nilai) {
        if (nilai < 0) {
            console.log("Saldo tidak boleh negatif!");
            return;
        }
        this._saldo = nilai;
    }
    tambahSaldo(jumlah) {
        this._saldo += jumlah;
    }
    tarikSaldo(jumlah) {
        if (jumlah > this._saldo) {
            return false;
        }
        this._saldo -= jumlah;
        return true;
    }
}
const akun = new Akun(100000);
console.log(akun.saldo);
akun.tambahSaldo(50000);
console.log(akun.saldo);
console.log(akun.tarikSaldo(25000));
console.log(akun.saldo);
akun.saldo = -1000;
// ─── SOAL 2 : Getter ────────────────────────────────────
class PesertaMagang {
    constructor() {
        this.nilaiList = [];
    }
    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }
    get rataRata() {
        if (this.nilaiList.length === 0) {
            return 0;
        }
        return (this.nilaiList.reduce((a, b) => a + b, 0) / this.nilaiList.length);
    }
    get nilaiTertinggi() {
        if (this.nilaiList.length === 0) {
            return 0;
        }
        return Math.max(...this.nilaiList);
    }
    get grade() {
        if (this.rataRata >= 90) {
            return "A";
        }
        if (this.rataRata >= 75) {
            return "B";
        }
        if (this.rataRata >= 60) {
            return "C";
        }
        return "D";
    }
}
const peserta = new PesertaMagang();
peserta.tambahNilai(90);
peserta.tambahNilai(85);
peserta.tambahNilai(95);
console.log(peserta.rataRata);
console.log(peserta.nilaiTertinggi);
console.log(peserta.grade);
// ─── SOAL 3 : Getter & Setter Password ────────────────────────────────────
class Password {
    constructor() {
        this._value = "";
    }
    set value(input) {
        if (input.length < 8) {
            throw new Error("Password minimal 8 karakter");
        }
        const adaAngka = /\d/.test(input);
        if (!adaAngka) {
            throw new Error("Password harus mengandung angka");
        }
        this._value = input;
    }
    get value() {
        return "********";
    }
    verifikasi(input) {
        return input === this._value;
    }
}
const password = new Password();
try {
    password.value = "admin123";
    console.log(password.value);
    console.log(password.verifikasi("admin123"));
    console.log(password.verifikasi("admin321"));
}
catch (error) {
    console.log(error.message);
}
export {};
//# sourceMappingURL=getter-setter.js.map