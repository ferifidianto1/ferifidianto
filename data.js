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
   - tanggal : tanggal terbit, format "2026-10-28" (dipakai bagian "Terbaru" di beranda)
   ===================================================================== */

var MATERI = [
  { kelas: 7, bab: 1, judul: "Istiqomah", ringkas: "Pengertian, dalil, cara menjaga, tantangan, dan contoh istiqomah, lengkap dengan latihan soal dan kunci jawaban.", tautan: "bab-1-istiqomah.html", pdf: "Materi_BAB_Istiqomah_Akidah_Akhlak_Kelas_7.pdf", tanggal: "2026-10-13" }
];

/* PERANGKAT AJAR
   - jenis  : nama kelompok (kartu dengan jenis yang sama dikumpulkan jadi satu bagian)
   - nama   : judul yang tampil
   - ringkas: keterangan singkat
   - tautan : halaman untuk melihat perangkat (berisi isi, tombol unduh, minta Word, diskusi)
   - pdf    : nama file PDF
   - word   : nama file Word (boleh ""). Word TIDAK diunggah ke situs; tombol
              "Minta file Word" membuka surel ke Bapak dengan nama file ini.
   - tanggal: tanggal terbit "2026-10-28" */
var PERANGKAT = [
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 1: Akidah Islam", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-01-akidah-islam-kelas-7.html", "pdf": "Modul-Ajar_Bab-01_Akidah-Islam_Kelas-7.pdf", "word": "Modul-Ajar_Bab-01_Akidah-Islam_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 2: Sifat-Sifat Allah SWT.", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-02-sifat-sifat-allah-kelas-7.html", "pdf": "Modul-Ajar_Bab-02_Sifat-Sifat-Allah_Kelas-7.pdf", "word": "Modul-Ajar_Bab-02_Sifat-Sifat-Allah_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 3: Taubat, Taat, Istiqamah, dan Ikhlas", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-03-taubat-taat-istiqamah-ikhlas-kelas-7.html", "pdf": "Modul-Ajar_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.pdf", "word": "Modul-Ajar_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 4: Adab Shalat dan Berdzikir", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-04-adab-shalat-dan-dzikir-kelas-7.html", "pdf": "Modul-Ajar_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.pdf", "word": "Modul-Ajar_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 5: Keteladanan Nabi Sulaiman as.", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-05-nabi-sulaiman-kelas-7.html", "pdf": "Modul-Ajar_Bab-05_Nabi-Sulaiman_Kelas-7.pdf", "word": "Modul-Ajar_Bab-05_Nabi-Sulaiman_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 6: Asmaul Husna", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-06-asmaul-husna-kelas-7.html", "pdf": "Modul-Ajar_Bab-06_Asmaul-Husna_Kelas-7.pdf", "word": "Modul-Ajar_Bab-06_Asmaul-Husna_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 7: Iman kepada Malaikat-Malaikat Allah dan Makhluk Gaib Selain Malaikat", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-07-iman-kepada-malaikat-kelas-7.html", "pdf": "Modul-Ajar_Bab-07_Iman-kepada-Malaikat_Kelas-7.pdf", "word": "Modul-Ajar_Bab-07_Iman-kepada-Malaikat_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 8: Akhlak Tercela kepada Allah SWT. (Riya' dan Nifaq)", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-08-riya-dan-nifaq-kelas-7.html", "pdf": "Modul-Ajar_Bab-08_Riya-dan-Nifaq_Kelas-7.pdf", "word": "Modul-Ajar_Bab-08_Riya-dan-Nifaq_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 9: Adab Membaca Al-Qur'an dan Berdoa", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-09-adab-quran-dan-doa-kelas-7.html", "pdf": "Modul-Ajar_Bab-09_Adab-Quran-dan-Doa_Kelas-7.pdf", "word": "Modul-Ajar_Bab-09_Adab-Quran-dan-Doa_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Modul Ajar", "nama": "Modul Ajar Bab 10: Kisah Keteladanan Nabi Ibrahim as.", "ringkas": "Modul ajar Deep Learning (KBC) Akidah Akhlak kelas 7.", "tautan": "modul-ajar-bab-10-nabi-ibrahim-kelas-7.html", "pdf": "Modul-Ajar_Bab-10_Nabi-Ibrahim_Kelas-7.pdf", "word": "Modul-Ajar_Bab-10_Nabi-Ibrahim_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 1: Akidah Islam", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-01-akidah-islam-kelas-7.html", "pdf": "LKPD_Bab-01_Akidah-Islam_Kelas-7.pdf", "word": "LKPD_Bab-01_Akidah-Islam_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 2: Sifat-Sifat Allah SWT.", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-02-sifat-sifat-allah-kelas-7.html", "pdf": "LKPD_Bab-02_Sifat-Sifat-Allah_Kelas-7.pdf", "word": "LKPD_Bab-02_Sifat-Sifat-Allah_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 3: Taubat, Taat, Istiqamah, dan Ikhlas", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-03-taubat-taat-istiqamah-ikhlas-kelas-7.html", "pdf": "LKPD_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.pdf", "word": "LKPD_Bab-03_Taubat-Taat-Istiqamah-Ikhlas_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 4: Adab Shalat dan Berdzikir", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-04-adab-shalat-dan-dzikir-kelas-7.html", "pdf": "LKPD_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.pdf", "word": "LKPD_Bab-04_Adab-Shalat-dan-Dzikir_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 5: Keteladanan Nabi Sulaiman as.", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-05-nabi-sulaiman-kelas-7.html", "pdf": "LKPD_Bab-05_Nabi-Sulaiman_Kelas-7.pdf", "word": "LKPD_Bab-05_Nabi-Sulaiman_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 6: Asmaul Husna", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-06-asmaul-husna-kelas-7.html", "pdf": "LKPD_Bab-06_Asmaul-Husna_Kelas-7.pdf", "word": "LKPD_Bab-06_Asmaul-Husna_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 7: Iman kepada Malaikat-Malaikat Allah dan Makhluk Gaib Selain Malaikat", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-07-iman-kepada-malaikat-kelas-7.html", "pdf": "LKPD_Bab-07_Iman-kepada-Malaikat_Kelas-7.pdf", "word": "LKPD_Bab-07_Iman-kepada-Malaikat_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 8: Akhlak Tercela kepada Allah SWT. (Riya' dan Nifaq)", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-08-riya-dan-nifaq-kelas-7.html", "pdf": "LKPD_Bab-08_Riya-dan-Nifaq_Kelas-7.pdf", "word": "LKPD_Bab-08_Riya-dan-Nifaq_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 9: Adab Membaca Al-Qur'an dan Berdoa", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-09-adab-quran-dan-doa-kelas-7.html", "pdf": "LKPD_Bab-09_Adab-Quran-dan-Doa_Kelas-7.pdf", "word": "LKPD_Bab-09_Adab-Quran-dan-Doa_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "LKPD", "nama": "LKPD Bab 10: Kisah Keteladanan Nabi Ibrahim as.", "ringkas": "Lembar kerja peserta didik, lengkap dengan petunjuk dan tugas.", "tautan": "lkpd-bab-10-nabi-ibrahim-kelas-7.html", "pdf": "LKPD_Bab-10_Nabi-Ibrahim_Kelas-7.pdf", "word": "LKPD_Bab-10_Nabi-Ibrahim_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Capaian Pembelajaran (CP)", "nama": "Capaian Pembelajaran (CP)", "ringkas": "CP Akidah Akhlak Fase D.", "tautan": "cp-akidah-akhlak-fase-d.html", "pdf": "CP_Akidah-Akhlak_Fase-D.pdf", "word": "CP_Akidah-Akhlak_Fase-D.docx", "tanggal": "2026-10-28"},
  {"jenis": "Alur Tujuan Pembelajaran (ATP)", "nama": "Alur Tujuan Pembelajaran (ATP)", "ringkas": "ATP Akidah Akhlak kelas 7.", "tautan": "atp-akidah-akhlak-kelas-7.html", "pdf": "ATP_Akidah-Akhlak_Kelas-7.pdf", "word": "ATP_Akidah-Akhlak_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "KKTP", "nama": "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)", "ringkas": "KKTP Akidah Akhlak kelas 7.", "tautan": "kktp-akidah-akhlak-kelas-7.html", "pdf": "KKTP_Akidah-Akhlak_Kelas-7.pdf", "word": "KKTP_Akidah-Akhlak_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Program Tahunan dan Semester", "nama": "Program Tahunan (PROTA)", "ringkas": "Prota Akidah Akhlak kelas 7.", "tautan": "prota-akidah-akhlak-kelas-7.html", "pdf": "PROTA_Akidah-Akhlak_Kelas-7.pdf", "word": "PROTA_Akidah-Akhlak_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Program Tahunan dan Semester", "nama": "Program Semester (PROMES)", "ringkas": "Promes Akidah Akhlak kelas 7.", "tautan": "promes-akidah-akhlak-kelas-7.html", "pdf": "PROMES_Akidah-Akhlak_Kelas-7.pdf", "word": "PROMES_Akidah-Akhlak_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Lainnya", "nama": "Jurnal Mengajar", "ringkas": "Format jurnal mengajar.", "tautan": "jurnal-mengajar-kelas-7.html", "pdf": "Jurnal-Mengajar_Kelas-7.pdf", "word": "Jurnal-Mengajar_Kelas-7.docx", "tanggal": "2026-10-28"},
  {"jenis": "Lainnya", "nama": "Panca Cinta Kurikulum Berbasis Cinta", "ringkas": "Rincian materi pokok Panca Cinta.", "tautan": "panca-cinta-kurikulum-berbasis-cinta.html", "pdf": "Panca-Cinta_Kurikulum-Berbasis-Cinta.pdf", "word": "Panca-Cinta_Kurikulum-Berbasis-Cinta.docx", "tanggal": "2026-10-28"}
];

/* BERITA DAN MAKALAH (tampil di bagian "Terbaru" beranda)
   - jenis  : "Berita", "Pengumuman", atau "Makalah" (bebas)
   - judul, ringkas, tanggal ("2026-10-28")
   - tautan : halaman/link/PDF makalahnya (boleh "#" kalau belum ada)
   Tambahkan baris baru di PALING ATAS atau mana saja; urutan ditentukan oleh tanggal. */
var BERITA = [
  { jenis: "Pengumuman", judul: "Perangkat ajar Akidah Akhlak kelas 7 sudah tersedia", ringkas: "Modul ajar 10 bab, LKPD 10 bab, CP, ATP, KKTP, Prota, dan Promes bisa dilihat langsung dan diunduh dalam bentuk PDF. File Word untuk guru dikirim lewat surel.", tanggal: "2026-10-28", tautan: "perangkat.html" }
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
