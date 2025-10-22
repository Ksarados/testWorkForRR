import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowDownIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path fill='#868686' d='m18 10-6 6-6-6 1.4-1.4 4.6 4.6 4.6-4.6L18 10Z' />
  </Svg>
);

export default ArrowDownIcon;
