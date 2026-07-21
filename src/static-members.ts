// ─── SOAL 1 : Static Property & Method ────────────────────────────────────

class SprintTask {
  private static totalTask: number = 0;

  constructor(
    public namaTask: string
  ) {
    SprintTask.totalTask++;
  }

  static getTotalTask(): number {
    return SprintTask.totalTask;
  }
}

const task1 = new SprintTask("Membuat Landing Page");
const task2 = new SprintTask("Membuat Dashboard");
const task3 = new SprintTask("Membuat Form Login");
const task4 = new SprintTask("Membuat API");
const task5 = new SprintTask("Testing");

console.log(
  "Total Task:",
  SprintTask.getTotalTask()
);


// ─── SOAL 2 : Static Readonly ────────────────────────────────────

class AppConfig {
  static readonly APP_NAME: string = "SiTrack";
  static readonly VERSION: string = "1.0.0";
  static readonly MAX_PESERTA: number = 4;

  static getInfo(): string {
    return `
APP NAME     : ${AppConfig.APP_NAME}
VERSION      : ${AppConfig.VERSION}
MAX PESERTA  : ${AppConfig.MAX_PESERTA}
`;
  }
}

console.log(AppConfig.getInfo());


// ─── SOAL 3 : Static Factory ────────────────────────────────────

class Nilai {
  private constructor(
    private nilai: number
  ) {}

  static buat(
    nilai: number
  ): Nilai | null {
    if (nilai < 0 || nilai > 100) {
      console.log("Nilai tidak valid!");
      return null;
    }

    return new Nilai(nilai);
  }

  getNilai(): number {
    return this.nilai;
  }
}

const nilai1 = Nilai.buat(90);
const nilai2 = Nilai.buat(120);

if (nilai1) {
  console.log(
    "Nilai:",
    nilai1.getNilai()
  );
}

console.log(nilai2);


// ─── SOAL 4 : Static Utility ────────────────────────────────────

class StringHelper {
  static capitalize(
    str: string
  ): string {
    return (
      str.charAt(0).toUpperCase() +
      str.slice(1)
    );
  }

  static slugify(
  str: string
): string {
  return str
    .toLowerCase()
    .replace(/ /g, "-");
}

  static truncate(
    str: string,
    maxLength: number
  ): string {
    if (str.length <= maxLength) {
      return str;
    }

    return (
      str.slice(0, maxLength) +
      "..."
    );
  }
}

console.log(
  StringHelper.capitalize(
    "saidatul kholidiya"
  )
);

console.log(
  StringHelper.slugify(
    "Belajar TypeScript Dasar"
  )
);

console.log(
  StringHelper.truncate(
    "Mempelajari Static Properties & Methods pada TypeScript",
    20
  )
);