// Render Functions untuk Event dan Pemateri

// Render Event Card
function renderEventCard(event) {
    const gradientColors = {
        'workshop': 'from-blue-500 to-indigo-600',
        'networking': 'from-green-500 to-teal-600',
        'hackathon': 'from-purple-500 to-pink-600'
    };

    const iconColors = {
        'workshop': 'text-blue-600',
        'networking': 'text-green-600',
        'hackathon': 'text-purple-600'
    };

    const icons = {
        'workshop': 'fa-calendar-alt',
        'networking': 'fa-users',
        'hackathon': 'fa-laptop-code'
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
            <span class="text-gray-600 text-sm">${event.pemateri.join(', ')}</span>
          </div>`
        : '';

    return `
        <div class="event-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 fade-in flex flex-col h-full" data-category="${event.kategori}">
            <div class="bg-gradient-to-r ${gradient} h-48 flex items-center justify-center relative overflow-hidden flex-shrink-0" style="background-image: url('${event.gambar}'); background-size: cover; background-position: center;">
                <div class="absolute inset-0 bg-gradient-to-r ${gradient} opacity-80"></div>
                <i class="fas ${icon} text-white text-6xl z-10"></i>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span class="text-white text-sm font-semibold capitalize">${event.kategori}</span>
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

    // Render tags
    const tagsHtml = pemateri.tag.map(tag => 
        `<span class="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-1 mb-1">${tag}</span>`
    ).join('');

    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 fade-in flex flex-col h-full">
            <div class="bg-gradient-to-br ${gradient} h-64 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <img src="${pemateri.gambar}" alt="${pemateri.nama}" class="w-full h-full object-cover opacity-90" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center absolute" style="display: none;">
                    <i class="fas fa-user text-gray-600 text-5xl"></i>
                </div>
            </div>
            <div class="p-6 text-center flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-gray-800 mb-1">${pemateri.nama}</h3>
                <p class="text-gray-600 mb-3 font-semibold">${pemateri.posisi}</p>
                <p class="text-gray-600 text-sm mb-4">
                    ${pemateri.deskripsi}
                </p>
                <div class="flex items-center justify-center mb-2">
                    <i class="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                    <span class="text-gray-600 text-sm">${pemateri.lokasi}</span>
                </div>
                <div class="mb-4">
                    ${tagsHtml}
                </div>
                <div class="flex justify-center space-x-3 mb-4">
                    <a href="${pemateri.linkCv}" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors">
                        <i class="fab fa-linkedin text-xl"></i>
                    </a>
                </div>
                <div class="text-xs text-gray-500 mt-auto">
                    <i class="fas fa-calendar mr-1"></i> ${pemateri.workshop}+ Workshop
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
