# Book List Web App

A full-stack web app for searching books via Open Library and saving favorites to a local database.

## Tech Stack

- Frontend: React + Vite + React Router
- Backend: ASP.NET Core Web API (.NET 9)
- Database: MySQL (via Entity Framework Core + Pomelo)
- External API: Open Library Search API

## Project Structure

- `FrontEnd/` - React client
- `BackEnd/BackEnd/` - ASP.NET Core API project
- `BooksWebApp.sln` - Visual Studio solution

## Features

- Search books by title
- Display book covers from Open Library
- Save books to favorites
- View saved favorites
- Remove favorites

## Prerequisites

Install these before running the project:

- .NET SDK 9.0
- Node.js 18+ and npm
- MySQL Server

## Configuration

Backend connection string is configured in:

- `BackEnd/BackEnd/appsettings.json`

Current value:

```json
"ConnectionStrings": {
  "BooksConnection": "server=localhost;database=books_db;user=root;password=titale"
}
```

Update this value to match your local MySQL credentials if needed.

## Database Setup

1. Create the database in MySQL:

```sql
CREATE DATABASE books_db;
```

2. Ensure the user in your connection string has access to that database.

Note: This repository currently does not include an EF Core migrations folder, so table creation is expected to happen through your existing workflow (or manually).

## Running the App

Run backend and frontend in separate terminals.

### 1) Start the backend API

```powershell
cd BackEnd/BackEnd
dotnet restore
dotnet run
```

By default, backend runs at:

- `http://localhost:5092`

API base route:

- `http://localhost:5092/api/book`

### 2) Start the frontend

```powershell
cd FrontEnd
npm install
npm run dev
```

Vite dev server runs at:

- `http://localhost:5173`

## API Endpoints

Base URL: `http://localhost:5092/api/book`

- `GET /api/book` - list favorite books
- `GET /api/book/{id}` - get a favorite by id
- `POST /api/book` - create a favorite
- `DELETE /api/book/{id}` - delete a favorite

Example `POST` body:

```json
{
  "Title": "The Hobbit",
  "CoverUrl": "https://covers.openlibrary.org/b/id/6979861-M.jpg"
}
```

## Images

<img width="1914" height="1061" alt="image" src="https://github.com/user-attachments/assets/b08fb197-d86f-49eb-823d-2b465f69427a" />

<img width="1916" height="1061" alt="image" src="https://github.com/user-attachments/assets/83d52e83-e0be-4a91-878a-acee179835fc" />
