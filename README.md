# UMI Website - Rental Inspired

A dark, atmospheric website inspired by the PS1 low-poly haunted house game "Rental". Features a charming bunny character with candlelight in a wooden environment.

## Features

- 🕯️ Atmospheric candlelight effects with dynamic flickering
- 🐰 Low-poly PS1 style character design
- 🪵 Wooden floor with perspective depth
- 🌑 Dark, haunted house aesthetic
- ⚡ React frontend with Node.js/Express backend

## Tech Stack

- **Frontend**: React 18
- **Backend**: Node.js + Express
- **Styling**: CSS3 with custom animations

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install all dependencies (root, server, and client):
```bash
npm run install-all
```

### Running the Application

#### Development Mode (runs both server and client):
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- React frontend on `http://localhost:3000`

#### Run Separately:

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

## Project Structure

```
umi-website/
├── client/           # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Character.js
│   │   │   ├── CandleLight.js
│   │   │   ├── WoodenFloor.js
│   │   │   └── Navigation.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/           # Node.js backend
│   ├── index.js
│   └── package.json
└── package.json      # Root package.json
```

## Customization

The theme can be customized by modifying:
- Colors in component CSS files
- Character appearance in `Character.css`
- Lighting effects in `CandleLight.css`
- Floor texture in `WoodenFloor.css`

## License

MIT

