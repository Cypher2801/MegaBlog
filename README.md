# ✍️ Blogging Application with React, Redux & Appwrite 🚀

## 🌟 Overview

This project is a **modern blogging platform** built using **React** with **Redux** for state management, **React Hook Form** for efficient form handling, and **Tailwind CSS** for sleek styling. The powerful **TinyMCE editor** is integrated for rich text editing, and **Appwrite** is used as the backend service for authentication, database, and storage.

## 🚀 Features

✅ **User Authentication** (Sign up, Login, Logout) 🔐  
✅ **Create, Edit & Delete Blog Posts** 📝  
✅ **Rich Text Editing** with TinyMCE 🎨  
✅ **Image Upload & Management** via Appwrite 🖼️  
✅ **Responsive & Modern UI** with Tailwind CSS 📱  
✅ **Redux for State Management** ⚡  
✅ **Form Validation** with React Hook Form ✅  
✅ **SEO-Friendly URLs** 🔍  

## 🛠️ Technologies Used

- **⚛️ React.js** – Frontend Framework
- **🎭 Redux** – State Management
- **📜 React Hook Form** – Form Handling
- **💅 Tailwind CSS** – Styling Framework
- **📝 TinyMCE** – Rich Text Editor
- **☁️ Appwrite** – Backend as a Service (Authentication, Database, File Storage)

## 🏗️ Installation

### 🔹 Prerequisites

Ensure you have the following installed:

- **🖥️ Node.js** (v16 or later recommended)
- **📦 npm or yarn** (for package management)
- **☁️ Appwrite** (Self-hosted or cloud instance)

### 🔧 Setup Instructions

1️⃣ Clone the repository:
   ```sh
   git clone https://github.com/Cypher2801/MegaBlog.git
   cd MegaBlog
   ```

2️⃣ Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

3️⃣ Configure Appwrite by creating a `.env` file:
   ```env
   REACT_APP_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_DATABASE_ID=your_database_id
   REACT_APP_BUCKET_ID=your_bucket_id
   ```

4️⃣ Start the development server:
   ```sh
   npm start  # or yarn start
   ```

   ## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://res.cloudinary.com/darolhghb/image/upload/v1738851018/blog/oymqlqfy5jlpcp95x2yl.png)

### 📝 Blog Editor
<p align="center">
  <img src="https://res.cloudinary.com/darolhghb/image/upload/v1738851016/blog/vjuypag3mo3xbaq9opmt.png" alt="Editor" width="700">
</p>

### 📝 Blog Page
<p align="center">
  <img src="https://res.cloudinary.com/darolhghb/image/upload/v1738851018/blog/zact6qrnv754hvfthetz.png" alt="Editor" width="700">
</p>


## 🔌 Folder Structure
```
📂 blogging-app/
├── 📂 src/
│   ├── 📂 components/   # Reusable UI components
│   ├── 📂 pages/        # Application pages (Home, Blog, Profile, etc.)
│   ├── 📂 store/        # Redux slices & store configuration
│   ├── 📂 appwrite/     # Appwrite API calls
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│
├── .env                # Environment variables
├── package.json        # Project dependencies
├── README.md           # Project documentation
```

