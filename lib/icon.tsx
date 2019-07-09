interface IconProps {
  name: string;
}

import * as React from 'react';

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <p>{props.children}</p>
    </div>
    
  );
};

export default Icon;