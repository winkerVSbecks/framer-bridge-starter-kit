import * as React from 'react';
import { generateTiles, CANVAS_SIZE } from './tiles';

export const MeshGrid = ({
  size,
  canvas,
  colour,
  toggleIndex,
  debug,
  width,
  height,
}) => {
  if (canvas.length === 0) {
    return null;
  }
  const tileSize = CANVAS_SIZE / size;
  const tiles = generateTiles(size, tileSize);

  return (
    <svg
      style={{ width, height, backgroundColor: '#fff' }}
      viewBox={`-1 -1 ${960 + 2} ${960 + 2}`}
      fill="none"
    >
      {tiles.map((tile, idx) => (
        <g key={idx}>
          <path
            d={tile[0]}
            fill={canvas[idx][0]}
            onClick={() => toggleIndex(idx, 0, colour)}
          />
          <path
            d={tile[1]}
            fill={canvas[idx][1]}
            onClick={() => toggleIndex(idx, 1, colour)}
          />
        </g>
      ))}
      {debug &&
        tiles.map((tile, idx) => (
          <g key={idx} stroke="#656565" strokeLinejoin="round">
            <path d={tile[0]} />
            <path d={tile[1]} />
          </g>
        ))}
    </svg>
  );
};
