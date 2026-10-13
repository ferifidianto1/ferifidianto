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

/* PERANGKAT AJAR (modul ajar, ATP, silabus, soal, media)
   - jenis : Modul Ajar / ATP / Silabus / Soal / Media (bebas Bapak tentukan) */
var PERANGKAT = [
  { jenis: "Modul Ajar", nama: "[Modul Ajar Akidah Akhlak Kelas 7]", tautan: "#" }
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
