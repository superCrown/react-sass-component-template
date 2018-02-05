import React/* IF class */, { Component }/* ENDIF */ from 'react';
import classNames from 'classnames/bind';

import styles from './__ComponentName__.scss';

const cx = classNames.bind(styles);
/* IF !class */
const __ComponentName__ = () => (
  <div>
    __ComponentName__
  </div>
);
/* ENDIF *//* IF class*/
class __ComponentName__ extends Component {
  render() {
    return (
      <div>
        __ComponentName__
      </div>
    );
  }
}
/* ENDIF */
export default __ComponentName__;
