// ─── STUDI KASUS : TASK MANAGER ───────────────────────────────
// ─── DATA USER ────────────────────────────────────────────────
const user1 = {
    id: 1,
    nama: "Saidatul Kholidiya",
    email: "kholidiyasaidatul@gmail.com"
};
const user2 = {
    id: 2,
    nama: "Laela Nurul Hidayah",
    email: "laela@gmail.com"
};
// ─── IMPLEMENTASI TASK MANAGER ────────────────────────────────
const taskManager = {
    tasks: [
        {
            id: 1,
            judul: "Belajar TypeScript",
            status: "todo",
            prioritas: "high",
            assignee: user1,
            createdAt: "11 Juli 2026"
        },
        {
            id: 2,
            judul: "Mengerjakan Latihan",
            status: "in_progress",
            prioritas: "urgent",
            assignee: user1,
            createdAt: "11 Juli 2026"
        },
        {
            id: 3,
            judul: "Push GitHub",
            status: "done",
            prioritas: "medium",
            assignee: user2,
            createdAt: "11 Juli 2026"
        },
        {
            id: 4,
            judul: "Membuat Jurnal",
            status: "todo",
            prioritas: "low",
            assignee: user2,
            createdAt: "11 Juli 2026"
        },
        {
            id: 5,
            judul: "Review Code",
            status: "cancelled",
            prioritas: "medium",
            createdAt: "11 Juli 2026"
        }
    ],
    tambahTask(task) {
        const taskBaru = {
            id: this.tasks.length + 1,
            createdAt: "11 Juli 2026",
            ...task
        };
        this.tasks.push(taskBaru);
        return taskBaru;
    },
    updateStatus(id, status) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.status = status;
        }
        return task;
    },
    getByPrioritas(prioritas) {
        return this.tasks.filter((t) => t.prioritas === prioritas);
    },
    getByAssignee(userId) {
        return this.tasks.filter((t) => t.assignee?.id === userId);
    }
};
// ─── DATA PROJECT ─────────────────────────────────────────────
const project = {
    id: 1,
    nama: "Task Manager TypeScript",
    deskripsi: "Studi kasus integrasi materi minggu 2",
    tasks: taskManager.tasks
};
// ─── TASK EVENT LOGGER ────────────────────────────────────────
function logEvent(event) {
    switch (event.type) {
        case "created":
            console.log(`Task baru : ${event.task.judul}`);
            break;
        case "updated":
            console.log(`Task ID ${event.taskId} berhasil diperbarui`);
            break;
        case "completed":
            console.log(`Task ID ${event.taskId} selesai pada ${event.completedAt}`);
            break;
        case "deleted":
            console.log(`Task ID ${event.taskId} dihapus. Alasan: ${event.reason}`);
            break;
    }
}
// ─── OUTPUT ───────────────────────────────────────────────────
console.log("=== SEMUA TASK ===");
console.log(taskManager.tasks);
console.log("\n=== DATA PROJECT ===");
console.log("ID          :", project.id);
console.log("Nama        :", project.nama);
console.log("Deskripsi   :", project.deskripsi);
console.log("Jumlah Task :", project.tasks.length);
console.log("\n=== TAMBAH TASK ===");
console.log(taskManager.tambahTask({
    judul: "Belajar Interface",
    status: "todo",
    prioritas: "high",
    assignee: user1
}));
console.log("\n=== UPDATE STATUS ===");
console.log(taskManager.updateStatus(1, "done"));
console.log("\n=== PRIORITAS HIGH ===");
console.log(taskManager.getByPrioritas("high"));
console.log("\n=== TASK USER 1 ===");
console.log(taskManager.getByAssignee(1));
console.log("\n=== TASK EVENT ===");
logEvent({
    type: "created",
    task: taskManager.tasks[0]
});
logEvent({
    type: "updated",
    taskId: 2,
    changes: {
        status: "done"
    }
});
logEvent({
    type: "completed",
    taskId: 3,
    completedAt: "11 Juli 2026"
});
logEvent({
    type: "deleted",
    taskId: 5,
    reason: "Task dibatalkan"
});
export {};
//# sourceMappingURL=integrasi-minggu2.js.map