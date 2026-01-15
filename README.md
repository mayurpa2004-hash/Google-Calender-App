# 📅 Google Calendar Clone

A fully functional **Schedule Management App** that integrates with **Google Calendar**. 
This project allows users to securely log in with their Google account, view their upcoming events in a real-time calendar grid, and add new events directly from the dashboard.

## 🚀 Features
* **Secure Login:** Uses **OAuth 2.0** (Google Identity Services) for secure authentication.
* **View Schedule:** Fetches real-time events from your Google Calendar.
* **Add Events:** Create new events (Title, Date, Time) that instantly sync to your Google account.
* **Professional UI:** Built with **FullCalendar.js** for a responsive monthly grid view.
* **Real-time Clock:** Displays the current time dynamically in the dashboard.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Backend/Server:** Node.js (can be served via Live Server or Express).
* **APIs Used:** * Google Calendar API (v3) - For reading and writing events.
    * Google Identity Services - For OAuth 2.0 Login.
* **Libraries:** FullCalendar.js (for the calendar grid UI).

---

## ⚙️ How to Run Locally

Follow these steps exactly to run the project on your machine:

### 1. Prerequisites
Make sure you have **Node.js** installed on your laptop (Required for the environment).
* Download and install it from here: [nodejs.org](https://nodejs.org/)

### 2. Download Project
Download this folder to your computer and open it in **VS Code**.

### 3. Install Dependencies
Open the Terminal in VS Code (Press `Ctrl` + `~`) and run this command to install necessary packages:
```bash
npm install
