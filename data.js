/* =====================================================================
   DATA ISI SITUS - inilah satu-satunya file yang sering Bapak ubah.

   CARA MENAMBAH MATERI BARU:
   1. Salin file bab-1-istiqomah.html, ganti namanya (misalnya
      bab-2-judulbab.html), lalu ganti isinya dengan materi baru.
   2. Salin satu baris { ... } di bawah, tempel di bawahnya, lalu ganti isinya.
      Jangan lupa koma (,) di akhir setiap baris kecuali baris terakhir.

   - kelas   : 7, 8, atau 9
   - bab     : nomor bab
   - judul   : judul materi
   - ringkas : satu atau dua kalimat penjelasan
   - tautan  : nama file halaman materi (misalnya "bab-2-judulbab.html"),
               atau link luar (misalnya Google Drive).
               Kalau belum ada, biarkan "#" dan akan tampil "Segera".
   - pdf     : (boleh dikosongkan "") nama file PDF untuk tombol "Unduh PDF"
   ===================================================================== */

var MATERI = [
  { kelas: 7, bab: 1, judul: "Istiqomah", ringkas: "Pengertian, dalil, cara menjaga, tantangan, dan contoh istiqomah, lengkap dengan latihan soal dan kunci jawaban.", tautan: "bab-1-istiqomah.html", pdf: "Materi_BAB_Istiqomah_Akidah_Akhlak_Kelas_7.pdf" }
];

/* PERANGKAT AJAR
   - jenis  : nama kelompok (kartu dengan jenis yang sama dikumpulkan jadi satu bagian)
   - nama   : judul yang tampil
   - ringkas: keterangan singkat
   - pdf    : alamat file PDF (tombol "Unduh PDF"), mis. "perangkat/NamaFile.pdf"
   - word   : nama file Word (boleh dikosongkan ""). Isinya TIDAK diunggah ke situs;
              tombol "Minta file Word" membuka surel ke Bapak dengan nama file ini. */
