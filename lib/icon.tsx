import * as React from 'react';
import wechat from './icons/wechat.svg';

console.log(wechat);

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <p>{props.children}</p>
    </div>
  
  );
};

export default Icon;