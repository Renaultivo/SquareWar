import Player from "./Player/Player.js";

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

context.fillStyle = 'white';

context.fillRect(
    0,   // x
    0,   // y
    100, // width
    100  // height
);

