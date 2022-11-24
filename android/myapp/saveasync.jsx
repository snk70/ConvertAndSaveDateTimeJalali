import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
    alert('Error');
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@MySuperStore:key');
    if (value !== null) {
      // value previously stored
      alert(value);
    }
  } catch (e) {
    // error reading value
  }
};

const SaveDataInStorage = async (myKey, myValue) => {
  try {
    await AsyncStorage.setItem(myKey, myValue);
  } catch (e) {
    alert('Error');
  }
};

function SaveAsync() {
  const GetFromStorage = async myKey => {
    try {
      const vl = await AsyncStorage.getItem(myKey);
      if (vl !== null) {
        // value previously stored
        // alert(vl);
        setXx(vl);
      }
    } catch (e) {}
  };

  const [getXx, setXx] = useState('');
  useEffect(() => {
    if (getXx !== '') {
      alert('Now: ' + new Intl.DateTimeFormat('fa-IR').format(new Date()) + '\n\n' + getXx);
      setXx('');
    }
  }, [getXx]);
  return (
    <View>
      <Button
        title="Save data"
        onPress={() => {
          _storeData();
        }}></Button>
      <Text>---</Text>
      <Button
        title="Get data"
        onPress={() => {
          getData();
        }}></Button>
      <View style={{height: 100}} />
      <Button
        title="Save for 50 next days"
        onPress={() => {
          const dt = new Date();
          dt.setDate(dt.getDate() + 50);
          SaveDataInStorage(
            'mydate',
            new Intl.DateTimeFormat('fa-IR').format(dt),
          );
        }}></Button>
      <View style={{height: 10}}></View>
      <Button
        title="Show Date"
        onPress={() => {
          GetFromStorage('mydate');
        }}
      />
    </View>
  );
}

export default {SaveAsync};
