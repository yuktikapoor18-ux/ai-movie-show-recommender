// ============================================
// CINEMIND
// AI-STYLE MOVIE & SHOW RECOMMENDER
// No API required
// ============================================


// --------------------------------------------
// MOVIE / SHOW DATABASE
// --------------------------------------------

const titles = [

    {
        id: 1,
        title: "Interstellar",
        type: "movie",
        year: 2014,
        rating: 8.7,
        runtime: 169,
        language: "English",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        moods: ["thoughtful", "emotional", "exciting"],
        icon: "🚀",
        description:
            "A breathtaking journey through space, time and human connection.",
        reason:
            "Great if you want something emotional, ambitious and thought-provoking."
    },

    {
        id: 2,
        title: "The Grand Adventure",
        type: "movie",
        year: 2022,
        rating: 8.1,
        runtime: 118,
        language: "English",
        genres: ["Adventure", "Comedy"],
        moods: ["feel-good", "funny", "exciting"],
        icon: "🗺️",
        description:
            "A chaotic road trip turns into an unexpectedly meaningful adventure.",
        reason:
            "A light adventure with plenty of humor and feel-good energy."
    },

    {
        id: 3,
        title: "Midnight Mystery",
        type: "movie",
        year: 2021,
        rating: 8.4,
        runtime: 124,
        language: "English",
        genres: ["Mystery", "Thriller"],
        moods: ["dark", "thoughtful", "exciting"],
        icon: "🌙",
        description:
            "A detective follows a trail of clues that becomes increasingly personal.",
        reason:
            "A strong match for mystery lovers who enjoy darker stories."
    },

    {
        id: 4,
        title: "Letters in Spring",
        type: "movie",
        year: 2020,
        rating: 7.9,
        runtime: 108,
        language: "English",
        genres: ["Romance", "Drama"],
        moods: ["emotional", "feel-good"],
        icon: "💌",
        description:
            "Two old friends rediscover each other through a collection of letters.",
        reason:
            "Perfect for a warm, emotional and romantic evening."
    },

    {
        id: 5,
        title: "Neon Horizon",
        type: "movie",
        year: 2023,
        rating: 8.3,
        runtime: 132,
        language: "English",
        genres: ["Sci-Fi", "Action", "Thriller"],
        moods: ["exciting", "dark", "thoughtful"],
        icon: "🌃",
        description:
            "A futuristic city hides a secret that could change humanity forever.",
        reason:
            "A stylish choice for action and science-fiction fans."
    },

    {
        id: 6,
        title: "The Cozy Club",
        type: "show",
        year: 2022,
        rating: 8.5,
        runtime: 42,
        language: "English",
        genres: ["Comedy", "Drama"],
        moods: ["feel-good", "funny"],
        icon: "☕",
        description:
            "A group of friends navigate work, relationships and everyday chaos.",
        reason:
            "Ideal when you want something comforting and funny."
    },

    {
        id: 7,
        title: "Kingdom of Stars",
        type: "show",
        year: 2023,
        rating: 9.0,
        runtime: 55,
        language: "English",
        genres: ["Fantasy", "Adventure", "Drama"],
        moods: ["exciting", "emotional", "thoughtful"],
        icon: "✨",
        description:
            "Rival kingdoms collide when an ancient power returns.",
        reason:
            "A great choice for immersive fantasy and adventure."
    },

    {
        id: 8,
        title: "Seoul After Rain",
        type: "show",
        year: 2021,
        rating: 8.6,
        runtime: 58,
        language: "Korean",
        genres: ["Romance", "Drama"],
        moods: ["emotional", "feel-good", "thoughtful"],
        icon: "🌧️",
        description:
            "Two people rebuild their lives after meeting unexpectedly in Seoul.",
        reason:
            "A gentle, emotional pick for a slower evening."
    },

    {
        id: 9,
        title: "Laugh Track",
        type: "show",
        year: 2024,
        rating: 8.0,
        runtime: 28,
        language: "English",
        genres: ["Comedy"],
        moods: ["funny", "feel-good"],
        icon: "😂",
        description:
            "A group of aspiring comedians tries to survive one disastrous open-mic night after another.",
        reason:
            "Short, funny and easy to watch."
    },

    {
        id: 10,
        title: "The Last Signal",
        type: "movie",
        year: 2019,
        rating: 8.8,
        runtime: 141,
        language: "English",
        genres: ["Sci-Fi", "Mystery", "Drama"],
        moods: ["thoughtful", "dark", "emotional"],
        icon: "📡",
        description:
            "A mysterious transmission forces a scientist to question everything she knows.",
        reason:
            "A smart and atmospheric science-fiction mystery."
    },

    {
        id: 11,
        title: "Moonlit Academy",
        type: "show",
        year: 2020,
        rating: 8.2,
        runtime: 48,
        language: "Japanese",
        genres: ["Fantasy", "Mystery", "Drama"],
        moods: ["thoughtful", "dark", "exciting"],
        icon: "🌙",
        description:
            "Students at an unusual academy uncover a mystery hidden beneath their school.",
        reason:
            "A mysterious fantasy series with plenty to uncover."
    },

    {
        id: 12,
        title: "Chai & Conversations",
        type: "show",
        year: 2024,
        rating: 8.3,
        runtime: 35,
        language: "Hindi",
        genres: ["Comedy", "Romance", "Drama"],
        moods: ["feel-good", "funny", "emotional"],
        icon: "🫖",
        description:
            "Friends, family and unexpected conversations bring warmth to an ordinary neighborhood.",
        reason:
            "A cozy Hindi-language choice full of humor and heart."
    },

    {
        id: 13,
        title: "Shadow House",
        type: "movie",
        year: 2022,
        rating: 8.0,
        runtime: 97,
        language: "English",
        genres: ["Horror", "Mystery", "Thriller"],
        moods: ["dark", "exciting"],
        icon: "🏚️",
        description:
            "A family discovers that their new home has a history nobody wants to discuss.",
        reason:
            "A compact mystery-horror pick for a darker mood."
    },

    {
        id: 14,
        title: "Beyond the Map",
        type: "show",
        year: 2023,
        rating: 8.7,
        runtime: 50,
        language: "English",
        genres: ["Adventure", "Mystery"],
        moods: ["exciting", "thoughtful"],
        icon: "🧭",
        description:
            "A group of explorers follows clues leading to places missing from every map.",
        reason:
            "Perfect for adventurous viewers who enjoy mysteries."
    },

    {
        id: 15,
        title: "Weekend Disaster",
        type: "movie",
        year: 2023,
        rating: 7.6,
        runtime: 94,
        language: "English",
        genres: ["Comedy", "Romance"],
        moods: ["funny", "feel-good"],
        icon: "🎉",
        description:
            "One weekend, two friends accidentally turn a quiet getaway into complete chaos.",
        reason:
            "A short, easygoing comedy when you don't want anything heavy."
    },

    {
        id: 16,
        title: "Echoes of Tomorrow",
        type: "movie",
        year: 2024,
        rating: 9.1,
        runtime: 147,
        language: "English",
        genres: ["Sci-Fi", "Drama"],
        moods: ["thoughtful", "emotional"],
        icon: "⏳",
        description:
            "A researcher discovers that memories may be capable of crossing through time.",
        reason:
            "An excellent match for deep, emotional science-fiction."
    }

];


