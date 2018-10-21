import React from '@alipay/bigfish/react';
import PropTypes from '@alipay/bigfish/util/prop-types';
import classNames from '@alipay/bigfish/util/classnames';
import { Col } from '@alipay/bigfish/antd';
import styles from './index.less';
import responsive from './responsive';

const Description = ({ term, column, className, children, ...restProps }) => {
  const clsString = classNames(styles.description, className);
  return (
    <Col className={clsString} {...responsive[column]} {...restProps}>
      {term && <div className={styles.term}>{term}</div>}
      {children !== null &&
        children !== undefined && <div className={styles.detail}>{children}</div>}
    </Col>
  );
};

Description.defaultProps = {
  term: '',
};

Description.propTypes = {
  term: PropTypes.node,
};

export default Description;
