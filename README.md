# 🧑‍💼 Job Portal Application

A full-stack Job Portal built with:

- ⚛️ React (Frontend)
- 🚀 Laravel (Backend API)
- 🗄 MySQL (Database)
- 🔐 JWT / Token-based Admin Authentication

This application allows:

## 👨‍💻 Users
- View all job listings
- Search jobs by title
- View job details
- Submit job applications
- Receive validation feedback

## 🛠 Admin
- Login securely
- Create new jobs
- Delete jobs
- Manage job listings

---

# 🏗 Project Structure
```bash
job-board-application/
│
├── laravel folders (Laravel API)
├── database/ (Migrations & Seeders)
├── .
├── .
├── .
└── frontend/ (React App)
```
---

# 🚀 How to Run the Project Locally

---

# 🔹 1. Backend Setup (Laravel)

## 📦 Requirements

- PHP >= 8.1
- Composer
- MySQL
- Node.js (for Laravel Vite if needed)

---

## 🛠 Installation Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/avilashsaha035/job-board-application.git
```

### 2️⃣ Navigate to project folder

```bash
cd job-board-application
```

### 3️⃣ Install dependencies

```bash
composer install
```

### 4️⃣ Create .env file

```bash
cp .env.example .env
```

### 5️⃣ Configure Environment Variables

- Open .env and update:

```bash
APP_KEY=base64:+Sn6LjTRVUmOknoDoTX6HL/OVrsbRnWvLMzbbq6OTu4=    # create key to run this command "php artisan key:generate"
APP_DEBUG=false
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=job_board
DB_USERNAME=root
DB_PASSWORD=
```

### 6️⃣ Run Migrations

```bash
php artisan migrate --seed
```

### 7️⃣ Start Laravel Server

```bash
php artisan serve
```


# 🔹 2. Frontend Setup (React)

## 📦 Requirements

- Node.js >= 18
- npm or yarn
---

## 🛠 Installation Steps

### 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Make sure your Axios base URL matches this value

Example (src/api/axios.js):

```bash
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default api;
```

### 4️⃣ Start React App

```bash
npm start
```
