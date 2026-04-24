# BFHL Hierarchy Visualizer
A full-stack application that processes hierarchical node relationships and visualizes them as trees and detects cycles if any.

# Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** HTML, CSS, JavaScript
- **Deployment:** Render (Backend), Vercel (Frontend)

# API Endpoint
### POST `/bfhl`

# Request:
json
{
  "data": ["A->B", "A->C", "B->D"]
}

# Response:
{
  "user_id": "yourname_ddmmyyyy",
  "email_id": "your@email.com",
  "college_roll_number": "your_roll",
  "hierarchies": [...],
  "invalid_entries": [],
  "duplicate_edges": [],
  "summary": {...}
}

# Local Setup
1. Clone repo
```git clone https://github.com/your-username/bfhl-solution.gitcd bfhl-solution```
2. Install dependencies
```npm install```
3. Run server
```node server/app.js```
4. Open frontend
```Open client/index.html in browser```

# Deployment
Backend: https://bfhl-api-hlvb.onrender.com
Frontend: https://bfhl-solution.vercel.app

# Sample Test Input
A->B,A->B,A->C,X->Y,Y->Z,Z->X,hello,A->

Update your detailsReplace:- `yourname_ddmmyyyy`- `your@email.com`- `your-username`- deployment URLs (after deploying)


