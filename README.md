# Recipe Finder Application

This is a React-based application designed to search and display recipes based on the selected ingredients. The app fetches recipe data from an external API and presents it in an interactive interface. Users can search for recipes by ingredient, apply filters, view recipe details, and get a list of ingredients used in each recipe.

## Features

- **Ingredient Search**: Users can search for recipes based on ingredients.
- **Recipe Cards**: Display recipe information in a visually appealing card format.
- **Recipe Details Modal**: View detailed recipe instructions and ingredients in a modal.
- **Error Handling**: Inform users if no recipes are found or if there’s an issue fetching data.
- **Loading State**: Show a loading spinner while recipes are being fetched.
- **Filter Sidebar**: (Future functionality) Filters to refine recipe search based on categories like cuisine type, diet, etc.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **API**: Fetch recipes from a public API (e.g., TheMealDB API)
- **State Management**: React's `useState` and `useEffect` hooks
- **Modal**: Displays recipe details

## Setup Instructions

### Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (depending on your preference)

### Steps to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
2. Run:

   ```bash
   npm install
   npm run dev