// --------------------------------------------
// STORAGE
// --------------------------------------------

let favorites =
    JSON.parse(
        localStorage.getItem(
            "cinemindFavorites"
        )
    ) || [];

let watchlist =
    JSON.parse(
        localStorage.getItem(
            "cinemindWatchlist"
        )
    ) || [];

let recentlyViewed =
    JSON.parse(
        localStorage.getItem(
            "cinemindRecent"
        )
    ) || [];


// --------------------------------------------
// DOM
// --------------------------------------------

const recommendationGrid =
    document.getElementById(
        "recommendationGrid"
    );

const favoritesGrid =
    document.getElementById(
        "favoritesGrid"
    );

const watchlistGrid =
    document.getElementById(
        "watchlistGrid"
    );

const recentGrid =
    document.getElementById(
        "recentGrid"
    );

const resultCount =
    document.getElementById(
        "resultCount"
    );

const languageFilter =
    document.getElementById(
        "languageFilter"
    );

const ratingFilter =
    document.getElementById(
        "ratingFilter"
    );

const runtimeFilter =
    document.getElementById(
        "runtimeFilter"
    );

const sortFilter =
    document.getElementById(
        "sortFilter"
    );

const detailModal =
    document.getElementById(
        "detailModal"
    );

const modalContent =
    document.getElementById(
        "modalContent"
    );

