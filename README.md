# React Tic-Tac-Toe

A classic Tic-Tac-Toe game built with React and Redux for state management.

<img src="public/screenshot.png" alt="Tic Tac Toe Screenshot" width="500"/>

## Features

- Play the classic Tic-Tac-Toe game with alternating X and O turns
- Automatic win detection with clear winner indication
- Draw state detection when the board is full
- Responsive design with a clean dark theme interface
- Game reset functionality

## Technology Stack

- [React 18](https://react.dev/)
- [Redux](https://redux.js.org/) for state management
- [Vite](https://vitejs.dev/) for fast development and build experience
- CSS Modules for component-scoped styling
- ESLint for code quality

## Architecture

The project follows a clean component architecture with separation of concerns:

### Components

- [`Game`](src/components/Game/Game.jsx) - Main container component with reset functionality
- [`Field`](src/components/Field/Field.jsx) - Handles game board, moves, and win logic
- [`Information`](src/components/Information/Information.jsx) - Displays game status (next player, winner, draw)

### State Management

- Redux store defined in [`store.js`](src/store.js)
- Action types and creators in [`actions.js`](src/actions.js)
- Game state reducer in [`reducer.js`](src/reducer.js)

### Layout Pattern

Each component is split into logical and presentational parts:

- Logic components (`Game.jsx`, `Field.jsx`, `Information.jsx`)
- Layout components (`GameLayout.jsx`, `FieldLayout.jsx`, `InformationLayout.jsx`)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build the app
npm run build

# Preview production build
npm run preview
```
