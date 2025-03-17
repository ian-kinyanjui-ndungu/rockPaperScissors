# Rock Paper Scissors Game

A simple browser-based Rock Paper Scissors game where you play against the computer through the browser console.

## Description

This project implements a classic Rock Paper Scissors game that runs in the browser's console. The game consists of 5 rounds, and at the end, it declares a winner based on the final score.

## Features

- Play Rock Paper Scissors against a computer opponent
- Computer makes random choices
- Case-insensitive input handling
- Score tracking throughout the game
- Final winner declaration after 5 rounds

## How to Play

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Press F12 or right-click and select "Inspect" to open the browser's developer tools
4. Navigate to the "Console" tab
5. The game will automatically start
6. Follow the prompts to enter your choice (rock, paper, or scissors) for each round
7. After 5 rounds, the game will declare a winner

## Game Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both players choose the same option, it's a tie

## Files

- `index.html`: The main HTML file
- `rock.js`: Contains all the game logic

## Technical Details

The game is built using HTML and JavaScript. It uses:
- `Math.random()` for the computer's random choice
- `prompt()` for user input
- Browser console for game output

## Future Enhancements

Potential improvements for future versions:
- Add a graphical user interface
- Implement error handling for invalid user inputs
- Add additional game modes (like Rock Paper Scissors Lizard Spock)
- Include animations for better user experience

## Credits

This game was created as a learning exercise for JavaScript programming.
