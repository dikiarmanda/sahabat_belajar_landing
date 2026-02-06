# Landing Page Sahabat Belajar

Landing page modern untuk komunitas Sahabat Belajar yang dibangun menggunakan HTML, CSS, dan JavaScript dengan TailwindCSS untuk styling.

## Fitur

- ✅ **Hero Section** - Section utama dengan call-to-action yang menarik
- ✅ **Event Section** - Menampilkan event-event terbaru komunitas
- ✅ **Tentang Kami** - Informasi tentang komunitas, visi, misi, dan statistik
- ✅ **Pemateri** - Profil pemateri/mentor komunitas
- ✅ **Kontak** - Form kontak dan informasi kontak komunitas
- ✅ **Responsive Design** - Tampilan optimal di semua perangkat
- ✅ **Smooth Scroll** - Navigasi yang halus antar section
- ✅ **Form Validation** - Validasi form kontak yang user-friendly
- ✅ **Scroll Animations** - Animasi fade-in saat scroll
- ✅ **Mobile Menu** - Menu navigasi yang responsif untuk mobile

## Struktur File

```
sahabat_belajar_landing/
│
├── index.html          # File HTML utama
├── style.css           # Custom CSS dan animasi
├── script.js           # JavaScript untuk interaktivitas
└── README.md          # Dokumentasi proyek
```

## Cara Menggunakan

### Opsi 1: Langsung Buka di Browser

1. Clone atau download repository ini
2. Buka file `index.html` langsung di browser web Anda
3. Tidak perlu instalasi atau build process

### Opsi 2: Menggunakan Live Server (Recommended)

Jika Anda menggunakan VS Code:

1. Install extension "Live Server"
2. Klik kanan pada file `index.html`
3. Pilih "Open with Live Server"
4. Browser akan otomatis membuka dengan auto-reload

### Opsi 3: Menggunakan Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Kemudian buka browser dan akses `http://localhost:8000`

### Opsi 4: Menggunakan Node.js HTTP Server

```bash
# Install http-server secara global
npm install -g http-server

# Jalankan server
http-server -p 8000
```

Kemudian buka browser dan akses `http://localhost:8000`

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan animasi custom
- **JavaScript (ES6+)** - Interaktivitas dan validasi form
- **TailwindCSS** - Framework CSS utility-first (via CDN)
- **Font Awesome** - Icons (via CDN)

## Section Detail

### 1. Hero Section
- Judul utama komunitas
- Tagline dan deskripsi singkat
- Call-to-action buttons
- Background gradient yang menarik

### 2. Event Section
- Grid layout untuk event cards
- Informasi: tanggal, lokasi, deskripsi
- Hover effects pada cards
- Button untuk registrasi

### 3. Tentang Kami Section
- Deskripsi komunitas
- Statistik (anggota, event, pemateri, kepuasan)
- Visi dan misi komunitas
- Layout dengan grid system

### 4. Pemateri Section
- Grid layout untuk profil pemateri
- Informasi: nama, bidang keahlian, deskripsi
- Social media links
- Hover effects

### 5. Kontak Section
- Form kontak dengan validasi
- Informasi kontak (email, telepon, alamat)
- Social media links
- Success message setelah submit form

## Customization

### Mengubah Warna

TailwindCSS menggunakan utility classes. Untuk mengubah warna utama, cari dan ganti class warna di HTML:
- `blue-600` → warna utama
- `green-600` → warna sekunder
- `purple-600` → warna aksen

Atau gunakan custom color di TailwindCSS config jika menggunakan build process.

### Mengubah Konten

Edit langsung di file `index.html`:
- Ganti teks di setiap section sesuai kebutuhan
- Update informasi kontak di section Kontak
- Tambah/edit event di section Event
- Update profil pemateri di section Pemateri

### Menambahkan Animasi

Animasi custom dapat ditambahkan di file `style.css` menggunakan keyframes atau di `script.js` untuk interaksi JavaScript.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Menggunakan CDN untuk TailwindCSS dan Font Awesome
- Optimized images (jika ditambahkan)
- Lazy loading untuk animasi scroll
- Minimal JavaScript untuk performa optimal

## Accessibility

- Semantic HTML tags
- ARIA labels (dapat ditambahkan lebih lanjut)
- Keyboard navigation support
- Focus states untuk semua interactive elements
- Reduced motion support untuk user preferences

## Future Enhancements

Beberapa ide untuk pengembangan lebih lanjut:

- [ ] Integrasi dengan backend untuk form submission
- [ ] CMS untuk mengelola konten event dan pemateri
- [ ] Blog section
- [ ] Testimoni section
- [ ] Gallery section
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] PWA (Progressive Web App) support

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini:

1. Fork repository
2. Buat branch untuk fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Proyek ini bebas digunakan untuk keperluan pribadi atau komersial.

## Kontak

Untuk pertanyaan atau saran, silakan hubungi melalui:
- Email: info@sahabatbelajar.com
- Website: [Sahabat Belajar](https://sahabatbelajar.com)

---

**Dibuat dengan ❤️ untuk Komunitas Sahabat Belajar**
