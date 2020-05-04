/* eslint-disable radix */
import React, { PureComponent } from 'react';
import Key from './components/Key';
import Screen from './components/Screen';
import calculation from './utils';
import './App.css';

const initialState = {
  input: '',
  previousValue: '',
  operator: '',
  disabled: true,
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleKeyPress = (e) => {
    const { value } = e.target;
    // Check if the input has a value and the previousValue is set to disable the operator button
    // eslint-disable-next-line max-len
    this.setState((prevState) => ({ input: prevState.input + value, disabled: (prevState.input && prevState.previousValue) }));
  }

  handleOperatorPress = (e) => {
    const { value: operator } = e.target;
    this.setState(({ input }) => ({
      previousValue: input,
      input: '',
      operator,
      disabled: true,
    }));
  }

  handleEqualPress = () => {
    const { previousValue, input: currentValue, operator } = this.state;
    const result = calculation(operator, previousValue, currentValue);
    this.setState({
      input: result,
      disabled: false,
    });
  }

  handleClearPress = () => {
    this.setState({ ...initialState });
  }

  render() {
    const { input, disabled } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <Screen input={input} />
          <div className="keyboard">
            <div className="row">
              <Key value={7} onClick={this.handleKeyPress} />
              <Key value={8} onClick={this.handleKeyPress} />
              <Key value={9} onClick={this.handleKeyPress} />
              <Key value="/" className="operator" disabled={disabled} onClick={this.handleOperatorPress} />
            </div>
            <div className="row">
              <Key value={4} onClick={this.handleKeyPress} />
              <Key value={5} onClick={this.handleKeyPress} />
              <Key value={6} onClick={this.handleKeyPress} />
              <Key value="*" className="operator" disabled={disabled} onClick={this.handleOperatorPress} />
            </div>
            <div className="row">
              <Key value={1} onClick={this.handleKeyPress} />
              <Key value={2} onClick={this.handleKeyPress} />
              <Key value={3} onClick={this.handleKeyPress} />
              <Key value="+" className="operator" disabled={disabled} onClick={this.handleOperatorPress} />
            </div>
            <div className="row">
              <Key value="." onClick={this.handleKeyPress} />
              <Key value={0} onClick={this.handleKeyPress} />
              <Key value="=" onClick={this.handleEqualPress} />
              <Key value="-" className="operator" disabled={disabled} onClick={this.handleOperatorPress} />
            </div>
            <button type="button" className="clear" onClick={this.handleClearPress}>
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
