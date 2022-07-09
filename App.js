import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text, View,
  TouchableOpacity, TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { theme } from './colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const STORAGE_KEY = "@toDos"
export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(() => {
    loadToDos();
  }, []);

  const travel = () => {
    setWorking(false);
  }
  const work = () => {
    setWorking(true);
  }

  const onChangeText = (payload) => {
    setText(payload);
  }
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      setToDos(JSON.parse(s));
    }
  };
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }
  const addToDo = () => {
    if (text === "") {  // isEmpty To Do 
      return
    }
    // save To Do
    const newToDos = Object.assign({}, toDos, { [Date.now()]: { text, working: working } });
    /*  same with above...
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working: working },
    } */

    setToDos(newToDos);
    saveToDos(newToDos);
    setText('');  // after save, reset
  }
  const deleteToDo = (key) => {
    Alert.alert("Delete To Do?", "Are you sure?",
      [{
        text: "Yes", onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key]

          setToDos(newToDos);
          saveToDos(newToDos);
        }
      }, { text: "Cancel" }]);

  }

  const doneToDo = (key) => {
    toDos[key].done = !toDos[key].done;  // toggle
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: working ? 'white' : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: working ? theme.grey : 'white' }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input}
        placeholder={working ? "Add a To Do" : "Where you want to go"}
        //keyboardType="number-pad"
        returnKeyType="done"
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={addToDo}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <TouchableOpacity onPress={() => doneToDo(key)}>
                <Text style={styles.toDoText}>{toDos[key].text}</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => deleteToDo(key)} style={{ marginRight: 10 }}>
                  <MaterialIcons name="edit" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>

            </View>
          ) : null
        )}
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",  // 행으로 정렬
    marginTop: 100,

  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: theme.grey,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 30,
    fontSize: 15,

  },
  toDo: {
    backgroundColor: "#444444",
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "500",
  },
  toDoTextDone: {
    color: 'white',
    fontSize: 20,
    fontWeight: "500",
    textDecorationLine: "line-through"
  }
});

// 1. 끝나는 지점에서 다시열기 ASYNC STORAGE  
// 2. 삭제 옆에 새로운 아이콘, 취소선으로 완료
// 3. 수정