const toast =
    document.getElementById(
        "toast"
    );


// --------------------------------------------
// SAVE
// --------------------------------------------

function saveStorage() {

    localStorage.setItem(
        "cinemindFavorites",
        JSON.stringify(favorites)
    );

    localStorage.setItem(
        "cinemindWatchlist",
        JSON.stringify(watchlist)
    );

    localStorage.setItem(
        "cinemindRecent",
        JSON.stringify(recentlyViewed)
    );
}


// --------------------------------------------
// GET PREFERENCES
// --------------------------------------------

function getPreferences() {

    const type =
        document.querySelector(
            'input[name="type"]:checked'
        ).value;


    const genres =
        [
            ...document.querySelectorAll(
                ".genre-filter:checked"
            )
        ].map(
            checkbox =>
                checkbox.value
        );


    const moods =
        [
            ...document.querySelectorAll(
                ".mood-filter:checked"
            )
        ].map(
            checkbox =>
                checkbox.value
        );


    return {

        type: type,

        genres: genres,

        moods: moods,

        language:
            languageFilter.value,

        rating:
            Number(
                ratingFilter.value
            ),

        runtime:
            runtimeFilter.value,

        sort:
            sortFilter.value
    };
}


// --------------------------------------------
// SCORE RECOMMENDATION
// --------------------------------------------

function calculateMatch(
    item,
    preferences
) {

    let score = 0;


    // Content type

    if (
        preferences.type !== "all"
    ) {

        if (
            item.type ===
            preferences.type
        ) {

            score += 25;

        } else {

            score -= 25;
        }
    }


    // Genres

    if (
        preferences.genres.length > 0
    ) {

        const matchingGenres =
            item.genres.filter(
                genre =>
                    preferences.genres
                        .includes(genre)
            );


        score +=
            matchingGenres.length * 15;
    }


    // Mood

    if (
        preferences.moods.length > 0
    ) {

        const matchingMoods =
            item.moods.filter(
                mood =>
                    preferences.moods
                        .includes(mood)
            );


        score +=
            matchingMoods.length * 12;
    }


    // Language

    if (
        preferences.language !==
        "all"
    ) {

        if (
            item.language ===
            preferences.language
        ) {

            score += 15;

        } else {

            score -= 10;
        }
    }


    // Rating

    if (
        item.rating >=
        preferences.rating
    ) {

        score += 12;
    }


    // Runtime

    if (
        preferences.runtime !==
        "all"
    ) {

        if (
            preferences.runtime ===
            "short" &&
            item.runtime < 100
        ) {

            score += 10;

        } else if (
            preferences.runtime ===
            "medium" &&
            item.runtime >= 100 &&
            item.runtime <= 140
        ) {

            score += 10;

        } else if (
            preferences.runtime ===
            "long" &&
            item.runtime > 140
        ) {

            score += 10;

        } else {

            score -= 5;
        }
    }


    // Rating bonus

    score +=
        (item.rating - 7) * 5;


    return Math.max(
        0,
        Math.min(
            99,
            Math.round(score)
        )
    );
}


// --------------------------------------------
// RECOMMEND
// --------------------------------------------

function generateRecommendations() {

    const preferences =
        getPreferences();


    let results =
        titles.map(item => ({

            ...item,

            match:
                calculateMatch(
                    item,
                    preferences
                )

        }));


    // Minimum rating

    results =
        results.filter(
            item =>
                item.rating >=
                preferences.rating
        );


    // Content type

    if (
        preferences.type !==
        "all"
    ) {

        results =
            results.filter(
                item =>
                    item.type ===
                    preferences.type
            );
    }


    // Language

    if (
        preferences.language !==
        "all"
    ) {

        results =
            results.filter(
                item =>
                    item.language ===
                    preferences.language
            );
    }


    // Runtime

    if (
        preferences.runtime !==
        "all"
    ) {

        results =
            results.filter(item => {

                if (
                    preferences.runtime ===
                    "short"
                ) {

                    return item.runtime < 100;
                }

                if (
                    preferences.runtime ===
                    "medium"
                ) {

                    return (
                        item.runtime >= 100 &&
                        item.runtime <= 140
                    );
                }

                if (
                    preferences.runtime ===
                    "long"
                ) {

                    return item.runtime > 140;
                }

            });
    }


    // Sort

    if (
        preferences.sort ===
        "rating"
    ) {

        results.sort(
            (a,b) =>
                b.rating - a.rating
        );

    } else if (
        preferences.sort ===
        "newest"
    ) {

        results.sort(
            (a,b) =>
                b.year - a.year
        );

    } else {

        results.sort(
            (a,b) =>
                b.match - a.match
        );
    }


    return results;
}


