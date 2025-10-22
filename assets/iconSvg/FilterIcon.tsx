import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';

const FilterIcon = (props: SvgProps) => (
  <Svg width={30} height={30} fill='none' {...props}>
    <Rect width={30} height={30} fill='#fff' rx={4} />
    <Path
      fill='#6330FF'
      fillOpacity={0.75}
      d='M14.02 23a.968.968 0 0 1-.712-.288.968.968 0 0 1-.287-.712v-6l-5.8-7.4c-.25-.333-.288-.683-.113-1.05s.48-.55.913-.55h14c.433 0 .737.183.912.55.175.367.138.717-.112 1.05l-5.8 7.4v6c0 .283-.096.52-.288.712a.968.968 0 0 1-.712.288h-2Zm1-7.7L19.97 9h-9.9l4.95 6.3Z'
    />
  </Svg>
);

export default FilterIcon;
