import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Task from './components/task';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      taskArray: [],
    };
  }

  handleTask = (task) => {
    this.setState({
      taskArray: [...this.state.taskArray, task],
    });
  };

  deleteTask = (index) => {
    var taskArrayCopy = [];
    taskArrayCopy = [...this.state.taskArray];

    taskArrayCopy.splice(index, 1);

    this.setState({
      taskArray: taskArrayCopy,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f7cbdb' }}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={{flex: 0.1}}>
          <Text style={styles.titleText}>TO-DO LIST</Text>
        </View>
        <ScrollView style={{flex: 0.6}}>
          {this.state.taskArray.map((item, index) => {
            return (
              <View>
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.deleteTask(index);
                  }}>
                  <Task displayItem={item} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <KeyboardAvoidingView style={styles.taskEntryContainer}>
          <TextInput
            placeholder="Write the task"
            style={styles.taskInput}
            value={this.state.itemName}
            onChangeText={(input) => {
              this.setState({
                itemName: input,
              });
              input = null;
            }}></TextInput>
          <TouchableOpacity
            style={{ alignSelf: 'center', justifyContent: 'center' }}
            onPress={() => {
              this.handleTask(this.state.itemName);
              this.setState({
                itemName: ' ',
              });
            }}>
            <View>
              <Text style={styles.addItem}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  titleText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  taskEntryContainer: {
    position: 'absolute',
    bottom: 60,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  taskInput: {
    borderRadius: 15,
    borderColor: 'lightblue',
    borderWidth: 2,
    width: 250,
    height: 45,
    backgroundColor: 'white',
    paddingLeft: 10,
    marginLeft: 20,
  },
  addItem: {
    backgroundColor: 'white',
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    paddingTop: 9,
    borderColor: 'lightblue',
    borderWidth: 2,
  },
});
