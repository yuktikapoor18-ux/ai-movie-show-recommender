# 🎬 AI Movie & Show Recommender

A cozy and interactive **AI-style Movie & TV Show Recommendation Website** built using HTML, CSS and JavaScript.

CineMind helps users decide what to watch by combining their preferred genres, mood, content type, language, rating and watch time into a personalized recommendation score.

> ✦ No external API is required.
>
> ✦ No backend is required.
>
> ✦ Recommendations are generated locally using JavaScript.
>
> ✦ Favorites and watchlists are saved using LocalStorage.

---

## 🌐 Live Website

**Website:** https://yuktikapoor18-ux.github.io/ai-movie-show-recommender/

---

## ✨ Features

### 🎬 Movie & TV Show Recommendations

Users can choose whether they want:

- 🎬 Anything
- 🎞️ Movies
- 📺 TV Shows

The recommendation engine then ranks suitable titles.

---

## 🎭 Genre Preferences

Users can select multiple genres.

Available genres include:

- ⚡ Action
- 🗺️ Adventure
- 😂 Comedy
- 🎭 Drama
- 🪄 Fantasy
- 👻 Horror
- 💌 Romance
- 🚀 Sci-Fi
- 🔍 Thriller
- 🕵️ Mystery

Multiple genres can be selected at the same time.

---

## 😊 Mood-Based Recommendations

Users can select the type of experience they want.

Available moods:

- ☀️ Feel-good
- 😂 Funny
- 💭 Emotional
- 🔥 Exciting
- 🌙 Dark
- 🧠 Thoughtful

The recommendation engine uses these preferences when calculating match scores.

---

## 🌍 Language Filter

Users can filter recommendations by language.

Available options:

- English
- Korean
- Japanese
- Hindi
- Any language

---

## ⭐ Rating Filter

Users can choose a minimum rating.

Available options:

- Any rating
- 7.0+
- 8.0+
- 8.5+
- 9.0+

---

## ⏱️ Watch Time Filter

Users can choose how long they want to watch.

Options include:

- Under 100 minutes
- 100–140 minutes
- 140+ minutes
- Any length

---

## ✦ AI-Style Recommendation Engine

CineMind uses a weighted scoring system to create personalized recommendations.

Different preferences contribute different amounts to the final match score.

The system considers:

```text
Content Type
Genre Match
Mood Match
Language
Rating
Runtime
Overall Rating
