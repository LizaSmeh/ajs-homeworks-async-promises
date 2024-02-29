import GameSavingLoader from './gameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  const obj = JSON.parse(saving);
  Object.getPrototypeOf(obj);
}, (error) => {
  throw new Error(error);
});
