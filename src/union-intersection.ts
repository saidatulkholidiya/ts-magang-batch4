// ─── SOAL 1 : UNION TYPE ─────────────────────────────────────

// Type Alias
type TextContent = {
  type: "text";
  content: string;
};

type ImageContent = {
  type: "image";
  url: string;
  alt: string;
};

type VideoContent = {
  type: "video";
  url: string;
  durasi: number;
};

// Union Type
type Content = TextContent | ImageContent | VideoContent;

// Function
function renderContent(content: Content): string {

  if (content.type === "text") {
    return `Text : ${content.content}`;
  }

  if (content.type === "image") {
    return `Image : ${content.url} (${content.alt})`;
  }

  return `Video : ${content.url} (${content.durasi} menit)`;
}

// Object
const ContentText: TextContent = {
  type: "text",
  content: "Belajar TypeScript"
};

const ContentImage: ImageContent = {
  type: "image",
  url: "https://example.com/typescript.png",
  alt: "Logo TypeScript"
};

const ContentVideo: VideoContent = {
  type: "video",
  url: "https://youtube.com/video",
  durasi: 15
};

// Output
console.log("=== RENDER CONTENT ===");
console.log(renderContent(ContentText));
console.log(renderContent(ContentImage));
console.log(renderContent(ContentVideo));


// ─── SOAL 2 : INTERSECTION TYPE ──────────────────────────────

// Interface
interface HasNama {
  nama: string;
}

interface HasEmail {
  email: string;
}

interface HasTelepon {
  telepon: string;
}

// Intersection Type
type KontakLengkap = HasNama & HasEmail & HasTelepon;
type KontakMinimal = HasNama & HasEmail;

// Function
function kirimNotifikasi(
  kontak: KontakMinimal,
  pesan: string
): void {
  console.log(`Notifikasi untuk ${kontak.nama}`);
  console.log(`Email : ${kontak.email}`);
  console.log(`Pesan : ${pesan}`);
}

function kirimWhatsApp(
  kontak: KontakLengkap,
  pesan: string
): void {
  console.log(`WhatsApp ke ${kontak.nama}`);
  console.log(`No HP : ${kontak.telepon}`);
  console.log(`Pesan : ${pesan}`);
}

// Object
const kontak1: KontakMinimal = {
  nama: "Saidatul Kholidiya",
  email: "kholidiyasaidatul@gmail.com"
};

const kontak2: KontakLengkap = {
  nama: "Laela Nurul Hidayah",
  email: "laelanh@gmail.com",
  telepon: "081234567890"
};

// Output
console.log("\n=== NOTIFIKASI ===");
kirimNotifikasi(kontak1, "Selamat mengikuti pelatihan.");

console.log("\n=== WHATSAPP ===");
kirimWhatsApp(kontak2, "Jangan lupa hadir besok.");


// ─── SOAL 3 : GENERIC TYPE ALIAS ─────────────────────────────

// Generic Type
type WithLoading<T> = T & {
  isLoading: boolean;
  error: string | null;
};

// User State
type UserState = WithLoading<{
  user: {
    nama: string;
    email: string;
  } | null;
}>;

// Product State
type ProductState = WithLoading<{
  products: {
    id: number;
    nama: string;
  }[];
}>;

// Object
const userState1: UserState = {
  user: {
    nama: "Saidatul Kholidiya",
    email: "kholidiyasaidatul@gmail.com"
  },
  isLoading: false,
  error: null
};

const userState2: UserState = {
  user: null,
  isLoading: true,
  error: null
};

const productState1: ProductState = {
  products: [
    {
      id: 1,
      nama: "Laptop"
    },
    {
      id: 2,
      nama: "Keyboard"
    }
  ],
  isLoading: false,
  error: null
};

const productState2: ProductState = {
  products: [],
  isLoading: true,
  error: "Data belum tersedia"
};

// Output

console.log("\n=== USER STATE ===");

console.log("User State 1");
console.log("Nama        :", userState1.user?.nama);
console.log("Email       :", userState1.user?.email);
console.log("Loading     :", userState1.isLoading);
console.log("Error       :", userState1.error);

console.log("--------------------------------");

console.log("User State 2");
console.log("Nama        :", userState2.user?.nama ?? "-");
console.log("Email       :", userState2.user?.email ?? "-");
console.log("Loading     :", userState2.isLoading);
console.log("Error       :", userState2.error);

console.log("\n=== PRODUCT STATE ===");
console.log("Product State 1");
console.log("Products    :", productState1.products);
console.log("Loading     :", productState1.isLoading);
console.log("Error       :", productState1.error);

console.log("--------------------------------");

console.log("Product State 2");
console.log("Products    :", productState2.products);
console.log("Loading     :", productState2.isLoading);
console.log("Error       :", productState2.error);