// Interface Peserta
export interface Peserta {
  nama: string;
  sekolah: string;
  nilai: number;
}

// Type StatusPeserta
export type StatusPeserta =
  | "aktif"
  | "lulus"
  | "berhenti";