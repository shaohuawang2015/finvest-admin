import React from '@alipay/bigfish/react';

import styles from './index.less';

const Field = ({ label, value, ...rest }) => (
  <div className={styles.field} {...rest}>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default Field;
