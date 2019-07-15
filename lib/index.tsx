// @ts-ignore
import ReactDOM from 'react-dom';
import Icon from './icon';
import * as React from 'react';

const onmouseenter = () => {
  console.log('enter');
};
const onmouseleave = () => {
  console.log('leave');
};
const handleClick: React.MouseEventHandler = (e) => {
  console.log('e:',e);
  console.log('e.currentTarget:',e.currentTarget);
  console.log('e.href:',(e.target as SVGUseElement).href)
};
ReactDOM.render(<div>
  <Icon
    name="wechat"
    className="xxx qqq ddd"
    onMouseEnter={onmouseenter}
    onMouseLeave={onmouseleave}
    onClick={handleClick}
  />
  <Icon name="alipay"/>
  <Icon name="qq"/>
</div>, document.getElementById('root'));

