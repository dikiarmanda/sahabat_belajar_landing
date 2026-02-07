// Render Functions untuk Event dan Pemateri

// Render Event Card
function renderEventCard(event) {
    const gradientColors = {
        'dongeng': 'from-orange-500 to-pink-600',
        'dakwah': 'from-green-500 to-emerald-600',
        'talkshow': 'from-purple-500 to-indigo-600'
    };

    const iconColors = {
        'dongeng': 'text-orange-600',
        'dakwah': 'text-green-600',
        'talkshow': 'text-purple-600'
    };

    const icons = {
        'dongeng': 'fa-book-reader',
        'dakwah': 'fa-mosque',
        'talkshow': 'fa-microphone'
    };

    const gradient = gradientColors[event.kategori] || 'from-gray-500 to-gray-600';
    const iconColor = iconColors[event.kategori] || 'text-gray-600';
    const icon = icons[event.kategori] || 'fa-calendar';

    // Render tags
    const tagsHtml = event.tag.map(tag => 
        `<span class="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-1 mb-1">${tag}</span>`
    ).join('');

    // Render pemateri
    const pemateriHtml = event.pemateri.length > 0 
        ? `<div class="flex items-center mb-4">
            <i class="fas fa-user ${iconColor} mr-2"></i>
            <span class="text-gray-600 text-sm">${event.pemateri.join('<br>')}</span>
          </div>`
        : '';

    return `
        <div class="event-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 fade-in flex flex-col h-full" data-category="${event.kategori}">
            <div class="bg-gradient-to-r ${gradient} h-48 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                ${event.gambar ? `<img src="${event.gambar}" alt="${event.nama}" class="absolute inset-0 w-full h-full object-cover opacity-90" onerror="this.style.display='none';">` : ''}
                <div class="absolute top-4 right-4 bg-gradient-to-r ${gradient} px-3 py-1.5 rounded-full z-10 shadow-lg border border-white/30 backdrop-blur-sm">
                    <div class="flex items-center gap-2">
                        <i class="fas ${icon} text-white text-xs"></i>
                        <span class="text-white text-xs font-bold uppercase tracking-wide">${event.kategori}</span>
                    </div>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-center mb-2">
                    <i class="fas fa-calendar ${iconColor} mr-2"></i>
                    <span class="text-gray-600">${event.tanggal}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">${event.nama}</h3>
                <p class="text-gray-600 mb-4 text-sm">
                    ${event.deskripsi}
                </p>
                <div class="flex items-center mb-2">
                    <i class="fas fa-map-marker-alt ${iconColor} mr-2"></i>
                    <span class="text-gray-600">${event.lokasi}</span>
                </div>
                <div class="flex items-center mb-2">
                    <i class="fas fa-clock ${iconColor} mr-2"></i>
                    <span class="text-gray-600">${event.waktu}</span>
                </div>
                ${pemateriHtml}
                <div class="mb-4">
                    ${tagsHtml}
                </div>
                <a href="${event.linkIg}" target="_blank" class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2 mt-auto">
                    <i class="fab fa-instagram"></i>
                    Ikuti di Instagram
                </a>
            </div>
        </div>
    `;
}

// Render Pemateri Card
function renderPemateriCard(pemateri) {
    const gradientColors = [
        'from-blue-400 to-blue-600',
        'from-green-400 to-green-600',
        'from-purple-400 to-purple-600',
        'from-orange-400 to-orange-600',
        'from-teal-400 to-teal-600',
        'from-pink-400 to-pink-600',
        'from-indigo-400 to-indigo-600',
        'from-red-400 to-red-600'
    ];

    const gradient = gradientColors[(pemateri.id - 1) % gradientColors.length];

    // Tags akan di-render langsung di dalam card dengan styling yang lebih baik

    return `
        <div class="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 fade-in flex flex-col h-full border border-gray-100 relative group">
            <!-- Decorative gradient border -->
            <div class="absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
            
            <!-- Header Image Section -->
            <div class="bg-gradient-to-br ${gradient} h-64 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <img src="${pemateri.gambar}" alt="${pemateri.nama}" class="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center absolute shadow-lg" style="display: none;">
                    <i class="fas fa-user text-gray-600 text-5xl"></i>
                </div>
                <!-- Position Badge -->
                <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full shadow-lg border border-white/50">
                    <p class="text-xs font-bold uppercase tracking-wide">${pemateri.posisi}</p>
                </div>
            </div>
            
            <!-- Content Section -->
            <div class="p-6 text-center flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
                <h3 class="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">${pemateri.nama}</h3>
                ${pemateri.deskripsi ? `<p class="text-gray-600 text-sm mb-4 leading-relaxed">${pemateri.deskripsi}</p>` : ''}
                
                <!-- Location -->
                <div class="flex items-center justify-center mb-3">
                    <div class="bg-blue-50 rounded-full p-2 mr-2">
                        <i class="fas fa-map-marker-alt text-blue-600 text-xs"></i>
                    </div>
                    <span class="text-gray-600 text-sm font-medium">${pemateri.lokasi}</span>
                </div>
                
                <!-- Tags -->
                <div class="mb-4 flex flex-wrap justify-center gap-1">
                    ${pemateri.tag.map(tag => 
                        `<span class="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium border border-blue-100 hover:border-blue-300 transition-colors">${tag}</span>`
                    ).join('')}
                </div>
                
                <!-- CV Button -->
                <div class="flex justify-center mb-4">
                    <a href="${pemateri.linkCv}" target="_blank" class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                        <i class="fas fa-file-pdf"></i>
                        <span class="text-sm">CV</span>
                    </a>
                </div>
                
                <!-- Workshop Count -->
                <div class="text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
                    <i class="fas fa-calendar-check text-blue-500 mr-1"></i>
                    <span class="font-semibold">${pemateri.workshop}+</span> Workshop
                </div>
            </div>
        </div>
    `;
}

// Render Event Grid
function renderEventGrid(events, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (events.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-600 col-span-full">Tidak ada event yang ditemukan.</p>';
        return;
    }

    container.innerHTML = events.map(event => renderEventCard(event)).join('');
    
    // Re-observe untuk animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Render Pemateri Grid
function renderPemateriGrid(pemateri, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (pemateri.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-600 col-span-full">Tidak ada pemateri yang ditemukan.</p>';
        return;
    }

    container.innerHTML = pemateri.map(p => renderPemateriCard(p)).join('');
    
    // Re-observe untuk animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderEventCard, renderPemateriCard, renderEventGrid, renderPemateriGrid };
}
