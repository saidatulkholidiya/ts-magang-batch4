// ─── SOAL 1 : DISCRIMINATED UNION PEMBAYARAN ───────────────────

// Type Payment Status
type PaymentStatus =
  | {
      status: "menunggu";
      expiredAt: string;
    }
  | {
      status: "berhasil";
      transactionId: string;
      paidAt: string;
    }
  | {
      status: "gagal";
      reason: string;
      canRetry: boolean;
    }
  | {
      status: "refund";
      amount: number;
      processedAt: string;
    };

// Function
function getStatusLabel(payment: PaymentStatus): string {
  switch (payment.status) {
    case "menunggu":
      return `Menunggu pembayaran sampai ${payment.expiredAt}`;

    case "berhasil":
      return `Pembayaran berhasil\nID Transaksi : ${payment.transactionId}\nTanggal Bayar : ${payment.paidAt}`;

    case "gagal":
      return `Pembayaran gagal\nAlasan : ${payment.reason}\nBisa Coba Lagi : ${payment.canRetry ? "Ya" : "Tidak"}`;
    case "refund":
      return `Refund sebesar Rp ${payment.amount}\nDiproses pada ${payment.processedAt}`;
  }
}

// Object
const payment1: PaymentStatus = {
  status: "menunggu",
  expiredAt: "10 Juli 2026"
};

const payment2: PaymentStatus = {
  status: "berhasil",
  transactionId: "TRX001",
  paidAt: "09 Juli 2026"
};

const payment3: PaymentStatus = {
  status: "gagal",
  reason: "Saldo tidak cukup",
  canRetry: true
};

const payment4: PaymentStatus = {
  status: "refund",
  amount: 50000,
  processedAt: "11 Juli 2026"
};

// Output
console.log("=== STATUS PEMBAYARAN ===");
console.log(getStatusLabel(payment1));
console.log("--------------------------");
console.log(getStatusLabel(payment2));
console.log("--------------------------");
console.log(getStatusLabel(payment3));
console.log("--------------------------");
console.log(getStatusLabel(payment4));


// ─── SOAL 2 : DISCRIMINATED UNION NOTIFIKASI ───────────────────

type AppNotification =
  | {
      type: "info";
      message: string;
    }
  | {
      type: "warning";
      message: string;
      action: string;
    }
  | {
      type: "error";
      message: string;
      code: number;
      canDismiss: boolean;
    }
  | {
      type: "success";
      message: string;
      duration: number;
    };

// Function
function showNotification(notif: AppNotification): void {
  switch (notif.type) {
    case "info":
      console.log(`INFO : ${notif.message}`);
      break;

    case "warning":
      console.log(`WARNING : ${notif.message}`);
      console.log(`Action  : ${notif.action}`);
      break;

    case "error":
      console.log(`ERROR : ${notif.message}`);
      console.log(`Code  : ${notif.code}`);
      console.log(`Close : ${notif.canDismiss}`);
      break;

    case "success":
      console.log(`SUCCESS : ${notif.message}`);
      console.log(`Durasi  : ${notif.duration} detik`);
      break;
  }
}

// Output
console.log("\n=== NOTIFIKASI ===");

showNotification({
  type: "info",
  message: "Data berhasil dimuat."
});

console.log("--------------------------");

showNotification({
  type: "warning",
  message: "Password hampir kedaluwarsa.",
  action: "Ganti Password"
});

console.log("--------------------------");

showNotification({
  type: "error",
  message: "Server tidak merespon.",
  code: 500,
  canDismiss: true
});

console.log("--------------------------");

showNotification({
  type: "success",
  message: "Data berhasil disimpan.",
  duration: 5
});


// ─── SOAL 3 : CLI COMMAND ──────────────────────────────────────

// Type CLI Command
type CLICommand =
  | {
      command: "add";
      item: string;
    }
  | {
      command: "remove";
      id: number;
    }
  | {
      command: "list";
      filter?: string;
    }
  | {
      command: "clear";
    };

// Exhaustiveness Check
function assertNever(x: never): never {
  throw new Error("Command tidak dikenali.");
}

// Function
function executeCommand(cmd: CLICommand): string {
  switch (cmd.command) {
    case "add":
      return `Menambahkan item : ${cmd.item}`;

    case "remove":
      return `Menghapus item dengan ID ${cmd.id}`;

    case "list":
      return `Menampilkan data ${cmd.filter ?? "semua"}`;

    case "clear":
      return "Semua data berhasil dihapus";

    default:
      return assertNever(cmd);
  }
}

// Output
console.log("\n=== CLI COMMAND ===");
console.log(executeCommand({ command: "add", item: "Laptop" }));
console.log(executeCommand({ command: "remove", id: 2 }));
console.log(executeCommand({ command: "list" }));
console.log(executeCommand({ command: "list", filter: "Elektronik" }));
console.log(executeCommand({ command: "clear" }));