// --------------------------------------------
// RENDER RECOMMENDATIONS
// --------------------------------------------

function renderRecommendations(
    results
) {

    resultCount.textContent =
        `${results.length} pick${results.length === 1 ? "" : "s"}`;


    if (
        results.length === 0
    ) {

        recommendationGrid.innerHTML = `

            <div class="empty-state">

                <span>🔎</span>

                <h4>
                    No perfect matches found
                </h4>

                <p>
                    Try relaxing one of your filters
                    and we'll find something for you.
                </p>

            </div>

        `;

        return;
    }


    recommendationGrid.innerHTML =
        results
            .map(
                item =>
                    createMovieCard(item)
            )
            .join("");


    attachCardEvents(
        recommendationGrid
    );
}


// --------------------------------------------
// MOVIE CARD
// --------------------------------------------

function createMovieCard(
    item
) {

    const isFavorite =
        favorites.includes(
            item.id
        );


    const inWatchlist =
        watchlist.includes(
            item.id
        );


    return `

        <article
            class="movie-card"
            data-id="${item.id}"
        >

            <div class="poster">

                <span>
                    ${item.icon}
                </span>

                <div class="poster-label">
                    ${item.type === "movie"
                        ? "MOVIE"
                        : "SHOW"}
                </div>

                <button
                    class="favorite-btn ${
                        isFavorite
                            ? "active"
                            : ""
                    }"
                    data-favorite="${item.id}"
                    title="Favorite"
                >
                    ${
                        isFavorite
                            ? "♥"
                            : "♡"
                    }
                </button>

            </div>


            <div class="movie-info">

                <div class="match">
                    ✦ ${item.match || 90}% MATCH
                </div>

                <h4>
                    ${escapeHTML(
                        item.title
                    )}
                </h4>


                <div class="meta">

                    <span>
                        ⭐ ${item.rating}
                    </span>

                    <span>
                        ${item.year}
                    </span>

                    <span>
                        ${item.runtime} min
                    </span>

                </div>


                <p class="description">
                    ${escapeHTML(
                        item.description
                    )}
                </p>


                <div class="card-actions">

                    <button
                        class="card-action details-btn"
                        data-details="${item.id}"
                    >
                        Details
                    </button>

                    <button
                        class="card-action watch-btn"
                        data-watch="${item.id}"
                    >
                        ${
                            inWatchlist
                                ? "✓ Saved"
                                : "+ Watchlist"
                        }
                    </button>

                </div>

            </div>

        </article>

    `;
}


// --------------------------------------------
// CARD EVENTS
// --------------------------------------------

function attachCardEvents(
    container
) {

    container
        .querySelectorAll(
            "[data-favorite]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        Number(
                            button.dataset.favorite
                        )
                    );
                }
            );
        });


    container
        .querySelectorAll(
            "[data-watch]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleWatchlist(
                        Number(
                            button.dataset.watch
                        )
                    );
                }
            );
        });


    container
        .querySelectorAll(
            "[data-details]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openDetails(
                        Number(
                            button.dataset.details
                        )
                    );
                }
            );
        });


    container
        .querySelectorAll(
            ".movie-card"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openDetails(
                        Number(
                            card.dataset.id
                        )
                    );
                }
            );
        });
}


// --------------------------------------------
// FAVORITES
// --------------------------------------------

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Removed from favorites."
        );

    } else {

        favorites.push(id);

        showToast(
            "Added to favorites ♥"
        );
    }


    saveStorage();

    refreshVisibleContent();
}


// --------------------------------------------
// WATCHLIST
// --------------------------------------------

