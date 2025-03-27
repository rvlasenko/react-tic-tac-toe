# React Tic-Tac-Toe

A classic Tic-Tac-Toe game built with React, featuring a custom Redux implementation for state management.

<img src="public/screenshot.png" alt="Tic Tac Toe Screenshot" width="500"/>

## Project Overview

This project implements the classic Tic-Tac-Toe game using React and a lightweight custom Redux implementation. The application features a responsive design with a dark theme, allowing players to take turns placing X and O marks on a 3×3 grid.

## Architecture

### Custom Redux Implementation

The project uses a custom Redux implementation ([`redux-manager.js`](src/redux-manager.js)) instead of react-redux, providing:

- `useReduxState` - Custom hook to access the Redux store state
- `useDispatch` - Custom hook to dispatch actions
- `ReduxRenderer` - Component that initializes the Redux context

### Application Structure

The application follows a structured component hierarchy with separation of concerns:

#### Core Components

- [`Game`](src/components/Game/Game.jsx) - Controls game restart functionality
- [`Field`](src/components/Field/Field.jsx) - Handles game logic, winner calculation, and player interactions
- [`Information`](src/components/Information/Information.jsx) - Displays current game status

#### Presentational Components

Each core component has a corresponding layout component:

- [`GameLayout`](src/components/Game/GameLayout.jsx)
- [`FieldLayout`](src/components/Field/FieldLayout.jsx)
- [`InformationLayout`](src/components/Information/InformationLayout.jsx)

#### State Management

- Redux Store ([`store.js`](src/store.js))
- Action Types and Creators ([`actions.js`](src/actions.js))
- Reducer ([`reducer.js`](src/reducer.js))

## Features

- Turn-based gameplay between X and O players
- Automatic detection of winning combinations
- Game state indicators (next player, winner, draw)
- Game reset functionality
- Responsive design with hover effects

## Development

This project is built with Vite for fast development and optimized production builds.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Technologies

- React 18
- Redux (custom implementation)
- Vite
- CSS Modules
- ESLint
