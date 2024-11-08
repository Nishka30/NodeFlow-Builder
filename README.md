# VectorShift Frontend Technical Assessment

This repository contains the completed frontend technical assessment for VectorShift, utilizing **React** for the frontend and **FastAPI** for the backend. The assessment consists of four key parts: Node Abstraction, Styling, Text Node Logic, and Backend Integration. 

## Project Overview

The project focuses on building a dynamic pipeline system with various types of nodes that can be easily created, styled, and managed. Key features include creating node abstractions for easy scalability, dynamic styling for a unified interface, text input handling with variable recognition, and backend integration for pipeline processing.

## Features

### Part 1: Node Abstraction
- Created an efficient abstraction for different node types (input, output, LLM, and text nodes) to avoid code duplication.
- Designed five custom nodes to demonstrate the flexibility and ease of creating new node types with this abstraction.

### Part 2: Styling
- Applied custom styling to enhance the UI and create a cohesive look and feel across all components.
- Leveraged CSS and React styling libraries to develop a visually appealing and responsive design.

### Part 3: Text Node Logic
- Enabled dynamic resizing of the Text node based on user input to improve text visibility.
- Added functionality to recognize JavaScript-style variables within double curly brackets (`{{ variable }}`) and create corresponding Handles automatically on the Text node.

### Part 4: Backend Integration
- Integrated with a FastAPI backend, allowing the frontend to send pipeline data to the backend's `/pipelines/parse` endpoint.
- Developed backend logic to analyze the pipeline structure, checking for the number of nodes and edges and validating if the pipeline forms a Directed Acyclic Graph (DAG).
- Displayed backend results on the frontend using a user-friendly alert, showing node count, edge count, and DAG validation status.

## Getting Started

Follow the steps below to run the frontend and backend servers.

### Prerequisites
Ensure you have **Node.js** and **Python** installed.

### Installation and Setup

1. **Frontend**
   - Navigate to the `/frontend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

2. **Backend**
   - Navigate to the `/backend` directory.
   - Start the backend server using **Uvicorn**:
     ```bash
     uvicorn main:app --reload
     ```

## Technology Stack
- **Frontend**: JavaScript, React
- **Backend**: Python, FastAPI

## Project Highlights
This project demonstrates efficient component abstraction, responsive and dynamic UI design, and seamless backend integration for handling pipeline analysis. The code is modular, maintainable, and easily extensible for future node types or features.

## Contact
For any questions or issues, please reach out to VectorShift recruiting at [recruiting@vectorshift.ai](mailto:recruiting@vectorshift.ai).

---

Thank you for exploring this project!
