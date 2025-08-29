# hotel-guest-management

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
