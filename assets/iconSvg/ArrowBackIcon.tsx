import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowBackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
    <Path
      d='M16 22 L6 12 L16 2 L17.775 3.775 L9.55 12 L17.775 20.225 L16 22 Z'
      fill='#D9D9D9'
    />
  </Svg>
);

export default ArrowBackIcon;
