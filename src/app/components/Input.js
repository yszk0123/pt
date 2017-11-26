import * as React from 'react';

export default class Input extends React.Component {
  state = {
    currentValue: '',
    focus: false,
  };

  focus() {
    this.setState({ focus: true });
  }

  blur() {
    this.setState({ focus: false });
  }

  changeValue(value) {
    this.setState({ currentValue: value });
  }

  _handleFocus = () => {
    this.focus();
  };

  _handleBlur = () => {
    const { value, onChange } = this.props;
    const { currentValue } = this.state;

    if (currentValue !== value) {
      onChange(currentValue);
    }
    this.blur();
  };

  _handleChange = event => {
    this.changeValue(event.currentTarget.value);
  };

  render() {
    const { className, type, value } = this.props;
    const { currentValue, focus } = this.state;

    return (
      <input
        className={className}
        type={type}
        value={focus ? currentValue : value}
        onFocus={this._handleFocus}
        onBlur={this._handleBlur}
        onChange={this._handleChange}
      />
    );
  }
}
