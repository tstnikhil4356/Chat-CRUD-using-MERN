Nice 🔥 since you’re using **MongoDB** as your database, I’ll update the **README.md** so it clearly explains that part too. Here’s the polished version 👇

---

# 📌 CRUD Message Cards App

This project is a simple **CRUD (Create, Read, Update, Delete)** application built with **HTML, CSS, JavaScript, Node.js, Express, and MongoDB**.

It allows users to create and manage message cards with full database support, so all cards are stored persistently in **MongoDB**.

---

## ✨ Features

* ➕ **Add Card** – Create a new message card and save it in MongoDB.
* 📖 **View Cards** – Fetch and display all message cards from the database.
* ✏️ **Edit Card** – Update the content of a card directly in the database.
* ❌ **Delete Card** – Remove a card permanently from MongoDB.
* ⚡ **Express API** – Handles backend logic with RESTful routes.
* 🎨 **Clean UI** – Built with HTML, CSS, and JS for an easy-to-use interface.

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (with Mongoose ODM)

---

## 📂 Project Structure

```
crud-message-cards/
│-- public/
│   │-- style.css
│   │-- script.js
│-- views/
│   │-- index.ejs
│-- models/
│   │-- Card.js
│-- routes/
│   │-- cardRoutes.js
│-- server.js
│-- package.json
│-- README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crud-message-cards.git
cd crud-message-cards
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

* Install [MongoDB](https://www.mongodb.com/) locally **or** create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas).
* Create a `.env` file in the project root and add:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDB
PORT=3000
```

### 4. Run the Server

```bash
node server.js
```

App will be available at:
👉 `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/cards`     | Get all cards       |
| POST   | `/cards`     | Add a new card      |
| PUT    | `/cards/:id` | Update a card by ID |
| DELETE | `/cards/:id` | Delete a card by ID |

---

## 📸 Demo Screenshot

*Add a screenshot or GIF of your app here.*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

---

Do you also want me to **write a sample `Card.js` model + Express routes (`cardRoutes.js`)** in the README so others can instantly understand how MongoDB is integrated?
