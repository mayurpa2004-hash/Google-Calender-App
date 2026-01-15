/* GOOGLE CALENDAR APP - LOGIC */

// ==========================================
// 🔑 YOUR KEYS (Already Added)
// ==========================================
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const API_KEY = 'YOUR_API_KEY_HERE';
// ==========================================

const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// 🚨 IMPORTANT: Removed ".readonly" so we can ADD events now
const SCOPES = 'https://www.googleapis.com/auth/calendar.events'; 

let tokenClient;
let gapiInited = false;
let gisInited = false;

// 1. Load Google API Library
function gapiLoaded() {
    gapi.load('client', async () => {
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
    });
}

// 2. Load Google Identity Services
function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gisInited = true;
    maybeEnableButtons();
}

function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        document.getElementById('authorize_button').style.display = 'block';
    }
}

// 3. Login
function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error) { throw (resp); }
        showDashboard();
        await listUpcomingEvents();
    };

    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
        tokenClient.requestAccessToken({prompt: ''});
    }
}

// 4. Sign Out
function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
        google.accounts.oauth2.revokeXH(token.access_token);
        gapi.client.setToken('');
        hideDashboard();
    }
}

// Helper to switch screens
function showDashboard() {
    document.getElementById('authorize_button').style.display = 'none';
    document.getElementById('signout_button').style.display = 'block';
    document.getElementById('add_event_btn').style.display = 'block'; // Show Add Button
    document.getElementById('login_msg').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

function hideDashboard() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('authorize_button').style.display = 'block';
    document.getElementById('signout_button').style.display = 'none';
    document.getElementById('add_event_btn').style.display = 'none'; // Hide Add Button
    document.getElementById('login_msg').style.display = 'block';
}

// 5. Fetch Events
async function listUpcomingEvents() {
    const calendarEl = document.getElementById('calendar');
    try {
        const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 50,
            'orderBy': 'startTime'
        };
        const response = await gapi.client.calendar.events.list(request);
        const events = response.result.items;

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            height: 650,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            events: events.map(event => ({
                title: event.summary,
                start: event.start.dateTime || event.start.date,
                end: event.end.dateTime || event.end.date,
                backgroundColor: '#1a73e8',
                borderColor: '#1a73e8'
            }))
        });
        calendar.render();
    } catch (err) {
        console.error("Error fetching events", err);
    }
}

// 6. ADD EVENT LOGIC (New)
async function addEventToGoogle() {
    const title = document.getElementById('ev_title').value;
    const date = document.getElementById('ev_date').value; // Format: YYYY-MM-DD
    const time = document.getElementById('ev_time').value; // Format: HH:MM

    if (!title || !date || !time) {
        alert("Please fill in all fields!");
        return;
    }

    // Combine Date and Time into ISO Format
    const startDateTime = new Date(`${date}T${time}:00`).toISOString();
    const endDateTime = new Date(new Date(`${date}T${time}:00`).getTime() + 60*60*1000).toISOString(); // 1 hour later

    const event = {
        'summary': title,
        'start': {
            'dateTime': startDateTime,
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        'end': {
            'dateTime': endDateTime,
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        }
    };

    try {
        await gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });
        alert("Event Added Successfully! 🎉");
        closeModal(); // Close the popup
        await listUpcomingEvents(); // Refresh calendar
    } catch (error) {
        console.error("Error adding event:", error);
        alert("Failed to add event. Check console.");
    }
}

// 7. Modal Controls
function openModal() { document.getElementById('eventModal').style.display = 'flex'; }
function closeModal() { document.getElementById('eventModal').style.display = 'none'; }

// 8. Clock
function updateClock() {
    const now = new Date();
    document.getElementById('digital_clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

updateClock();
