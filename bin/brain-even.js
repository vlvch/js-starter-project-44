#!/usr/bin/env node
import evenGame from '../src/games/even-game.js';
import gameStart from '../src/index.js';

gameStart('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
