# Task Manager Docker

A simple task management system built using the MERN stack (MongoDB, Express, React, Node.js) and Docker. This project allows you to manage tasks with CRUD operations and prioritize tasks.

## Features

- **Create, Read, Update, and Delete (CRUD) tasks**: Manage your tasks easily with a user-friendly interface.
- **Priority levels**: Assign priority levels to tasks.
- **Dockerized**: The entire application is containerized using Docker for easy deployment and management.

## Project Structure

- **client/**: Contains the React frontend application.
- **app/**: Contains the Node.js backend application.
- **docker-compose.yml**: Docker Compose configuration file to build and run the client and server containers.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### 1. Clone the Repository

> git clone https://github.com/Frnn4268/task-manager-docker.git

> cd task-manager-docker

### 2. Set Up Environment Variables
Create a `.env `file in the server directory with the following content:

    MONGODB_URI=mongodb://mongo:27017/taskmanager
    PORT=5000

Replace MONGODB_URI with your MongoDB connection string if you're not using Docker for MongoDB.

### 3. Build and Run the Application
Use Docker Compose to build and run the client and server containers:

> docker-compose up --build

This command will build the Docker images for both the client and server, and start the containers.

### 4. Acces the Application:
- Client (React frontend): Open your browser and navigate to http://localhost:3000.

- Server (API): The server API will be accessible at http://localhost:5000.

## Project Configuration

1. Client Configuration: The React frontend is configured to run on port 3000.
2. Server Configuration: The Node.js backend is configured to run on port 5000 and connect to MongoDB.

## Development

To make changes to the project:

1. Client: Make changes in the client directory and rebuild the client Docker image.
2. Server: Make changes in the server directory and rebuild the server Docker image.

## Troubleshooting

- If you encounter issues with Docker Compose, ensure that Docker and Docker Compose are installed correctly.
- For connection issues, verify that MongoDB is accessible at the specified URI.

### Explanation

- **Project Overview**: Brief description of the project's purpose and features.
- **Project Structure**: Describes the directory structure and key files.
- **Prerequisites**: Lists the software required to run the project.
- **Getting Started**: Instructions to clone the repo, set up environment variables, and run the application.
- **Project Configuration**: Details on how the client and server are configured.
- **Development**: Guidelines for making changes to the project.
- **Troubleshooting**: Common issues and their resolutions.

Feel free to adjust any details to better fit your project's specifics or requirements.
