import * as React from 'react';
import './importAllIcons';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
      {/*<svg>*/}
      {/*  <use xlinkHref="#alipay"/>*/}
      {/*</svg>*/}
      {/*<svg>*/}
      {/*  <use xlinkHref="#qq"/>*/}
      {/*</svg>*/}
    </span>
  );
};

export default Icon;