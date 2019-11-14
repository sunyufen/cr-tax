import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { prefixCls } = this.props

    return (
      <div>
        <div className={`${prefixCls}`}>PTFPJP</div>
      </div>
    )
  }
}

App.propTypes = {
  prefixCls: PropTypes.string,
}

App.defaultProps = {
  prefixCls: 'tax-ptfpjp',
}

export default App;