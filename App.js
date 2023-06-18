import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForOperand: false,
    };
  }

  handleDigitPress = digit => {
    const {displayValue, waitingForOperand} = this.state;

    if(waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  }

  handleOperatorPress = operator => {
    const {displayValue} = this.state;
    const inputValue = parseFloat(displayValue);

    this.setState({
      waitingForOperand: true,
      operator: operator,
      firstOperand: inputValue,
    });
  };

  handleEqualPress = () => {
    const { displayValue, operator, firstOperand} = this.state;

    const secondOperand = parseFloat(displayValue);

    if(operator === '+') {
      this.setState({ displayValue: String(firstOperand + secondOperand)})
    } else if(operator === '-') {
      this.setState({ displayValue: String(firstOperand - secondOperand)})
    } else if(operator === '*') {
      this.setState({ displayValue: String(firstOperand * secondOperand)})
    } else if(operator === '/') {
      this.setState({ displayValue: String(firstOperand / secondOperand)})
    }

    this.setState({
      waitingForOperand: true,
      operator: null,
      firstOperand: null,
    });
  };

  handleClearPress = () => {
    this.setState({
      waitingForOperand: false,
      displayValue: '0',
      firstOperand: null,
      operator: null,
    });
  };

  render() {
    const {displayValue} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.display}>{displayValue}</Text>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleOperatorPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleOperatorPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleOperatorPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleOperatorPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleEqualPress}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>



          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleDigitPress(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          {/* Add more digit buttons (0-9) here */}
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={this.handleClearPress}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 30,
  },
  clearButton: {
    marginTop: 20,
  },
  clearButtonText: {
    fontSize: 20,
    color: 'red',
  },
});

export default App;
