import React, { PureComponent } from 'react';
import { Key, Screen } from '../../components';
import calculation from '../../utils';

const initialState = {
  input: '',
  previousValue: '',
  operator: '',
  disabled: true,
  animation: false,
};

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

      handleKeyPress = (e) => {
        const { value } = e.target;
        // Check if the input has a value and the previousValue is set, to disable the operator button
        this.setState((prevState) => ({ input: prevState.input + value }), () => this.setState((prevState) => ({
          disabled: !!(prevState.input && prevState.previousValue),
        })));
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
        const result = calculation(operator, previousValue, currentValue).toString();
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
          <div className="calculator">
            <Screen input={input} />
            <div className="keyboard">
              <div className="row">
                <Key value={7} onClick={this.handleKeyPress} />
                <Key value={8} onClick={this.handleKeyPress} />
                <Key value={9} onClick={this.handleKeyPress} />
                <Key
                  value="/"
                  className="operator"
                  disabled={disabled}
                  onClick={this.handleOperatorPress}
                />
              </div>
              <div className="row">
                <Key value={4} onClick={this.handleKeyPress} />
                <Key value={5} onClick={this.handleKeyPress} />
                <Key value={6} onClick={this.handleKeyPress} />
                <Key
                  value="*"
                  className="operator"
                  disabled={disabled}
                  onClick={this.handleOperatorPress}
                />
              </div>
              <div className="row">
                <Key value={1} onClick={this.handleKeyPress} />
                <Key value={2} onClick={this.handleKeyPress} />
                <Key value={3} onClick={this.handleKeyPress} />
                <Key
                  value="+"
                  className="operator"
                  disabled={disabled}
                  onClick={this.handleOperatorPress}
                />
              </div>
              <div className="row">
                <Key value="." onClick={this.handleKeyPress} />
                <Key value={0} onClick={this.handleKeyPress} />
                <Key value="=" onClick={this.handleEqualPress} />
                <Key
                  value="-"
                  className="operator"
                  disabled={disabled}
                  onClick={this.handleOperatorPress}
                />
              </div>
              <button type="button" className="clear" onClick={this.handleClearPress}>
                <span>Clear</span>
              </button>
            </div>
          </div>
        );
      }
}
