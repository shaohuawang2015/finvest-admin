import React from '@alipay/bigfish/react';
import { formatMessage } from '@alipay/bigfish/locale';
import { Link } from '@alipay/bigfish/sdk/router';
import Exception from '@/component/Exception';

const Exception404 = () => (
  <Exception
    type="404"
    desc={formatMessage({ id: 'app.exception.description.404' })}
    linkElement={Link}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception404;
