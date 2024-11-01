# SE2-Kiruna eXplorer

## Git Branch Management

- **`main`**: For final releases, tagged with **final**.
- **`dev`**: Stable development branch for ongoing work.
- **`feature/name`**: For individual features (e.g., `feature/KX1`, `feature/KX2`), merged to `dev` when stable.


## Getting Started

To run the project locally, follow these steps:

### In cliend folder
1. Install the dependencies with the following command:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

### In server folder
1. Install the required dependencies with the following command:

    ```bash
    npm install
    ```

2. If this is your first time running the project, initialize the database by executing:

    ```bash
    node init_db.mjs
    ```

3. Start the Server

    ```bash
    nodemon server.mjs
    ```


This will start the project and you can access it in your browser.
