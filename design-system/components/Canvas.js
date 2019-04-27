import { useState } from 'react';
const colours = {
  red: [
    {
      name: 'red',
      value: 'rgba(212, 69, 39, 1)',
    },
    {
      name: 'red 75 percent',
      value: 'rgba(212, 69, 39, 0.75)',
    },
    {
      name: 'red 50 percent',
      value: 'rgba(212, 69, 39, 0.5)',
    },
    {
      name: 'red 25 percent',
      value: 'rgba(212, 69, 39, 0.25)',
    },
  ],
  black: [
    {
      name: 'black',
      value: 'rgb(38, 38, 38)',
    },
  ],
  blue: [
    {
      name: 'blue',
      value: 'rgba(225, 233, 238, 1)',
    },
    {
      name: 'blue 75 percent',
      value: 'rgba(225, 233, 238, 0.75)',
      shades: [0.75, 0.5, 0.25],
    },
    {
      name: 'blue 50 percent',
      value: 'rgba(225, 233, 238, 0.5)',
      shades: [0.75, 0.5, 0.25],
    },
    {
      name: 'blue 25 percent',
      value: 'rgba(225, 233, 238, 0.25)',
      shades: [0.75, 0.5, 0.25],
    },
  ],
  cream: [
    {
      name: 'cream',
      value: 'rgba(248, 248, 248, 1)',
    },
  ],
  gray: [
    {
      name: 'gray',
      value: 'rgb(101, 101, 101)',
    },
    {
      name: 'gray 75 percent',
      value: 'rgb(101, 101, 101, 0.75)',
    },
    {
      name: 'gray 50 percent',
      value: 'rgb(101, 101, 101, 0.50)',
    },
    {
      name: 'gray 25 percent',
      value: 'rgb(101, 101, 101, 0.25)',
    },
  ],
};

const a = colours.red[0].value;
const b = colours.red[1].value;
const c = colours.red[2].value;

// prettier-ignore
const initialState6x6 = [
  c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c,
  b, b, b, b, b, b, b, b, b, b, b, b,
  a, a, a, a, a, a, a, a, a, a, a, a,
];

// prettier-ignore
const initialState9x9 = [
  a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
  a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
  b, b, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, a,
  b, b, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
];

// prettier-ignore
const initialState12x12 = [
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c,
];

const initialState = {
  6: initialState6x6,
  9: initialState9x9,
  12: initialState12x12,
};

function splitEvery(size, array) {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...splitEvery(size, tail)];
}

export const Canvas = ({ render, gridSize }) =>
  render(splitEvery(2, initialState[gridSize]));
