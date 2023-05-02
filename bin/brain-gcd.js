#!/usr/bin/env node
import gcdGame from '../src/games/gcd-game.js';
import gameStart from '../src/index.js';

gameStart('Find the greatest common divisor of given numbers.', gcdGame);
