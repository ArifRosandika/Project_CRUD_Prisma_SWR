# CRUD Project with Prisma, Express, React, SWR & TailwindCSS

A full-stack CRUD application built with **Express + Prisma** (backend) and **React + SWR + TailwindCSS** (frontend).  
This project demonstrates modern development practices such as API consumption, efficient data fetching, and clean UI styling.

---

## 🚀 Tech Stack

### Backend
- [Express](https://expressjs.com/) – Web framework for building RESTful APIs
- [Prisma](https://www.prisma.io/) – Type-safe ORM for database access
- [Multer](https://github.com/expressjs/multer) – File upload middleware
- [Dotenv](https://github.com/motdotla/dotenv) – Environment variable management
- [CORS](https://github.com/expressjs/cors) – Middleware for cross-origin requests

### Frontend
- [React](https://react.dev/) – Frontend library
- [React Router](https://reactrouter.com/) – Client-side routing
- [SWR](https://swr.vercel.app/) – Data fetching & caching
- [Axios](https://axios-http.com/) – HTTP client
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework

---

## 📂 Project Structure

Project_CRUD_Prisma_SWR/
│
├── Backend/                 # Express + Prisma backend
│   ├── controller/          # Controller logic
│   │   └── controllerProduct.js
│   ├── prisma/              # Prisma schema & migrations
│   │   ├── migrations/
│   │   │   └──  20250901144255_a/
│   │   └── schema.prisma
│   ├── routers/             # API routing
│   │   └── router.js
│   ├── .env                 # Environment variables
│   ├── index.js             # Main server file
│   ├── request.rest         # REST client (for testing API)
│   └── package.json
│
├── Frontend/                # React + SWR + Tailwind frontend
│   ├── public/              # Static assets
│   ├── src/                 
│   │   ├── assets/          # Images, icons, etc.
│   │   ├── component/       # Reusable components
│   │   │   ├── ListProduct.jsx
│   │   │   ├── ProductAdd.jsx
│   │   │   ├── ProductEdit.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md                # Documentation


yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone repository
```bash
git clone https://github.com/ArifRosandika/Project_CRUD_Prisma_SWR.git
cd Project_CRUD_Prisma_SWR
2️⃣ Backend setup
bash
Copy code
cd backend
npm install
Create .env file:

env
Copy code
DATABASE_URL="mysql://root:password@localhost:3306/your_db"
PORT=5000
Run Prisma migration:

bash
Copy code
npx prisma migrate dev --name init
Start backend:

bash
Copy code
npm run dev
3️⃣ Frontend setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend will run at: http://localhost:5173
Backend will run at: http://localhost:5000

📌 Features
✅ Create, Read, Update, Delete (CRUD) operations
✅ API built with Express + Prisma
✅ React frontend with SWR for data fetching & caching
✅ TailwindCSS for modern UI styling
✅ Multer integration for file uploads

📜 License
This project is licensed under the ISC License – free to use and modify.

👨‍💻 Author
Developed by Arif Rosandika
📧 [arifrosandika@gmail.com]
