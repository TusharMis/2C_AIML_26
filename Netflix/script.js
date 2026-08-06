/* ==========================================================================
   NETFLIX CLONE - JAVASCRIPT APP ARCHITECTURE (ES6+)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. MOCK TMDB-STYLE MOVIE DATASET
// --------------------------------------------------------------------------
const MOVIES_DATA = [
    {
        id: "cyberpunk-2099",
        title: "Cyberpunk 2099",
        type: "tv",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        match: "98% Match",
        year: 2024,
        rating: "18+",
        duration: "2 Seasons",
        isTop10: true,
        top10Rank: 1,
        categories: ["Trending Now", "Top 10 in Your Country Today", "Action & Sci-Fi"],
        synopsis: "In a neon-drenched metropolis controlled by rogue algorithms, an exiled netrunner uncovers a hidden conspiracy that threatens humanity's digital consciousness.",
        cast: ["Karl Urban", "Ana de Armas", "Hiroyuki Sanada"],
        genres: ["Sci-Fi", "Action", "Cyberpunk"],
        mood: "Mind-bending, Gritty, Adrenaline-fueled"
    },
    {
        id: "shadow-horizon",
        title: "Shadow Horizon",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        match: "95% Match",
        year: 2023,
        rating: "16+",
        duration: "2h 14m",
        isTop10: true,
        top10Rank: 2,
        categories: ["Trending Now", "Top 10 in Your Country Today", "Popular on Netflix"],
        synopsis: "When a deep-space research station goes silent near Saturn's rings, an elite tactical rescue crew discovers an entity beyond human comprehension.",
        cast: ["Jessica Chastain", "Oscar Isaac", "Mads Mikkelsen"],
        genres: ["Sci-Fi", "Thriller", "Horror"],
        mood: "Suspenseful, Dark, Atmospheric"
    },
    {
        id: "neon-samurai",
        title: "Neon Samurai",
        type: "tv",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        match: "99% Match",
        year: 2024,
        rating: "18+",
        duration: "1 Season",
        isTop10: true,
        top10Rank: 3,
        categories: ["Top 10 in Your Country Today", "TV Shows", "Action & Sci-Fi"],
        synopsis: "A masterless warrior with cybernetic enhancements seeks vengeance in a futuristic Tokyo ruled by ruthless syndicate warlords.",
        cast: ["Ken Watanabe", "Rinko Kikuchi", "Tadanobu Asano"],
        genres: ["Anime", "Action", "Drama"],
        mood: "Violent, Stylish, Epic"
    },
    {
        id: "interstellar-abyss",
        title: "Interstellar Abyss",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        match: "97% Match",
        year: 2022,
        rating: "13+",
        duration: "2h 45m",
        isTop10: true,
        top10Rank: 4,
        categories: ["Top 10 in Your Country Today", "Popular on Netflix", "Movies"],
        synopsis: "A team of brave astronauts embarks on a high-stakes voyage through a newly opened wormhole to find a habitable sanctuary for humanity.",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Michael Caine"],
        genres: ["Sci-Fi", "Adventure", "Drama"],
        mood: "Visually Stunning, Emotional, Mind-bending"
    },
    {
        id: "crown-of-thorns",
        title: "Crown of Thorns",
        type: "tv",
        poster: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        match: "94% Match",
        year: 2023,
        rating: "18+",
        duration: "4 Seasons",
        isTop10: true,
        top10Rank: 5,
        categories: ["Top 10 in Your Country Today", "TV Shows", "Trending Now"],
        synopsis: "Intrigue, betrayal, and dark sorcery collide as noble dynasties wage a bloody war for control of the Ancient Iron Throne.",
        cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
        genres: ["Fantasy", "Drama", "Action"],
        mood: "Gritty, Intriguing, Epic"
    },
    {
        id: "midnight-racer",
        title: "Midnight Racer: Tokyo Shift",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        match: "91% Match",
        year: 2024,
        rating: "13+",
        duration: "1h 48m",
        isTop10: false,
        categories: ["Trending Now", "Action & Sci-Fi", "Movies"],
        synopsis: "An underground street racer gets caught between an Interpol sting operation and a ruthless syndicate controlling high-tech supercar smuggling.",
        cast: ["Sung Kang", "John Cena", "Vanessa Kirby"],
        genres: ["Action", "Crime", "Thriller"],
        mood: "Fast-paced, Exciting, High-octane"
    },
    {
        id: "stranger-realms",
        title: "Stranger Realms",
        type: "tv",
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        match: "99% Match",
        year: 2024,
        rating: "16+",
        duration: "4 Seasons",
        isTop10: false,
        categories: ["Popular on Netflix", "TV Shows", "Trending Now"],
        synopsis: "In 1980s Indiana, a group of young friends unleashes supernatural forces and secret government experiments while searching for their missing friend.",
        cast: ["Millie Bobby Brown", "David Harbour", "Winona Ryder"],
        genres: ["Sci-Fi", "Horror", "Mystery"],
        mood: "Nostalgic, Scary, Suspenseful"
    },
    {
        id: "apex-predator",
        title: "Apex Predator",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        match: "93% Match",
        year: 2023,
        rating: "18+",
        duration: "2h 05m",
        isTop10: false,
        categories: ["Action & Sci-Fi", "Movies"],
        synopsis: "A rogue mercenary group stranded in an uncharted jungle becomes hunted by a genetically modified, cloaked extraterrestrial organism.",
        cast: ["Arnold Schwarzenegger", "Carl Weathers", "Jesse Ventura"],
        genres: ["Action", "Sci-Fi", "Horror"],
        mood: "Tense, Violent, Exciting"
    },
    {
        id: "ocean-protocol",
        title: "Ocean Protocol",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        match: "89% Match",
        year: 2024,
        rating: "13+",
        duration: "1h 58m",
        isTop10: false,
        categories: ["Popular on Netflix", "Movies"],
        synopsis: "When an oceanic trench drill hits an ancient underwater vault, marine biologists battle high-pressure abyssal horrors to save the surface world.",
        cast: ["Kristen Stewart", "Vincent Cassel", "T.J. Miller"],
        genres: ["Sci-Fi", "Thriller"],
        mood: "Claustrophobic, Tense, Dark"
    },
    {
        id: "lunar-colony",
        title: "Lunar Colony: Zero",
        type: "tv",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        match: "96% Match",
        year: 2024,
        rating: "16+",
        duration: "2 Seasons",
        isTop10: false,
        categories: ["TV Shows", "Trending Now", "Action & Sci-Fi"],
        synopsis: "The pioneers of the moon's first permanent mining outpost must survive political sabotage, low gravity mutiny, and solar radiation storms.",
        cast: ["Pedro Pascal", "Kate Sackhoff", "Giancarlo Esposito"],
        genres: ["Sci-Fi", "Drama"],
        mood: "Gritty, Realistic, Intense"
    },
    {
        id: "quantum-heist",
        title: "Quantum Heist",
        type: "movie",
        poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        match: "97% Match",
        year: 2023,
        rating: "13+",
        duration: "2h 10m",
        isTop10: false,
        categories: ["Popular on Netflix", "Movies", "Action & Sci-Fi"],
        synopsis: "A team of master thieves uses prototype time-dilation technology to rob the world's most secure underground vault in a 5-minute frozen window.",
        cast: ["Cillian Murphy", "Florence Pugh", "Tom Hardy"],
        genres: ["Action", "Crime", "Sci-Fi"],
        mood: "Clever, Fast-paced, Slick"
    },
    {
        id: "valhalla-rising",
        title: "Valhalla Rising",
        type: "tv",
        poster: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        match: "92% Match",
        year: 2022,
        rating: "18+",
        duration: "3 Seasons",
        isTop10: false,
        categories: ["TV Shows", "Trending Now"],
        synopsis: "Viking raiders sail across icy seas to discover fertile new lands, clashing with native kingdoms in a quest for eternal glory and Odin's favor.",
        cast: ["Travis Fimmel", "Katheryn Winnick", "Gustaf Skarsgård"],
        genres: ["History", "Action", "Drama"],
        mood: "Brutal, Atmospheric, Epic"
    }
];

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT & DOM ELEMENTS
// --------------------------------------------------------------------------
let myListIds = JSON.parse(localStorage.getItem('netflix_my_list')) || ['cyberpunk-2099', 'interstellar-abyss'];
let activeCategory = 'all';
let currentModalMovie = null;
let heroVideoTimer = null;

// DOM References
const navbar = document.getElementById('navbar');
const searchBox = document.getElementById('searchBox');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const myListCountBadge = document.getElementById('myListCount');

const heroSection = document.getElementById('heroSection');
const heroBgImg = document.getElementById('heroBgImg');
const heroVideo = document.getElementById('heroVideo');
const heroTitle = document.getElementById('heroTitle');
const heroMatch = document.getElementById('heroMatch');
const heroYear = document.getElementById('heroYear');
const heroRating = document.getElementById('heroRating');
const heroDuration = document.getElementById('heroDuration');
const heroSynopsis = document.getElementById('heroSynopsis');
const heroPlayBtn = document.getElementById('heroPlayBtn');
const heroInfoBtn = document.getElementById('heroInfoBtn');
const heroSoundBtn = document.getElementById('heroSoundBtn');
const heroSoundIcon = document.getElementById('heroSoundIcon');

const rowsContainer = document.getElementById('rowsContainer');
const searchResultsSection = document.getElementById('searchResultsSection');
const searchGrid = document.getElementById('searchGrid');
const searchQueryLabel = document.getElementById('searchQueryLabel');
const noResultsMsg = document.getElementById('noResultsMsg');

const infoModal = document.getElementById('infoModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBgImg = document.getElementById('modalBgImg');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalPlayBtn = document.getElementById('modalPlayBtn');
const modalAddListBtn = document.getElementById('modalAddListBtn');
const modalAddListIcon = document.getElementById('modalAddListIcon');
const modalLikeBtn = document.getElementById('modalLikeBtn');
const modalLikeIcon = document.getElementById('modalLikeIcon');
const modalSoundBtn = document.getElementById('modalSoundBtn');
const modalSoundIcon = document.getElementById('modalSoundIcon');
const modalMatch = document.getElementById('modalMatch');
const modalYear = document.getElementById('modalYear');
const modalRating = document.getElementById('modalRating');
const modalDuration = document.getElementById('modalDuration');
const modalSynopsis = document.getElementById('modalSynopsis');
const modalCast = document.getElementById('modalCast');
const modalGenres = document.getElementById('modalGenres');
const modalMood = document.getElementById('modalMood');
const similarGrid = document.getElementById('similarGrid');

// --------------------------------------------------------------------------
// 3. INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    updateMyListBadge();
    initHeaderScroll();
    initSearchLogic();
    initNavTabs();
    initHeroBanner();
    renderAllRows();
    initModalControls();
});

// Update My List Badge Count
function updateMyListBadge() {
    if (myListCountBadge) {
        myListCountBadge.textContent = myListIds.length;
    }
    localStorage.setItem('netflix_my_list', JSON.stringify(myListIds));
}

// Header Scroll Solid Black Effect
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// --------------------------------------------------------------------------
// 4. SEARCH FUNCTIONALITY
// --------------------------------------------------------------------------
function initSearchLogic() {
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        } else {
            clearSearch();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length > 0) {
            clearSearchBtn.classList.add('show');
            performSearch(query);
        } else {
            clearSearchBtn.classList.remove('show');
            resetSearchResults();
        }
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.remove('show');
        resetSearchResults();
        searchInput.focus();
    });

    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && searchInput.value === '') {
            searchBox.classList.remove('active');
            resetSearchResults();
        }
    });
}

function performSearch(query) {
    searchQueryLabel.textContent = query;
    rowsContainer.classList.add('hidden');
    heroSection.classList.add('hidden');
    searchResultsSection.classList.remove('hidden');

    const filtered = MOVIES_DATA.filter(movie => {
        const titleMatch = movie.title.toLowerCase().includes(query);
        const castMatch = movie.cast.some(c => c.toLowerCase().includes(query));
        const genreMatch = movie.genres.some(g => g.toLowerCase().includes(query));
        return titleMatch || castMatch || genreMatch;
    });

    searchGrid.innerHTML = '';
    if (filtered.length === 0) {
        noResultsMsg.classList.remove('hidden');
    } else {
        noResultsMsg.classList.add('hidden');
        filtered.forEach(movie => {
            const card = createMovieCard(movie, false);
            searchGrid.appendChild(card);
        });
    }
}

function resetSearchResults() {
    searchResultsSection.classList.add('hidden');
    rowsContainer.classList.remove('hidden');
    heroSection.classList.remove('hidden');
}

function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.classList.remove('show');
    resetSearchResults();
}

// --------------------------------------------------------------------------
// 5. NAVIGATION TABS FILTER
// --------------------------------------------------------------------------
function initNavTabs() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            activeCategory = item.getAttribute('data-category');
            clearSearch();
            renderAllRows();
        });
    });

    document.getElementById('logoLink').addEventListener('click', (e) => {
        e.preventDefault();
        navItems[0].click();
    });
}

// --------------------------------------------------------------------------
// 6. HERO FEATURED BANNER
// --------------------------------------------------------------------------
function initHeroBanner(featuredItem = MOVIES_DATA[0]) {
    heroBgImg.src = featuredItem.backdrop;
    heroVideo.src = featuredItem.video;
    heroTitle.textContent = featuredItem.title;
    heroMatch.textContent = featuredItem.match;
    heroYear.textContent = featuredItem.year;
    heroRating.textContent = featuredItem.rating;
    heroDuration.textContent = featuredItem.duration;
    heroSynopsis.textContent = featuredItem.synopsis;

    // Reset video state
    heroVideo.pause();
    heroVideo.currentTime = 0;
    heroVideo.classList.remove('playing');
    heroBgImg.style.opacity = '1';

    // Auto-play trailer after 2 seconds
    if (heroVideoTimer) clearTimeout(heroVideoTimer);
    heroVideoTimer = setTimeout(() => {
        heroVideo.play().then(() => {
            heroVideo.classList.add('playing');
            heroBgImg.style.opacity = '0';
        }).catch(() => {
            // Autoplay blocked fallback
        });
    }, 2500);

    // Hero Action Click Handlers
    heroPlayBtn.onclick = () => {
        openModal(featuredItem);
        playModalVideo();
    };

    heroInfoBtn.onclick = () => {
        openModal(featuredItem);
    };

    heroSoundBtn.onclick = () => {
        heroVideo.muted = !heroVideo.muted;
        if (heroVideo.muted) {
            heroSoundIcon.className = "fa-solid fa-volume-xmark";
        } else {
            heroSoundIcon.className = "fa-solid fa-volume-high";
        }
    };
}

// --------------------------------------------------------------------------
// 7. CAROUSEL & CONTENT ROWS RENDERER
// --------------------------------------------------------------------------
function renderAllRows() {
    rowsContainer.innerHTML = '';

    if (activeCategory === 'mylist') {
        const myMovies = MOVIES_DATA.filter(m => myListIds.includes(m.id));
        renderSingleRow("My List", myMovies, false);
        return;
    }

    if (activeCategory === 'tv') {
        const tvShows = MOVIES_DATA.filter(m => m.type === 'tv');
        renderSingleRow("Top TV Shows", tvShows, false);
        return;
    }

    if (activeCategory === 'movies') {
        const movies = MOVIES_DATA.filter(m => m.type === 'movie');
        renderSingleRow("Popular Movies", movies, false);
        return;
    }

    // Default Home View
    const trending = MOVIES_DATA.filter(m => m.categories.includes("Trending Now"));
    const top10 = MOVIES_DATA.filter(m => m.isTop10).sort((a, b) => a.top10Rank - b.top10Rank);
    const popular = MOVIES_DATA.filter(m => m.categories.includes("Popular on Netflix"));
    const sciFi = MOVIES_DATA.filter(m => m.categories.includes("Action & Sci-Fi"));

    renderSingleRow("Trending Now", trending, false);
    renderSingleRow("Top 10 in Your Country Today", top10, true);
    renderSingleRow("Popular on Netflix", popular, false);
    renderSingleRow("Action & Sci-Fi Blockbusters", sciFi, false);

    if (myListIds.length > 0) {
        const myMovies = MOVIES_DATA.filter(m => myListIds.includes(m.id));
        renderSingleRow("My List", myMovies, false);
    }
}

function renderSingleRow(title, moviesList, isTop10Row = false) {
    if (!moviesList || moviesList.length === 0) return;

    const rowSection = document.createElement('section');
    rowSection.className = 'content-row';

    rowSection.innerHTML = `
        <div class="row-header">
            <h2 class="row-title">${title}</h2>
            <i class="fa-solid fa-chevron-right row-header-arrow"></i>
        </div>
        <div class="slider-wrapper">
            <button class="carousel-arrow left" aria-label="Scroll Left">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="slider-container"></div>
            <button class="carousel-arrow right" aria-label="Scroll Right">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    `;

    const sliderContainer = rowSection.querySelector('.slider-container');
    const leftArrow = rowSection.querySelector('.carousel-arrow.left');
    const rightArrow = rowSection.querySelector('.carousel-arrow.right');

    moviesList.forEach(movie => {
        const card = createMovieCard(movie, isTop10Row);
        sliderContainer.appendChild(card);
    });

    // Horizontal Scroll Arrows Logic
    leftArrow.addEventListener('click', () => {
        sliderContainer.scrollBy({ left: -600, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        sliderContainer.scrollBy({ left: 600, behavior: 'smooth' });
    });

    rowsContainer.appendChild(rowSection);
}

// Create Card Element
function createMovieCard(movie, isTop10 = false) {
    const card = document.createElement('div');
    card.className = isTop10 ? 'movie-card top10-card' : 'movie-card';

    const isInList = myListIds.includes(movie.id);

    if (isTop10) {
        card.innerHTML = `
            <div class="top10-number">${movie.top10Rank}</div>
            <img src="${movie.poster}" alt="${movie.title}" class="card-poster portrait" loading="lazy">
            <div class="card-hover-overlay">
                <div class="card-actions">
                    <button class="card-btn card-btn-play" title="Play"><i class="fa-solid fa-play"></i></button>
                    <button class="card-btn card-btn-icon card-btn-list" title="My List">
                        <i class="${isInList ? 'fa-solid fa-check' : 'fa-solid fa-plus'}"></i>
                    </button>
                    <button class="card-btn card-btn-icon card-btn-info" title="More Info"><i class="fa-solid fa-chevron-down"></i></button>
                </div>
                <div class="card-meta-line">
                    <span class="meta-match">${movie.match}</span>
                    <span class="meta-rating">${movie.rating}</span>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="card-poster" loading="lazy">
            <div class="card-hover-overlay">
                <div class="card-actions">
                    <button class="card-btn card-btn-play" title="Play"><i class="fa-solid fa-play"></i></button>
                    <button class="card-btn card-btn-icon card-btn-list" title="My List">
                        <i class="${isInList ? 'fa-solid fa-check' : 'fa-solid fa-plus'}"></i>
                    </button>
                    <button class="card-btn card-btn-icon card-btn-info" title="More Info"><i class="fa-solid fa-chevron-down"></i></button>
                </div>
                <div class="card-meta-line">
                    <span class="meta-match">${movie.match}</span>
                    <span class="meta-rating">${movie.rating}</span>
                    <span class="meta-duration">${movie.duration}</span>
                </div>
                <div class="card-tags">
                    ${movie.genres.map(g => `<span class="card-tag">${g}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Card Event Listeners
    const playBtn = card.querySelector('.card-btn-play');
    const listBtn = card.querySelector('.card-btn-list');
    const infoBtn = card.querySelector('.card-btn-info');

    card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-btn')) {
            openModal(movie);
        }
    });

    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(movie);
            playModalVideo();
        });
    }

    if (listBtn) {
        listBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMyList(movie.id);
            const icon = listBtn.querySelector('i');
            if (myListIds.includes(movie.id)) {
                icon.className = 'fa-solid fa-check';
            } else {
                icon.className = 'fa-solid fa-plus';
            }
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(movie);
        });
    }

    return card;
}

function toggleMyList(movieId) {
    if (myListIds.includes(movieId)) {
        myListIds = myListIds.filter(id => id !== movieId);
    } else {
        myListIds.push(movieId);
    }
    updateMyListBadge();
    if (activeCategory === 'mylist') {
        renderAllRows();
    }
}

// --------------------------------------------------------------------------
// 8. MORE INFO MODAL CONTROLS & RECOMMENDATIONS
// --------------------------------------------------------------------------
function initModalControls() {
    modalCloseBtn.addEventListener('click', closeModal);

    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !infoModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    modalPlayBtn.addEventListener('click', () => {
        if (modalVideo.paused) {
            playModalVideo();
        } else {
            modalVideo.pause();
            modalVideo.classList.remove('playing');
        }
    });

    modalSoundBtn.addEventListener('click', () => {
        modalVideo.muted = !modalVideo.muted;
        if (modalVideo.muted) {
            modalSoundIcon.className = 'fa-solid fa-volume-xmark';
        } else {
            modalSoundIcon.className = 'fa-solid fa-volume-high';
        }
    });

    modalAddListBtn.addEventListener('click', () => {
        if (!currentModalMovie) return;
        toggleMyList(currentModalMovie.id);
        updateModalAddListBtn();
    });

    modalLikeBtn.addEventListener('click', () => {
        modalLikeIcon.classList.toggle('fa-regular');
        modalLikeIcon.classList.toggle('fa-solid');
        modalLikeIcon.style.color = modalLikeIcon.classList.contains('fa-solid') ? '#E50914' : '#FFF';
    });
}

function openModal(movie) {
    currentModalMovie = movie;
    modalBgImg.src = movie.backdrop;
    modalVideo.src = movie.video;
    modalTitle.textContent = movie.title;
    modalMatch.textContent = movie.match;
    modalYear.textContent = movie.year;
    modalRating.textContent = movie.rating;
    modalDuration.textContent = movie.duration;
    modalSynopsis.textContent = movie.synopsis;
    modalCast.textContent = movie.cast.join(', ');
    modalGenres.textContent = movie.genres.join(', ');
    modalMood.textContent = movie.mood;

    updateModalAddListBtn();
    renderSimilarTitles(movie);

    // Reset video state
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.classList.remove('playing');
    modalBgImg.style.opacity = '1';

    infoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    infoModal.classList.add('hidden');
    modalVideo.pause();
    document.body.style.overflow = 'auto';
    currentModalMovie = null;
}

function playModalVideo() {
    modalVideo.muted = false;
    modalSoundIcon.className = 'fa-solid fa-volume-high';
    modalVideo.play().then(() => {
        modalVideo.classList.add('playing');
        modalBgImg.style.opacity = '0';
    }).catch(() => {});
}

function updateModalAddListBtn() {
    if (!currentModalMovie) return;
    const isInList = myListIds.includes(currentModalMovie.id);
    if (isInList) {
        modalAddListIcon.className = 'fa-solid fa-check';
    } else {
        modalAddListIcon.className = 'fa-solid fa-plus';
    }
}

// Render "More Like This" Recommendations
function renderSimilarTitles(movie) {
    similarGrid.innerHTML = '';
    const recommendations = MOVIES_DATA.filter(m => m.id !== movie.id).slice(0, 6);

    recommendations.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'similar-card';
        card.innerHTML = `
            <img src="${rec.backdrop}" alt="${rec.title}" class="similar-poster" loading="lazy">
            <div class="similar-info">
                <div class="similar-header">
                    <span class="similar-match">${rec.match}</span>
                    <span class="meta-rating">${rec.rating}</span>
                </div>
                <div class="similar-title-text">${rec.title}</div>
                <p class="similar-desc">${rec.synopsis}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            openModal(rec);
        });

        similarGrid.appendChild(card);
    });
}
