# Toy Tales 🧸

Toy Tales is a React web application that allows users to explore a collection of toys, add new toys, like their favourite toys, and donate toys they no longer need.

## Application Screenshot

![Toy Tales Application](screenshots/toy-tales.png)

## Features

- **View Toys:** Display a collection of toys with their names, images, and likes.
- **Add Toys:** Create new toys by entering a name and image URL.
- **Like Toys:** Increase the number of likes on a toy.
- **Donate Toys:** Remove toys from the collection by donating them.
- **Dynamic Updates:** Update the toy collection without refreshing the page.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- JSON Server

## Installation and Setup

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate into the project directory:

   ```bash
   cd react-hooks-toy-tales-vite
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the JSON Server:

   ```bash
   npx json-server --watch db.json --port 3001
   ```

5. In another terminal, start the React application:

   ```bash
   npm run dev
   ```

6. Open the local URL provided by Vite in your browser.

## Running Tests

Run the project tests using:

```bash
npm test
```

## Project Structure

```text
src/
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── ToyCard.jsx
│   ├── ToyContainer.jsx
│   └── ToyForm.jsx
└── __tests__/
```

## Author

Developed as a React learning project.
