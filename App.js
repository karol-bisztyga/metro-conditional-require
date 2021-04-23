/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const TestRequireSuccess = () => {
  try {
    const value = require('./test_require.json').value;
    return 'VALUE: ' + value;
  } catch (e) {
    return 'ERROR';
  }
};

const TestRequireFail = () => {
  try {
    const value = require('./test_require2.json').value;
    return 'VALUE: ' + value;
  } catch (e) {
    return 'ERROR';
  }
};

const App = () => {
  const [state, setState] = useState(0);
  return (
    <View style={{paddingTop: 100}}>
      <Button
        title="FAIL"
        onPress={() => {
          setState(1);
        }}
      />
      <Button
        title="SUCCEED"
        onPress={() => {
          setState(2);
        }}
      />
      {state === 0 ? <Text>waiting for action...</Text> : <></>}
      {state === 1 ? <Text>RESULT: {TestRequireFail()}</Text> : <></>}
      {state === 2 ? <Text>RESULT: {TestRequireSuccess()}</Text> : <></>}
    </View>
  );
};

export default App;
