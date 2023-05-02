#!/usr/bin/env node
import calcGame from '../src/games/calc-game.js';
import gameStart from '../src/index.js';

gameStart('What is the result of the expression?', calcGame);
