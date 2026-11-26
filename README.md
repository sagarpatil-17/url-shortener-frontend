# SnapURL – URL Shortener Frontend

A modern, responsive URL shortener application built with **Angular** and **Tailwind CSS**. SnapURL allows users to convert long URLs into short, shareable links with a simple and intuitive interface.

## 🚀 Features

- **URL Shortening:** Convert long URLs into short links instantly.
- **One-Click Copy:** Copy generated short URLs to the clipboard.
- **Input Validation:** Validate URLs before submitting requests.
- **API Integration:** Connect with the SnapURL backend REST API.
- **Loading States:** Display feedback while generating short URLs.
- **Error Handling:** Show meaningful error messages for failed requests.
- **Responsive UI:** Optimized for desktop, tablet, and mobile devices.
- **Clean Interface:** Simple and user-friendly design.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Angular | Frontend framework |
| TypeScript | Application logic |
| Tailwind CSS | Styling and responsive design |
| RxJS | Asynchronous API handling |
| Angular Reactive Forms | Form validation and management |
| Angular HttpClient | Backend API communication |

## 📁 Project Structure

```text
snapurl-frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── url.model.ts
│   │   │   └── services/
│   │   │       └── url.service.ts
│   │   ├── features/
│   │   │   └── home/
│   │   │       ├── home.component.ts
│   │   │       ├── home.component.html
│   │   │       └── home.component.css
│   │   ├── shared/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Angular CLI
- SnapURL backend API

### 1. Clone the Repository

```bash
git clone https://github.com/sagarpatil-17/url-shortener-frontend.git
```

### 2. Navigate to the Project

```bash
cd url-shortener-frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
ng serve
```

Open your browser and navigate to:

```text
http://localhost:4200
```

The application automatically reloads when source files change.

## 🔗 Backend Integration

SnapURL frontend communicates with the SnapURL backend through REST APIs.

**Backend URL:**

```text
http://localhost:8080
```

**API Base URL:**

```text
http://localhost:8080/api/v1
```

### Create Short URL

| Property | Value |
|---|---|
| Method | POST |
| Endpoint | `/api/v1/urls` |
| Content-Type | `application/json` |

**Request Body:**

```json
{
  "originalUrl": "https://www.example.com/some/very/long/url"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Short URL created successfully",
  "data": {
    "id": "example-id",
    "originalUrl": "https://www.example.com/some/very/long/url",
    "shortCode": "Ab12Cd34",
    "shortUrl": "http://localhost:8080/Ab12Cd34",
    "clicks": 0,
    "createdAt": "2026-11-26T10:00:00.000Z"
  }
}
```

> Make sure the backend server is running before using the frontend application.

## 🧑‍💻 Development

Run the development server:

```bash
ng serve
```

Build the application:

```bash
ng build
```

Run unit tests:

```bash
ng test
```

## 🔒 Security & Validation

- Client-side URL validation using Angular Reactive Forms.
- Server-side URL validation handled by the backend.
- API error handling for unsuccessful requests.
- Backend rate limiting to help prevent excessive URL creation requests.

## 🗺️ Future Enhancements

- URL analytics dashboard.
- Click tracking and statistics.
- QR code generation.
- URL expiration management.
- Improved user notifications.

## 👨‍💻 Author

**Sagar Patil**

Full Stack Developer | Angular | Node.js | MongoDB

---

⭐ If you find this project useful, consider giving it a star!