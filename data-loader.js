// Data Loader untuk Event dan Pemateri
class DataLoader {
    constructor() {
        this.data = null;
    }

    async loadData() {
        try {
            // Load from data.js (no CORS issue)
            if (typeof appData !== 'undefined') {
                this.data = appData;
                return this.data;
            }
            
            // If appData is not available, return empty data structure
            console.warn('appData tidak ditemukan. Pastikan data.js sudah di-load sebelum menggunakan DataLoader.');
            return {
                events: [],
                pemateri: []
            };
        } catch (error) {
            console.error('Error loading data:', error);
            // Fallback: return empty data structure
            return {
                events: [],
                pemateri: []
            };
        }
    }

    getEvents(filter = 'all') {
        if (!this.data) return [];
        
        if (filter === 'all') {
            return this.data.events;
        }
        
        return this.data.events.filter(event => event.kategori === filter);
    }

    getEventById(id) {
        if (!this.data) return null;
        return this.data.events.find(event => event.id === id);
    }

    getPemateri() {
        if (!this.data) return [];
        return this.data.pemateri;
    }

    getPemateriById(id) {
        if (!this.data) return null;
        return this.data.pemateri.find(pemateri => pemateri.id === id);
    }

    getPemateriByNama(nama) {
        if (!this.data) return null;
        return this.data.pemateri.find(pemateri => pemateri.nama === nama);
    }

    getPemateriByTag(tag) {
        if (!this.data) return [];
        return this.data.pemateri.filter(pemateri => 
            pemateri.tag.includes(tag)
        );
    }

    getEventsByPemateri(namaPemateri) {
        if (!this.data) return [];
        return this.data.events.filter(event => 
            event.pemateri.includes(namaPemateri)
        );
    }
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataLoader;
}
