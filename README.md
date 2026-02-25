# 1. TextForge API

TextForge is a professional REST API built with Node.js and Express.  
It allows developers to clean, normalize, and process text programmatically in a consistent and reliable way.

---

## 2. Features

- Trims extra spaces
- Fixes sentence casing (not ALL CAPS or Title Case)
- Removes repeated or invalid punctuation (e.g. `???`, `,,,`)
- Preserves valid punctuation (`.`, `,`, `'`)
- Removes emojis
- Built-in rate limiting (100 requests per IP)

---

## 3. Base URL

### 3.1 Production

https://your-api-domain.com/api

### 3.2 Local Development

http://localhost:5000/api

---

## 4. API Endpoints

### 4.1 POST `/text/process`

Processes text and returns a cleaned and normalized version.

#### Request Body (JSON)

```json
{
  "text": "Once upOn a time???? there     was a woodcutter 🥳😍"
}
```

#### Success Response (JSON)

```json
{
  "original": "Once upOn a time???? there     was a woodcutter 🥳😍",
  "processed": "Once upon a time there was a woodcutter"
}
```

### 4.2 GET `/health`

Processes a health-check request to verify that the API service is running.

#### Response (JSON)

```json
{
  "status": "success",
  "message": "TextForge API is running"
}
```

---

## 5. Rate Limiting

TextForge API enforces a rate limit to prevent abuse.

- Maximum **100 requests per IP address**
- Requests exceeding the limit return **HTTP 429 (Too Many Requests)**

### 5.1 Error Response (JSON)

```json
{
  "status": "error",
  "message": "Too many requests, please try again later"
}
```

---

## 6. Installation (Local Development)

Follow these steps to run TextForge API locally.

### 6.1 Clone the repository

```bash
git clone https://github.com/yourusername/TextForge.git
cd TextForge
```

### 6.2 Install dependencies

```bash
npm install
```

### 6.3 Start the server

```bash
npm start
```

The server will run at:

http://localhost:5000

---

## 7. Project Structure

```text
TextForge/
 ├─ src/
 │   ├─ index.js
 │   ├─ routes/
 │   │   └─ text.routes.js
 │   ├─ controllers/
 │   │   └─ text.controller.js
 │   ├─ utils/
 │   │   ├─ text.processor.js
 │   │   └─ response.js
 │   └─ middleware/
 │       └─ rate.limit.js
 ├─ .env
 ├─ package.json
 ├─ package-lock.json
 └─ README.md
```

---

## 8. License

This project is licensed under the **MIT License**.