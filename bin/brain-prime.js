#!/usr/bin/env node
import primeGame from '../src/games/prime-game.js';
import gameStart from '../src/index.js';

gameStart('Answer "yes" if given number is prime. Otherwise answer "no".', primeGame);
