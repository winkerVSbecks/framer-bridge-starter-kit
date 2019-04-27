import * as React from 'react';
import * as System from '../../design-system';
import { PropertyControls, ControlType } from 'framer';

type Props = System.GeometricAbstractionProps & {
  width: number;
  height: number;
  gridSize: number;
  showDebugGrid: boolean;
};

export class GeometricAbstraction extends React.Component<Props> {
  render() {
    return <System.GeometricAbstraction {...this.props} />;
  }

  static defaultProps: Props = {
    width: 400,
    height: 400,
    showDebugGrid: true,
    gridSize: 9,
  };

  static propertyControls: PropertyControls<Props> = {
    gridSize: {
      type: ControlType.Number,
      max: 12,
      min: 6,
      step: 3,
    },
    showDebugGrid: { type: ControlType.Boolean, title: 'Show Debug Grid' },
  };
}
