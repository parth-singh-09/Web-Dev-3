# Student Management REST API

Simple Express.js REST API for managing student records (in-memory array, no database).

## Setup

```bash
npm install
npm start
```

Server runs at `http://localhost:3000`

## Endpoints

| Method | Route            | Description         |
|--------|------------------|----------------------|
| GET    | /students        | Get all students     |
| GET    | /students/:id    | Get one student      |
| POST   | /students        | Create a student     |
| PUT    | /students/:id    | Update a student     |
| DELETE | /students/:id    | Delete a student     |

## Example: create a student (POST /students)

Body (JSON):
```json
{ "name": "Sneha", "course": "BSc" }
```

## Status codes used

- 200 Success
- 201 Created
- 400 Bad Request (missing required fields)
- 404 Not Found (student id doesn't exist)
- 500 Internal Server Error (unexpected errors)
