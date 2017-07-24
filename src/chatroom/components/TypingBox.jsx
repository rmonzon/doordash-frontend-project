import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TypingBox extends Component {
  state = {
    value: ''
  };

  handleOnChange = e => {
    e.preventDefault();
    this.setState({value: e.target.value});
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: ''});
  };

  render() {
    return (
      <form className="chat__input-container" onSubmit={this.handleOnSubmit}>
        <div className="chat__input-col--left">
          <input
            id="chat_input_message"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            className="input-field"
            placeholder="Type a message" onChange={this.handleOnChange} />
        </div>
        <div className="chat__input-col--right">
          <button type="submit" className="button button-link">Send</button>
        </div>
      </form>
    );
  }
}

TypingBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TypingBox;