var PERANGKAT = [
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 1: Akidah Islam", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-01_Akidah-Islam_Kelas-7.pdf", "word": "Modul-Ajar_Bab-01_Akidah-Islam_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 2: Sifat-Sifat Allah SWT.", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-02_Sifat-Sifat-Allah_Kelas-7.pdf", "word": "Modul-Ajar_Bab-02_Sifat-Sifat-Allah_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 3: Taubat, Taat, Istiqamah, dan Ikhlas", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.pdf", "word": "Modul-Ajar_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 4: Adab Shalat dan Berdzikir", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.pdf", "word": "Modul-Ajar_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 5: Keteladanan Nabi Sulaiman as.", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-05_Nabi-Sulaiman_Kelas-7.pdf", "word": "Modul-Ajar_Bab-05_Nabi-Sulaiman_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 6: Asmaul Husna", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-06_Asmaul-Husna_Kelas-7.pdf", "word": "Modul-Ajar_Bab-06_Asmaul-Husna_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 7: Iman kepada Malaikat-Malaikat Allah dan Makhluk Gaib Selain Malaikat", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-07_Iman-kepada-Malaikat_Kelas-7.pdf", "word": "Modul-Ajar_Bab-07_Iman-kepada-Malaikat_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 8: Akhlak Tercela kepada Allah SWT. (Riya' dan Nifaq)", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-08_Riya-dan-Nifaq_Kelas-7.pdf", "word": "Modul-Ajar_Bab-08_Riya-dan-Nifaq_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 9: Adab Membaca Al-Qur'an dan Berdoa", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-09_Adab-Quran-dan-Doa_Kelas-7.pdf", "word": "Modul-Ajar_Bab-09_Adab-Quran-dan-Doa_Kelas-7.docx"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 10: Kisah Keteladanan Nabi Ibrahim as.", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "pdf": "perangkat/Modul-Ajar_Bab-10_Nabi-Ibrahim_Kelas-7.pdf", "word": "Modul-Ajar_Bab-10_Nabi-Ibrahim_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 1: Akidah Islam", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-01_Akidah-Islam_Kelas-7.pdf", "word": "LKPD_Bab-01_Akidah-Islam_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 2: Sifat-Sifat Allah SWT.", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-02_Sifat-Sifat-Allah_Kelas-7.pdf", "word": "LKPD_Bab-02_Sifat-Sifat-Allah_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 3: Taubat, Taat, Istiqamah, dan Ikhlas", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.pdf", "word": "LKPD_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 4: Adab Shalat dan Berdzikir", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.pdf", "word": "LKPD_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 5: Keteladanan Nabi Sulaiman as.", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-05_Nabi-Sulaiman_Kelas-7.pdf", "word": "LKPD_Bab-05_Nabi-Sulaiman_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 6: Asmaul Husna", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-06_Asmaul-Husna_Kelas-7.pdf", "word": "LKPD_Bab-06_Asmaul-Husna_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 7: Iman kepada Malaikat-Malaikat Allah dan Makhluk Gaib Selain Malaikat", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-07_Iman-kepada-Malaikat_Kelas-7.pdf", "word": "LKPD_Bab-07_Iman-kepada-Malaikat_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 8: Akhlak Tercela kepada Allah SWT. (Riya' dan Nifaq)", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-08_Riya-dan-Nifaq_Kelas-7.pdf", "word": "LKPD_Bab-08_Riya-dan-Nifaq_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 9: Adab Membaca Al-Qur'an dan Berdoa", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-09_Adab-Quran-dan-Doa_Kelas-7.pdf", "word": "LKPD_Bab-09_Adab-Quran-dan-Doa_Kelas-7.docx"},
  {"jenis": "LKPD", "nama": "LKPD Bab 10: Kisah Keteladanan Nabi Ibrahim as.", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "pdf": "perangkat/LKPD_Bab-10_Nabi-Ibrahim_Kelas-7.pdf", "word": "LKPD_Bab-10_Nabi-Ibrahim_Kelas-7.docx"},
  {"jenis": "Capaian Pembelajaran (CP)", "nama": "Capaian Pembelajaran (CP)", "ringkas": "CP Akidah Akhlak Fase D.", "pdf": "perangkat/CP_Akidah-Akhlak_Fase-D.pdf", "word": "CP_Akidah-Akhlak_Fase-D.docx"},
  {"jenis": "Alur Tujuan Pembelajaran (ATP)", "nama": "Alur Tujuan Pembelajaran (ATP)", "ringkas": "ATP Akidah Akhlak kelas 7.", "pdf": "perangkat/ATP_Akidah-Akhlak_Kelas-7.pdf", "word": "ATP_Akidah-Akhlak_Kelas-7.docx"},
  {"jenis": "KKTP", "nama": "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)", "ringkas": "KKTP Akidah Akhlak kelas 7.", "pdf": "perangkat/KKTP_Akidah-Akhlak_Kelas-7.pdf", "word": "KKTP_Akidah-Akhlak_Kelas-7.docx"},
  {"jenis": "Program Tahunan dan Semester", "nama": "Program Tahunan (PROTA)", "ringkas": "Prota Akidah Akhlak kelas 7.", "pdf": "perangkat/PROTA_Akidah-Akhlak_Kelas-7.pdf", "word": "PROTA_Akidah-Akhlak_Kelas-7.docx"},
  {"jenis": "Program Tahunan dan Semester", "nama": "Program Semester (PROMES)", "ringkas": "Promes Akidah Akhlak kelas 7.", "pdf": "perangkat/PROMES_Akidah-Akhlak_Kelas-7.pdf", "word": "PROMES_Akidah-Akhlak_Kelas-7.docx"},
  {"jenis": "Lainnya", "nama": "Jurnal Mengajar", "ringkas": "Format jurnal mengajar.", "pdf": "perangkat/Jurnal-Mengajar_Kelas-7.pdf", "word": "Jurnal-Mengajar_Kelas-7.docx"},
  {"jenis": "Lainnya", "nama": "Panca Cinta Kurikulum Berbasis Cinta", "ringkas": "Rincian materi pokok Panca Cinta.", "pdf": "perangkat/Panca-Cinta_Kurikulum-Berbasis-Cinta.pdf", "word": "Panca-Cinta_Kurikulum-Berbasis-Cinta.docx"}
];

/* KOLOM DISKUSI (Giscus, memakai GitHub Discussions)
   Cara mengaktifkan ada di README.md. Selama repoId dan kategoriId masih
   kosong, kolom diskusi menampilkan ajakan mengirim pertanyaan lewat surel. */
var GISCUS = {
  repo: "ferifidianto1/ferifidianto",
  repoId: "",
  kategori: "Komentar",
  kategoriId: ""
};
