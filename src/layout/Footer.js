import React, { Fragment } from '@alipay/bigfish/react';
import { Layout, Icon } from '@alipay/bigfish/antd';
import GlobalFooter from '@/component/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'FinVest',
          title: 'FinVest 首页',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018@F4G
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
