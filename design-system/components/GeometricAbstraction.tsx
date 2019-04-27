import * as React from 'react';
import { MeshGrid } from './MeshGrid';
import { Canvas } from './Canvas';

// Types
export type Props = {
  width: number;
  height: number;
  gridSize: 6 | 9 | 12;
  showDebugGrid?: boolean;
};

const colour = 'rgba(212, 69, 39, 0.5)';

export const GeometricAbstraction = ({
  width,
  height,
  showDebugGrid = false,
  gridSize = 9,
}: Props) => {
  return (
    <Canvas
      gridSize={gridSize}
      render={(canvas, toggleIndex) => (
        <MeshGrid
          width={width}
          height={height}
          size={gridSize}
          canvas={canvas}
          colour={colour}
          toggleIndex={toggleIndex}
          debug={showDebugGrid}
        />
      )}
    />
  );
};