function toggleWatchlist(id) {

    if (
        watchlist.includes(id)
    ) {

        watchlist =
            watchlist.filter(
                item => item !== id
            );

        showToast(
            "Removed from watchlist."
        );

    } else {

        watchlist.push(id);

        showToast(
            "Added to watchlist +"
        );
    }


    saveStorage();

    refreshVisibleContent();
}


// --------------------------------------------
// DETAILS
// --------------------------------------------

function openDetails(id) {

    const item =
        titles.find(
            title =>
                title.id === id
        );


    if (!item) {
        return;
    }


    // Add to recently viewed

    recentlyViewed =
        [
            id,
            ...recentlyViewed.filter(
                recentId =>
                    recentId !== id
            )
        ].slice(0, 6);


    saveStorage();


    const preferences =
        getPreferences();


    const match =
        calculateMatch(
            item,
            preferences
        );


    modalContent.innerHTML = `

        <div class="modal-poster">
            ${item.icon}
        </div>


        <div class="eyebrow">
            ${item.type === "movie"
                ? "MOVIE"
                : "TV SHOW"}
        </div>


        <h2>
            ${escapeHTML(
                item.title
            )}
        </h2>


        <div class="meta">

            <span>
                ⭐ ${item.rating}
            </span>

            <span>
                ${item.year}
            </span>

            <span>
                ${item.language}
            </span>

            <span>
                ${item.runtime} min
            </span>

        </div>


        <p class="modal-description">
            ${escapeHTML(
                item.description
            )}
        </p>


        <div class="reason-box">

            <strong>
                ✦ Why CineMind picked this:
            </strong>

            <br>

            ${
                escapeHTML(
                    item.reason
                )
            }

            <br><br>

            <strong>
                Your match score:
                ${match}%
            </strong>

        </div>


        <div class="modal-actions">

            <button
                class="primary-modal"
                id="modalWatch"
            >
                ${
                    watchlist.includes(id)
                        ? "✓ In Watchlist"
                        : "+ Add to Watchlist"
                }
            </button>

            <button
                class="secondary-modal"
                id="modalFavorite"
            >
                ${
                    favorites.includes(id)
                        ? "♥ Favorited"
                        : "♡ Favorite"
                }
            </button>

        </div>

    `;


    document
        .getElementById(
            "modalWatch"
        )
        .addEventListener(
            "click",
            () => {

                toggleWatchlist(id);

                openDetails(id);
            }
        );


    document
        .getElementById(
            "modalFavorite"
        )
        .addEventListener(
            "click",
            () => {

                toggleFavorite(id);

                openDetails(id);
            }
        );


    detailModal.classList.remove(
        "hidden"
    );
}


// --------------------------------------------
// CLOSE MODAL
// --------------------------------------------

document
    .getElementById(
        "closeModal"
    )
    .addEventListener(
        "click",
        closeModal
    );


detailModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            detailModal
        ) {

            closeModal();
        }
    }
);


function closeModal() {

    detailModal.classList.add(
        "hidden"
    );
}


// --------------------------------------------
// FAVORITES PAGE
// --------------------------------------------

function renderFavorites() {

    const items =
        titles.filter(
            item =>
                favorites.includes(
                    item.id
                )
        );


    if (
        items.length === 0
    ) {

        favoritesGrid.innerHTML = `

            <div class="empty-state">

                <span>♡</span>

                <h4>
                    No favorites yet
                </h4>

                <p>
                    Tap the heart on something you love.
                </p>

            </div>

        `;

        return;
    }


    favoritesGrid.innerHTML =
        items
            .map(
                item =>
                    createMovieCard({
                        ...item,
                        match: 100
                    })
            )
            .join("");


    attachCardEvents(
        favoritesGrid
    );
}


// --------------------------------------------
// WATCHLIST PAGE
// --------------------------------------------

function renderWatchlist() {

    const items =
        titles.filter(
            item =>
                watchlist.includes(
                    item.id
                )
        );


    if (
        items.length === 0
    ) {

        watchlistGrid.innerHTML = `

            <div class="empty-state">

                <span>🎬</span>

                <h4>
                    Your watchlist is empty
                </h4>

                <p>
                    Save something for your next movie night.
                </p>

            </div>

        `;

        return;
    }


    watchlistGrid.innerHTML =
        items
            .map(
                item =>
                    createMovieCard({
                        ...item,
                        match: 100
                    })
            )
            .join("");


    attachCardEvents(
        watchlistGrid
    );
}


