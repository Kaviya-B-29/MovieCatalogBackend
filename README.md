🎬 Movie Catalog Backend

A Node.js + Express backend service for the Movie Catalog application.  
This backend proxies movie data from the OMDb API and provides REST APIs to manage a persistent watchlist using MongoDB.

---

## 🚀 Features

- Proxy integration with OMDb API
- Movie and series search API
- Movie details API
- Watchlist CRUD operations
- MongoDB persistence
- Environment variable support
- CORS-enabled for frontend communication

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
- dotenv
- nodemon

---

## 📂 API Endpoints

### 🎥 Movies
- `GET /api/movies/search`
- `GET /api/movies/:id`

### 📌 Watchlist
- `POST /api/watchlist`
- `GET /api/watchlist`
- `DELETE /api/watchlist/:id`

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` folder:

```env
OMDB_API_KEY=your_omdb_api_key
MONGO_URI=mongodb://127.0.0.1:27017/moviecatalog
