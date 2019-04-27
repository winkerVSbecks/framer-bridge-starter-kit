const p1 = (x, y, s) =>
  ['M', x * s, y * s + s, 'v', -s, 'h', s, 'z']
    .map(v => (typeof v === 'number' ? v.toFixed(3) : v))
    .join(' ');
const p2 = (x, y, s) =>
  ['M', x * s + s, y * s, 'v', s, 'h', -s, 'z']
    .map(v => (typeof v === 'number' ? v.toFixed(3) : v))
    .join(' ');

const tilesFor = (gridSize, tileSize) =>
  Array.from(Array(gridSize * gridSize).keys()).map(idx => {
    const x = idx % gridSize;
    const y = Math.floor(idx / gridSize);
    return [p1(x, y, tileSize), p2(x, y, tileSize)];
  });

export function generateTiles(gridSize, tileSize) {
  return tilesFor(gridSize, tileSize);
}

export const CANVAS_SIZE = 960;

export const generateSvgString = (canvas, size) => {
  const tileSize = CANVAS_SIZE / size;
  const tiles = generateTiles(size, tileSize);

  return `
  <svg
    viewBox="-1 -1 ${960 + 2} ${960 + 2}"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="none"
    stroke="none"
  >
    ${tiles.map(
      (tile, idx) => `
      <g>
        <path d="${tile[0]}" fill="${canvas[idx][0]}" />
        <path d="${tile[1]}" fill="${canvas[idx][1]}" />
      </g>
    `,
    )}
  </svg>`.replace(/(\r\n|\n|\r)/gm, '');
};
