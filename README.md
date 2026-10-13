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
