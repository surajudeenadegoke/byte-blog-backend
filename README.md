# ByteBlog Backend 📝

A fullstack **blogging platform backend** built with **Node.js, Express, and MongoDB**.  
This API powers ByteBlog — a platform where users can create, read, update, and delete blog posts, comment on posts, and engage with content.

---------     -----------    ---------

## 🚀 Features

- User authentication (JWT)
- Blog posts CRUD (Create, Read, Update, Delete)
- Comment system
- Role-based access control (Admin & User)
- Error handling & middleware
- MongoDB Atlas integration
- Ready for deployment (Heroku/Render/Vercel backend) To be decided later

----------      ---------    ----------

##  Tech Stack

- Backend: Node.js, Express  
- atabase: MongoDB (Mongoose ODM)  
- uth: JWT, bcrypt  
- Middleware: CORS, Morgan (logging), Custom error handler  

---

## 📂 Project Structure (MVC)

byteblog-backend/
│
├── 📂 config/              # Configuration files (DB, cloud services, etc.)
│   └── db.js               # MongoDB connection setup
│
├── 📂 controllers/         # Business logic (handle requests & responses)
│   ├── authController.js   # User signup/login
│   ├── postController.js   # Blog posts CRUD
│   └── commentController.js# Comments system
│
├── 📂 models/              # Database models (Mongoose schemas)
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
│
├── 📂 routes/              # API endpoints (call controllers)
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── commentRoutes.js
│
├── 📂 middleware/          # Middleware functions
│   ├── authMiddleware.js   # JWT verification
│   └── errorMiddleware.js  # Global error handler
│
├── 📂 utils/               # Helper functions (optional)
│   └── generateToken.js    # JWT token generator
│
├── server.js               # Entry point
├── package.json
└── .env                    # Environment variables

📦 Deployment(later)

Works with Render
-  Railway
- MongoDB Atlas for cloud database

👨‍💻 Author

Adegoke Surajudeen — 
