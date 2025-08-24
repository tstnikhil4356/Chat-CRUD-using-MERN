# 📌 CRUD Message Cards App

This is a **CRUD (Create, Read, Update, Delete)** web application built with **Node.js, Express.js, MongoDB, and EJS**.
It allows users to create and manage **chat/message cards** where each card has:

* `from` → Sender
* `to` → Receiver
* `message` → Content of the card
* `created_at` → Timestamp

---

## ✨ Features

* ➕ **Add Chat** – Create a new chat card.
* 📖 **View Chats** – See all saved chats from MongoDB (latest first).
* ✏️ **Edit Chat** – Update an existing chat message.
* ❌ **Delete Chat** – Remove a chat permanently.
* ⚡ **MongoDB Integration** – All chats are stored in a database for persistence.
* 🎨 **EJS Templates** – For rendering dynamic HTML pages.

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript (with EJS templates)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (via Mongoose)

---

## 📂 Project Structure

```
MONGO3/
│-- models/
│   │-- chat.js         # Mongoose schema & model
│-- node_modules/
│-- public/
│   │-- style.css       # Styling
│   │-- script.js       # Client-side JS
│-- views/
│   │-- index.ejs       # List all chats
│   │-- newchat.ejs     # Form to add new chat
│   │-- edit.ejs        # Form to edit chat
│-- index.js            # Main server file
│-- init.js             # (Optional) DB initialization
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

### 3. Configure MongoDB

* Install MongoDB locally **or** use MongoDB Atlas.
* Create a `.env` file in the root:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDB
PORT=3000
```

### 4. Start the Server

```bash
node index.js
```

Now open 👉 `http://localhost:3000` in your browser.

---

## 📡 API Endpoints

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | `/chats`          | Fetch all chats         |
| GET    | `/chats/new`      | Form to create new chat |
| POST   | `/chats`          | Save new chat to DB     |
| GET    | `/chats/:id/edit` | Form to edit a chat     |
| PUT    | `/chats/:id`      | Update chat in DB       |
| DELETE | `/chats/:id`      | Delete a chat           |

---

## 📸 Demo Screenshot

![Home Page](./000.jpg)

![Add Chat Page](./001.jpg)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

