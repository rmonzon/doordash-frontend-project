import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import '../../styles/spinner.scss';

const Spinner = ({classNames}) => (
  <div className={cx('spinner', classNames)}>
    Loading...
  </div>
);

Spinner.propTypes = {
  classNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

export default Spinner;
