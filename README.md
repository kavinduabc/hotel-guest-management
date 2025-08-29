# hotel-guest-management

## Running the Project

### Prerequisites

- **Node.js**: v18.x or higher (recommended)
- **PocketBase**: Download from [https://pocketbase.io/](https://pocketbase.io/)

---

### 1. Start the Backend (PocketBase)

1. Open a terminal and navigate to the `server` folder:

    ```sh
    cd server
    ```

2. Start PocketBase:

    ```sh
    ./pocketbase.exe serve
    ```

3. Access the PocketBase admin UI at [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)

    - **Admin Email:** `piumalranepura@gmail.com`
    - **Admin Password:** `@Kavi123@@`

---

### 2. Start the Frontend (React)

1. Open a new terminal and navigate to the `client` folder:

    ```sh
    cd client
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

### Notes

- Make sure both the backend and frontend servers are running for full functionality.
- The frontend expects PocketBase to be running at `http://127.0.0.1:8090`.
- If you change the admin credentials, update them in [`client/src/Api/ApiFunctions.ts`](client/src/Api/ApiFunctions.ts) where `admins.authWithPassword("piumalranepura@gmail.com", "@Kavi123@@")` is used.

## API Functions Documentation

This section describes the functions implemented in [`ApiFunctions.ts`](client/src/Api/ApiFunctions.ts) for interacting with the PocketBase backend.

### 1. `createGuest(data)`

Creates a new guest record in the "guests" collection.

- **Parameters:**
  - `data`: An object containing guest details:
    - `first_name` (string, required)
    - `last_name` (string, required)
    - `email` (string, required, must be unique)
    - `phone` (string, optional)
    - `address` (string, optional)
    - `date_of_birth` (string, optional, date format)
- **Behavior:**
  - Checks if the provided email already exists in the collection.
  - Throws an error if the email is not unique.
  - Creates the guest record if validation passes.
- **Returns:** The created guest record object.

---

### 2. `getGuest()`

Fetches all guest records from the "guests" collection.

- **Parameters:** None
- **Behavior:**
  - Retrieves the full list of guests.
- **Returns:** An array of guest record objects.

---

### 3. `getGuestById(id)`

Fetches a single guest record by its ID.

- **Parameters:**
  - `id` (string): The unique ID of the guest.
- **Behavior:**
  - Retrieves the guest record matching the provided ID.
- **Returns:** The guest record object.

---

### 4. `updateGuest(id, data)`

Updates an existing guest record.

- **Parameters:**
  - `id` (string): The unique ID of the guest to update.
  - `data` (object): The updated guest details.
- **Behavior:**
  - Updates the guest record with the provided data.
- **Returns:** The updated guest record object.

---

### 5. `DeleteGuestById(id)`

Deletes a guest record by its ID.

- **Parameters:**
  - `id` (string): The unique ID of the guest to delete.
- **Behavior:**
  - Deletes the guest record from the collection.
- **Returns:** The deleted guest record object (or confirmation).

---

## Usage

All functions use the PocketBase JavaScript SDK and require the backend server to be running and accessible. Error handling is implemented for each function, and errors are logged to the console.

For more details, see the implementation in [client/src/Api/ApiFunctions.ts](client/src/Api/ApiFunctions.ts).


<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/7dd34c69-7f18-4661-84e6-9a418343669c" />


