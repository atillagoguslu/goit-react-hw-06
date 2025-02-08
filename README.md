# Homework 06 - Redux Implementation

This project continues the development started in homework 03, now integrating Redux for state management. The application manages a list of contacts, allowing users to add, delete, and search for contacts.

## Functionality

- **Add Contact:** Add a new contact with a name and phone number. The form validates input to prevent duplicate contact names.
- **Delete Contact:** Remove a contact from the list by clicking a delete button associated with each contact.
- **Search Contact:** Filter the contact list in real-time based on a search query entered in the search box. The filter is case-insensitive.
- **State Management:** Utilizes Redux Toolkit for managing the application's state, including contacts and the filter query. Redux Persist is used to save and load the contacts from local storage.

## Technologies Used

- React
- Redux Toolkit
- Redux Persist
- CSS Modules
- JavaScript
