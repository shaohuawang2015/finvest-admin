import React from '@alipay/bigfish/react';
import { Icon } from '@alipay/bigfish/antd';
import classNames from '@alipay/bigfish/util/classnames';
import styles from './index.less';

const Trend = ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span className={styles.value}>{children}</span>
      {flag && (
        <span className={styles[flag]}>
          <Icon type={`caret-${flag}`} />
        </span>
      )}
    </div>
  );
};

export default Trend;
