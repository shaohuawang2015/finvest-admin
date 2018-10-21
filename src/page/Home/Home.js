import React, { Component } from '@alipay/bigfish/react';
import { formatMessage, FormattedMessage } from '@alipay/bigfish/locale';

import styles from './Home.less';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  componentWillUnmount() {

  }


  render() {
   
    return (
      <div>Hello, This is First Page</div>
    );
  }
}

export default HomePage;
