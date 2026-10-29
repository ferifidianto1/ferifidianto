# Ruang Akidah Akhlak · Feri Fidianto, S.Pd.

Situs statis untuk GitHub Pages: https://ferifidianto1.github.io/ferifidianto/

## Struktur file

| File | Isi |
| --- | --- |
| `index.html` | Beranda |
| `materi.html` | Daftar materi (daftarnya otomatis dari `data.js`) |
| `bab-1-istiqomah.html` | Halaman materi Bab 1 (contoh, salin untuk bab lain) |
| `perangkat.html` | Perangkat ajar (daftarnya otomatis dari `data.js`) |
| `profil.html` | Profil |
| `data.js` | Daftar materi, perangkat ajar, dan pengaturan kolom diskusi |
| `style.css` | Warna dan tampilan (warna ada di bagian `:root`) |
| `script.js` | Jam, daftar, latihan soal, kolom diskusi (biasanya tidak diubah) |
| `logo.png`, `logo-besar.png`, `favicon.png`, `foto-feri.jpg` | Logo dan foto (satu folder dengan file HTML) |

## Menambah bab baru

1. Salin `bab-1-istiqomah.html`, beri nama baru, misalnya `bab-2-judulbab.html`.
2. Di salinan itu ganti judul, isi materi, dalil, tabel, dan soal. Setiap soal memakai
   `data-kunci="A"`, `"B"`, atau `"C"` untuk kunci jawabannya.
3. Ubah juga alamat `canonical`, `og:url`, dan nama file PDF di salinan itu.
4. Di `data.js`, tambahkan satu baris di `MATERI` dengan `tautan: "bab-2-judulbab.html"`.
5. Tambahkan alamat halamannya di `sitemap.xml`.

## Mengaktifkan kolom diskusi (Giscus)

Kolom diskusi memakai GitHub Discussions. Penulis komentar masuk dengan akun GitHub.
Komentar tersimpan di repositori Bapak, bukan di server lain.

1. Di GitHub, buka repositori `ferifidianto` > **Settings** > **General** > bagian
   **Features**, lalu centang **Discussions**.
2. Di tab **Discussions**, buat kategori baru bernama `Komentar` dengan format **Announcement**
   (supaya hanya Bapak dan sistem yang bisa membuka topik baru).
3. Pasang aplikasi Giscus di repositori ini: https://github.com/apps/giscus
4. Buka https://giscus.app, isi repositori `ferifidianto1/ferifidianto`, pilih kategori `Komentar`.
   Salin nilai `data-repo-id` dan `data-category-id` yang muncul di bagian bawah halaman itu.
5. Tempel keduanya di `data.js` pada bagian `GISCUS` (`repoId` dan `kategoriId`), lalu unggah ulang.

Selama `repoId` dan `kategoriId` masih kosong, halaman bab menampilkan ajakan mengirim
pertanyaan lewat surel.

## Mengganti PDF materi

Ganti file PDF dengan nama yang sama, atau ganti nama file di `data.js` (baris `pdf`)
dan di tombol unduh pada halaman bab.

## Agar situs ditemukan di Google

Situs baru tidak langsung muncul di Google. Biasanya butuh beberapa hari sampai beberapa minggu,
dan lebih cepat kalau didaftarkan lewat Google Search Console.

1. Buka https://search.google.com/search-console dan masuk dengan akun Google yang sama dengan
   yang dipakai saat verifikasi (berkas `google7f41c135078191eb.html` jangan dihapus).
2. Pastikan propertinya bertipe **Awalan URL** dengan alamat
   `https://ferifidianto1.github.io/ferifidianto/` (pakai garis miring di akhir).
3. Menu **Sitemap**: tulis `sitemap.xml` di kolom, lalu **Kirim**. Statusnya harus "Berhasil".
4. Menu **Pemeriksaan URL**: tempel alamat beranda, lalu klik **Minta pengindeksan**.
   Ulangi untuk `materi.html`, `bab-1-istiqomah.html`, `perangkat.html`, dan `profil.html`.
5. Cek hasilnya dengan mengetik `site:ferifidianto1.github.io` di Google.
   Kalau sudah ada hasilnya, berarti situs sudah terindeks.

Setiap menambah bab baru: tambahkan alamatnya di `sitemap.xml` (salin satu blok `<url>`),
lalu lakukan langkah 4 untuk halaman barunya.

Tips agar lebih cepat dikenal: tautkan situs ini dari situs atau media sosial madrasah,
grup WhatsApp guru, dan profil akun lain milik Bapak.

## Perangkat ajar (PDF umum, Word lewat surel)

- File PDF ada di folder utama (satu tempat dengan index.html). Daftarnya ada di `data.js` bagian `PERANGKAT`.
- File Word **tidak** diunggah ke situs. Tombol "Minta file Word" membuka surel ke Bapak;
  Bapak membalas dengan file Word dari folder `Word-untuk-guru` (simpan di komputer Bapak).
- Menambah perangkat baru: tambahkan PDF-nya ke folder utama, lalu salin satu baris
  di `PERANGKAT` dan ganti isinya.

## Halaman perangkat ajar dan bagian "Terbaru"

- Setiap perangkat punya halaman sendiri (isi, tombol Unduh PDF, Minta file Word, diskusi).
  Halaman itu dibuat dari file Word-nya; kalau Bapak mengubah isi perangkat, kabari saya untuk dibuatkan ulang.
- Bagian **Terbaru** di beranda otomatis mengambil dari `data.js`: `MATERI`, `PERANGKAT`, dan `BERITA`.
  Untuk menambah berita atau makalah, tambahkan satu baris di `BERITA` (judul, ringkas, tanggal, tautan).
