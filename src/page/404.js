import React from '@alipay/bigfish/react';
import { Link } from '@alipay/bigfish/sdk/router';
import Exception from '@/component/Exception';

export default () => (
  <Exception type="404" style={{ minHeight: 500, height: '100%' }} linkElement={Link} />
);