// --------------------------------------------
// RECENTLY VIEWED
// --------------------------------------------

function renderRecent() {

    const items =
        recentlyViewed
            .map(
                id =>
                    titles.find(
                        item =>
                            item.id === id
                    )
            )
            .filter(Boolean);


    if (
        items.length === 0
    ) {

        recentGrid.innerHTML = `

            <div class="empty-state">

                <span>🍿</span>

                <h4>
                    Nothing here yet
                </h4>

                <p>
                    Open a recommendation to see it here.
                </p>

            </div>

        `;

        return;
    }


    recentGrid.innerHTML =
        items
            .map(
                item => `

                    <div
                        class="recent-card"
                        data-recent="${item.id}"
                    >

                        <div class="mini-poster">
                            ${item.icon}
                        </div>

                        <h5>
                            ${escapeHTML(
                                item.title
                            )}
                        </h5>

                        <span>
                            ⭐ ${item.rating}
                        </span>

                    </div>

                `
            )
            .join("");


    recentGrid
        .querySelectorAll(
            "[data-recent]"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openDetails(
                        Number(
                            card.dataset.recent
                        )
                    );
                }
            );
        });
}


// --------------------------------------------
// REFRESH
// --------------------------------------------

function refreshVisibleContent() {

    const results =
        generateRecommendations();


    renderRecommendations(
        results
    );

    renderFavorites();

    renderWatchlist();

    renderRecent();
}


// --------------------------------------------
// RECOMMEND BUTTON
// --------------------------------------------

document
    .getElementById(
        "recommendBtn"
    )
    .addEventListener(
        "click",
        () => {

            refreshVisibleContent();

            document
                .getElementById(
                    "recommendationGrid"
                )
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            showToast(
                "Your recommendations are ready ✦"
            );
        }
    );


// --------------------------------------------
// SURPRISE ME
// --------------------------------------------

document
    .getElementById(
        "surpriseBtn"
    )
    .addEventListener(
        "click",
        () => {

            const randomIndex =
                Math.floor(
                    Math.random() *
                    titles.length
                );


            const randomTitle =
                titles[randomIndex];


            openDetails(
                randomTitle.id
            );

        }
    );


// --------------------------------------------
// CLEAR PREFERENCES
// --------------------------------------------

document
    .getElementById(
        "clearPreferences"
    )
    .addEventListener(
        "click",
        () => {

            document
                .querySelector(
                    'input[value="all"]'
                )
                .checked = true;


            document
                .querySelectorAll(
                    ".genre-filter, .mood-filter"
                )
                .forEach(
                    checkbox =>
                        checkbox.checked = false
                );


            languageFilter.value =
                "all";

            ratingFilter.value =
                "0";

            runtimeFilter.value =
                "all";

            sortFilter.value =
                "match";


            refreshVisibleContent();

            showToast(
                "Preferences cleared."
            );
        }
    );


// --------------------------------------------
// NAVIGATION
// --------------------------------------------

document
    .querySelectorAll(
        ".nav-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".nav-btn"
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                const section =
                    button.dataset.section;


                document
                    .getElementById(
                        "discoverSection"
                    )
                    .classList.toggle(
                        "hidden-section",
                        section !==
                        "discover"
                    );


                document
                    .getElementById(
                        "favoritesSection"
                    )
                    .classList.toggle(
                        "hidden-section",
                        section !==
                        "favorites"
                    );


                document
                    .getElementById(
                        "watchlistSection"
                    )
                    .classList.toggle(
                        "hidden-section",
                        section !==
                        "watchlist"
                    );


                document
                    .getElementById(
                        "recentSection"
                    )
                    .classList.toggle(
                        "hidden-section",
                        section !==
                        "discover"
                    );


                if (
                    section ===
                    "favorites"
                ) {

                    renderFavorites();
                }


                if (
                    section ===
                    "watchlist"
                ) {

                    renderWatchlist();
                }


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    });


// --------------------------------------------
// ESCAPE HTML
// --------------------------------------------

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;
}


// --------------------------------------------
// TOAST
// --------------------------------------------

let toastTimer;


function showToast(
    message
) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );
}


// --------------------------------------------
// INITIAL LOAD
// --------------------------------------------

refreshVisibleContent();