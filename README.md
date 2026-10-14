# DompetKu PWA — Struktur Modular

## Struktur
- `index.html`: shell aplikasi, header, bottom navigation, panel transaksi yang dipakai bersama.
- `assets/js/storage.js`: satu-satunya pengelola localStorage; satu key `dompetku_app_v1` menyimpan `finance` dan `budgets` secara terpisah.
- `assets/js/page-loader.js`: daftar rute/halaman yang diload ke setiap tab.
- `assets/js/app.js`: logika inti transaksi, saldo, riwayat, ringkasan, impor/ekspor terpadu, navigasi. Keyboard nominal tidak dipanggil otomatis saat panel transaksi dibuka.
- `pages/home/`: tampilan Beranda.
- `pages/history/`: tampilan Riwayat.
- `pages/budget/`: halaman Anggaran, CSS dan CRUD-nya sendiri.
- `pages/more/`: menu Lainnya dan subhalaman Ringkasan.
- `sw.js`: daftar aset lokal yang masuk cache PWA; tambahkan rute/aset baru di sini saat menambah fitur.

## Menambah halaman baru
1. Buat folder `pages/nama-fitur/` berisi `index.html`, `style.css`, dan bila dibutuhkan `app.js`.
2. Tambah satu container tab di `index.html` dan tombol navigasi bila fitur memerlukan tab utama.
3. Daftarkan berkas HTML/CSS/JS di `assets/js/page-loader.js` agar fragmen dimuat sebagai modul.
4. Tambahkan semua berkas baru ke `APP_SHELL` dalam `sw.js`, lalu naikkan `CACHE_NAME` (contoh `v5`).
5. Jika butuh penyimpanan, gunakan `DompetKuStorage`, jangan menulis `localStorage` langsung di modul fitur.

## Penyimpanan dan cadangan
- Satu key persisten: `dompetku_app_v1`.
- Bentuk data: `finance` (saldo/riwayat) dan `budgets` (rencana bulanan) tetap terpisah secara logika.
- Ada migrasi satu kali dari key lama `dompetku_v3` dan `dompetku_budget_data_v3`; saldo dan riwayat yang ada tetap dibawa, data contoh anggaran dihapus, lalu key lama dihapus.
- Data contoh anggaran dengan ID `m1`, `m2`, `m3` dibuang saat migrasi. Rencana buatan sendiri tetap dipertahankan.
- Ekspor membackup transaksi, saldo, dan anggaran. Impor JSON versi lama yang hanya berisi transaksi/saldo tetap didukung dan tidak menghapus rencana anggaran yang sekarang.

## Deployment
Deploy seluruh isi folder ke Cloudflare Workers Static Assets (atau hosting HTTPS lain). `start_url` diarahkan ke `/`, bukan `/index.html`, mengikuti rute root yang sebelumnya berhasil dibuka.

## Catatan offline
Berkas lokal shell, halaman, CSS, dan JavaScript dicache. Font, Tailwind CDN, dan Font Awesome CDN tetap memerlukan jaringan saat pertama kali dibuka karena masih digunakan oleh tampilan lama.
