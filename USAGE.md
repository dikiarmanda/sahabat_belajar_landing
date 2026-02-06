# Cara Menggunakan Data untuk Event dan Pemateri

## Struktur File

- `data.js` - File data yang berisi array event dan pemateri (menggunakan JavaScript untuk menghindari CORS issue)
- `data-loader.js` - Class untuk memuat dan mengakses data dari data.js
- `render-functions.js` - Fungsi untuk render event dan pemateri ke HTML

## Cara Menggunakan

### 1. Include Scripts di HTML

Tambahkan script berikut sebelum closing `</body>` tag (pastikan urutan: data.js dulu, kemudian data-loader.js):

```html
<script src="data.js"></script>
<script src="data-loader.js"></script>
<script src="render-functions.js"></script>
```

### 2. Load dan Render Data Event

```javascript
// Inisialisasi DataLoader
const dataLoader = new DataLoader();

// Load data
dataLoader.loadData().then(() => {
    // Render semua event
    const events = dataLoader.getEvents('all');
    renderEventGrid(events, 'event-grid');
    
    // Atau filter berdasarkan kategori
    const dongengEvents = dataLoader.getEvents('dongeng');
    renderEventGrid(dongengEvents, 'event-grid');
});
```

### 3. Load dan Render Data Pemateri

```javascript
// Load data
dataLoader.loadData().then(() => {
    // Render semua pemateri
    const pemateri = dataLoader.getPemateri();
    renderPemateriGrid(pemateri, 'pemateri-grid');
    
    // Atau filter berdasarkan tag
    const dataScientists = dataLoader.getPemateriByTag('data-science');
    renderPemateriGrid(dataScientists, 'pemateri-grid');
});
```

### 4. Filter Event dengan JavaScript

```javascript
// Setup filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const events = dataLoader.getEvents(filter);
        renderEventGrid(events, 'event-grid');
    });
});
```

## Struktur Data Event

```json
{
  "id": 1,
  "nama": "Dongeng Anak Ceria",
  "gambar": "url_gambar",
  "linkIg": "https://instagram.com/...",
  "lokasi": "Online via Zoom",
  "tanggal": "15 Februari 2026",
  "waktu": "09:00 - 17:00 WIB",
  "pemateri": ["Kak Nadya"],
  "tag": ["dongeng", "anak-anak"],
  "kategori": "dongeng",
  "deskripsi": "Deskripsi event..."
}
```

## Struktur Data Pemateri

```json
{
  "id": 1,
  "nama": "Ahmad Rizki",
  "gambar": "url_gambar",
  "linkCv": "https://linkedin.com/...",
  "lokasi": "Jakarta, Indonesia",
  "tag": ["full-stack", "web-development"],
  "posisi": "Full Stack Developer",
  "deskripsi": "Deskripsi pemateri...",
  "workshop": 15
}
```

## Methods DataLoader

- `loadData()` - Load data dari data.js (menggunakan variabel appData)
- `getEvents(filter)` - Get events (filter: 'all', 'dongeng', 'dakwah', 'talkshow')
- `getEventById(id)` - Get event by ID
- `getPemateri()` - Get all pemateri
- `getPemateriById(id)` - Get pemateri by ID
- `getPemateriByNama(nama)` - Get pemateri by name
- `getPemateriByTag(tag)` - Get pemateri by tag
- `getEventsByPemateri(namaPemateri)` - Get events by pemateri name

## Keuntungan Menggunakan data.js

1. **Mudah di-update** - Cukup edit file data.js tanpa mengubah kode
2. **Separation of concerns** - Data terpisah dari logic
3. **Tidak ada CORS issue** - Bisa dibuka langsung di browser tanpa server
4. **Siap untuk API** - Bisa diganti dengan API call di masa depan
5. **Maintainable** - Lebih mudah di-maintain dan di-debug
