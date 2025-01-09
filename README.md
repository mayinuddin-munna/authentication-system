# JWT Authentication Frontend Task

### This is a React-based front-end application designed to demonstrate user authentication, token management, and job listing functionality using React, Redux Toolkit, JWT, and session management with Session Storage and Browser Cookies.

## Features

### User Authentication:
    * User registration.
    * User login with JWT-based authentication.
### Token Management:
    * Access and refresh tokens stored securely.
    * Automatic token refresh before expiry.
### Job Listing:
    * Fetch and display a list of jobs after login.
### Session Handling:
    * User remains logged in across page reloads.
    * Automatic token validation and refresh.
### Logout:
    * Clear all session data and redirect to login.

## Tech Stack

   1. React: Front-end framework.
   2. Redux Toolkit: State management.
   3. React Router: For routing and protected routes.
   4. Axios: HTTP client for API requests.
   5. js-cookie: For managing browser cookies.
   6. Tailwind CSS: For styling the UI.

## Requirements

   * Node.js (>=14.x)
   * npm or yarn

# Installation and Setup

1. Clone the repository
``` bash
git clone <repository-url>
cd jwt-auth-task
```

2. Install dependencies
``` bash
npm install or yarn
```

3. Start the development server
``` bash
npm start or yarn start
```

## Folder Structure
``` bash
src/
├── api/                # API functions
│   ├── auth.js         # Authentication-related API requests
│   └── job.js          # Job-related API requests
├── components/         # Reusable components
│   ├── Auth.js         # Authentication (Login/Register) form
│   └── JobList.js      # Job list display
├── features/           # Redux slices
│   ├── authSlice.js    # Authentication state
│   └── jobSlice.js     # Job data state
├── pages/              # Page components
│   ├── Login.js        # Login page
│   ├── Register.js     # Register page
│   └── Dashboard.js    # Job list page
├── hooks/              # Custom hooks
│   └── useAuth.js      # Handle token refresh logic
├── utils/              # Utility functions
│   └── cookies.js      # Cookie helper functions
├── App.js              # Main app entry
├── store.js            # Redux store setup
└── index.js            # ReactDOM entry
