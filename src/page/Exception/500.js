import React from '@alipay/bigfish/react';
import { formatMessage } from '@alipay/bigfish/locale';
import { Link } from '@alipay/bigfish/sdk/router';
import Exception from '@/component/Exception';

const Exception500 = () => (
  <Exception
    type="500"
    desc={formatMessage({ id: 'app.exception.description.500' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception500;
