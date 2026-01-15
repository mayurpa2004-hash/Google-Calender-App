### ⚠️ IMPORTANT BEFORE UPLOADING

**Security Warning:** currently, your `script.js` contains your **REAL** Client ID and API Key. If you upload this to GitHub, anyone can see them.

* **Option A (Safe):** Open `script.js` and replace your keys with `'YOUR_CLIENT_ID_HERE'` before uploading.
* **Option B (Easy):** If you don't care about security for this college project, you can upload it as is, but Google might auto-disable the keys if they detect a leak.

---

### 📄 File 1: `Readme.md`

**Action:** Create a file named `Readme.md` in your main folder and paste this code.

```markdown
# 📅 Google Calendar Clone

A fully functional **Schedule Management App** that integrates with **Google Calendar**. 
This project allows users to securely log in with their Google account, view their upcoming events in a real-time calendar grid, and add new events directly from the dashboard.

## 🚀 Features
* **Secure Login:** Uses **OAuth 2.0** (Google Identity Services) for secure authentication.
* **View Schedule:** Fetches real-time events from your Google Calendar.
* **Add Events:** Create new events (Title, Date, Time) that instantly sync to your Google account.
* **Professional UI:** Built with **FullCalendar.js** for a responsive monthly grid view.
* **Real-time Clock:** Displays the current time dynamically.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Backend/Server:** Node.js, Express.js (used to serve the application).
* **APIs Used:** * Google Calendar API (v3)
    * Google Identity Services (OAuth 2.0)
* **Libraries:** FullCalendar.js (for the grid UI).

---

## ⚙️ How to Run Locally

Follow these steps to run the project on your machine:

### 1. Prerequisites
Make sure you have **Node.js** installed.
* Download here: [nodejs.org](https://nodejs.org/)

### 2. Clone or Download
Download this repository to your computer and open the folder in **VS Code**.

### 3. Install Dependencies
Open the Terminal in VS Code (`Ctrl + ~`) and run:
```bash
npm install

```

### 4. Setup Google Keys

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project and enable **Google Calendar API**.
3. Create OAuth 2.0 Credentials (Client ID).
4. Open `Public/script.js` and replace the keys at the top:

```javascript
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const API_KEY = 'YOUR_API_KEY_HERE';

```

### 5. Start the Server

Run the following command in the terminal:

```bash
node server.js

```

### 6. Open in Browser

Go to your browser and type:
[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

---

## 📸 Screenshots

*(You can upload screenshots of your login page and calendar view here later)*

---

## 👨‍💻 Author

**Mayur** BBA Final Year Student | Jalgaon

*Aspiring MBA | Tech Enthusiast*

```

---

### 📄 File 2: `VIVA_GUIDE.md`
**Action:** Create a file named `VIVA_GUIDE.md`. Keep this for yourself to study before your exam/viva.

```markdown
# 🎓 Final Year Project - Viva Questions & Answers
**Project:** Google Calendar Clone
**Student:** Mayur

---

## 1. Project Introduction (The Elevator Pitch)
**Examiner:** "Tell me about your project."

**Answer:** "My project is a **Google Calendar Clone**. It is a web application that helps users manage their daily schedule efficiently. 
It integrates directly with the **Google Calendar API**, allowing users to **Log In** securely using their Google account, **View** their upcoming events, and **Add** new tasks. 
I built this using **Node.js** for the server and **Vanilla JavaScript** for the API logic."

---

## 2. Technical Questions

### Q: What technologies did you use?
**A:** * **Frontend:** HTML for structure, CSS for styling, and JavaScript for logic.
* **Library:** I used `FullCalendar.js` to display the calendar grid nicely.
* **Backend:** I used **Node.js** and **Express** to create a local server that hosts the application.
* **API:** I used Google's **OAuth 2.0** for login and **Calendar API v3** to fetch data.

### Q: How does the Login work?
**A:** It uses **OAuth 2.0** (Open Authorization). 
1. When the user clicks "Sign In", a request is sent to Google's servers.
2. The user approves access in the popup window.
3. Google sends back an **Access Token**.
4. My app uses this token as a "key" to fetch their private calendar events.
*Note: We never see or save the user's password.*

### Q: Where is your Database?
**A:** I don't need a local database like SQL or MongoDB. The data is stored in **Google's Cloud Database**. My application acts as an interface (UI) to fetch and display that data using API calls.

### Q: What is `node_modules`?
**A:** It is a folder that contains all the external libraries (dependencies) required by the project, like `express`. It is automatically created when we run `npm install`.

### Q: Why did you use `async` and `await` in your code?
**A:** Fetching data from Google takes time (it's asynchronous). 
* `await` tells JavaScript to "pause and wait" until the data arrives before moving to the next line.
* If we didn't use this, the calendar might try to load before the events are ready, resulting in an empty screen.

---

## 3. Explaining the Code Flow

1.  **Server Starts:** `node server.js` starts the Express server on Port 3000.
2.  **User Visits:** The browser loads `index.html` from the `Public` folder.
3.  **Scripts Load:** The app loads Google's API scripts (`gapi` and `gis`).
4.  **User Logins:** The `handleAuthClick()` function runs, requesting permission.
5.  **Fetch Data:** Once logged in, `listUpcomingEvents()` calls the Google API.
6.  **Display:** The data is passed to `FullCalendar`, which draws the blue events on the screen.

---

## 4. Future Improvements
**Examiner:** "What else could you add?"
**A:** 1.  **Delete/Edit Events:** Currently, I can only add. I would like to add buttons to update or delete events.
2.  **Mobile App:** Convert this website into a React Native app for phones.
3.  **Reminders:** Add SMS or Email notifications before an event starts.

```
