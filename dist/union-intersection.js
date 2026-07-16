// ─── SOAL 1 : UNION TYPE ─────────────────────────────────────
// Function
function renderContent(content) {
    if (content.type === "text") {
        return `Text : ${content.content}`;
    }
    if (content.type === "image") {
        return `Image : ${content.url} (${content.alt})`;
    }
    return `Video : ${content.url} (${content.durasi} menit)`;
}
// Object
const ContentText = {
    type: "text",
    content: "Belajar TypeScript"
};
const ContentImage = {
    type: "image",
    url: "https://example.com/typescript.png",
    alt: "Logo TypeScript"
};
const ContentVideo = {
    type: "video",
    url: "https://youtube.com/video",
    durasi: 15
};
// Output
console.log("=== RENDER CONTENT ===");
console.log(renderContent(ContentText));
console.log(renderContent(ContentImage));
console.log(renderContent(ContentVideo));
// Function
function kirimNotifikasi(kontak, pesan) {
    console.log(`Notifikasi untuk ${kontak.nama}`);
    console.log(`Email : ${kontak.email}`);
    console.log(`Pesan : ${pesan}`);
}
function kirimWhatsApp(kontak, pesan) {
    console.log(`WhatsApp ke ${kontak.nama}`);
    console.log(`No HP : ${kontak.telepon}`);
    console.log(`Pesan : ${pesan}`);
}
// Object
const kontak1 = {
    nama: "Saidatul Kholidiya",
    email: "kholidiyasaidatul@gmail.com"
};
const kontak2 = {
    nama: "Laela Nurul Hidayah",
    email: "laelanh@gmail.com",
    telepon: "081234567890"
};
// Output
console.log("\n=== NOTIFIKASI ===");
kirimNotifikasi(kontak1, "Selamat mengikuti pelatihan.");
console.log("\n=== WHATSAPP ===");
kirimWhatsApp(kontak2, "Jangan lupa hadir besok.");
// Object
const userState1 = {
    user: {
        nama: "Saidatul Kholidiya",
        email: "kholidiyasaidatul@gmail.com"
    },
    isLoading: false,
    error: null
};
const userState2 = {
    user: null,
    isLoading: true,
    error: null
};
const productState1 = {
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
const productState2 = {
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
export {};
//# sourceMappingURL=union-intersection.js.map