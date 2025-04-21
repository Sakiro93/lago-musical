# Lago Musical 🎵

Lago Musical is a fun Node.js application where users can explore and play musical sound sequences inspired by nature. Each sound triggers the remaining sequence of a song unless it's a "silent" sound (ignored ones). It runs interactively from the command line and simulates the call-and-response of different animals like frogs, dragonflies, and crickets.

## 📦 Project Structure

```
lago-musical/
├── src/
│   ├── index.js       # Main CLI app
│   ├── play.js        # Logic to play song sequences
│   └── songs.js       # Predefined songs and ignored sounds
├── package.json       # Project metadata and scripts
└── README.md          # Project documentation
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Sakiro93/lago-musical.git
cd lago-musical
npm install
```

### Run the Project

```bash
npm start
```

Then follow the prompts to input a sound like `brr`, `pep`, or `cric-cric`.

Type `salir` to exit the app.

## 🎼 How It Works

- Enter a sound from a known sequence.
- If the sound is part of a song and not ignored, you'll get the remaining part of the song.
- If the sound is ignored (`brrah`, `croac`) or not found, a specific message will be shown.

## 👤 Author

**Angel Silva**  
[GitHub Profile](https://github.com/Sakiro93)

## 📝 License

This project is licensed under the ISC License.
