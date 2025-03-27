# Kenzie Expense Tracker

Kenzie Expense Tracker is a web application designed to help users manage their personal finances by tracking income and expenses.

## Features

- **Add Transactions**: Record income and expense transactions with details such as amount, category, and date.
- **View Transaction History**: Review a list of all recorded transactions.
- **Categorize Expenses**: Organize expenses into categories for better financial analysis.

## Project Structure

The repository is organized into two main directories:

- `frontend`: Contains the client-side code, including HTML, CSS, and JavaScript files.
- `backend`: Contains the server-side code to handle data processing and storage.

## Technologies Used

- **Frontend**:
    - HTML
    - CSS
    - JavaScript

- **Backend**:
    - [Specify backend technologies here, e.g., Node.js, Express]
    - [Specify database used here, e.g., MongoDB, PostgreSQL]

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mackenzies1818/kenzie-expense-tracker.git
   
2. **Installing Backend Dependencies**: 
   ```bash
   cd /backend
   npm install

3. **Starting DB server**:
   ```bash
   mongod --dbpath /path/to/save/db-data 

4. **Starting backend server**:
   ```bash
   cd /backend
   npm run dev
   ```
    It is successful when you see: 
        ```
        Server running on port 5001
        MongoDB connected successfully!
        ```


5. **Installing Front End Dependencies**:
   ```bash
   cd /frontend
   npm install

6. **Starting front end server**:
   ```bash
   cd /backend
   npm run dev
   ```
   It is successful when you see:
   ```
   Compiled successfully!

    You can now view expense-tracker in the browser.
    
    Local:            http://localhost:3000
    On Your Network:  http://192.168.100.231:3000
    
    Note that the development build is not optimized.
    To create a production build, use npm run build.
    
    webpack compiled successfully
   ```

           