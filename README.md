# 3D Portfolio Website - Nabila Putri

A stunning, interactive 3D portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Fitur Utama

- **Premium Design:** Antarmuka bergaya glassmorphism dengan palet warna soft pink dan purple.
- **Interactive 3D Lanyard Badge:** Kartu identitas 3D yang dapat berayun dengan physics menggunakan `@react-three/rapier` dan menampilkan avatar secara dinamis.
- **Responsive Layout:** Dioptimalkan untuk Desktop, Tablet, dan Mobile.
- **Smooth Animations:** Efek scroll dan *hover* menggunakan Framer Motion.

---

## 🛠️ Persiapan & Instalasi (Development)

Jika Anda ingin menjalankan aplikasi ini di komputer lokal, ikuti langkah berikut:

1. **Install Dependencies:**
   Pastikan Anda sudah menginstal Node.js, lalu jalankan perintah ini di terminal:
   ```bash
   npm install
   ```

2. **Jalankan Local Server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

---

## 🌐 Cara Deploy ke GitHub Pages

Proyek ini telah dikonfigurasi agar mudah di-deploy ke GitHub Pages.

1. **Pastikan URL Repository Anda Benar**
   Aplikasi ini dikonfigurasi untuk berjalan di repository `myporto23/nabila_salsabila`.
   Jika Anda mengubah nama repository di GitHub, Anda harus menyesuaikan properti `base` di file `vite.config.js`.

2. **Install Dependensi Tambahan (Jika Belum)**
   Jalankan ini sekali untuk memastikan package `gh-pages` ter-install:
   ```bash
   npm install
   ```

3. **Inisialisasi Git & Push ke GitHub**
   Jika belum di-push ke GitHub, lakukan langkah berikut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/myporto23/nabila_salsabila.git
   git push -u origin main
   ```

4. **Jalankan Perintah Deploy**
   Cukup ketikkan perintah berikut di terminal:
   ```bash
   npm run deploy
   ```
   Perintah ini akan secara otomatis melakukan _build_ project Anda dan men-deploy foldernya (`dist/`) ke branch `gh-pages`.

5. **Atur GitHub Pages Settings**
   - Buka halaman repository Anda di GitHub (`https://github.com/myporto23/nabila_salsabila`).
   - Masuk ke menu **Settings** > **Pages** (di sidebar kiri).
   - Pada bagian **Build and deployment**, ubah pilihan **Source** ke **Deploy from a branch**.
   - Di bagian **Branch**, pilih branch `gh-pages` dan foldernya `/(root)`.
   - Klik **Save**.
   
   🎉 *Selesai! Website portofolio Anda akan tayang dalam beberapa menit di URL GitHub Pages Anda (misal: `https://myporto23.github.io/nabila_salsabila/`).*
