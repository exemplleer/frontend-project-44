#!/usr/bin/env node
import greeting from '../src/cli.js';
import evenGame from '../src/games/even.js';
import calcGame from '../src/games/calc.js';
import gcdGame from '../src/games/gcd.js';
import progressionGame from '../src/games/progression.js';

greeting();
evenGame();
calcGame();
gcdGame();
progressionGame();
