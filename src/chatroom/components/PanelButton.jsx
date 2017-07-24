import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class PanelButton extends React.PureComponent {
  state = {
    isOpen: true
  };

  handleOnClick = () => {
    this.setState({isOpen: !this.state.isOpen});
    this.props.onOpenPanel();
  };

  render() {
    const {classNames} = this.props;
    return (
      <div
        className={cx('nav-icon', {'open': this.state.isOpen}, classNames)}
        onClick={this.handleOnClick}>
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
}

PanelButton.propTypes = {
  classNames: PropTypes.string,
  onOpenPanel: PropTypes.func.isRequired
};

export default PanelButton;
