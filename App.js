import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`bg-white h-full w-full flex-1 justify-center items-center relative`}>
      <View style={tw`absolute bottom-[30px] w-[95%] p-4 flex justify-center bg-black rounded-md`}>
        <View style={tw`flex w-full flex-row justify-around`}>
          <Text style={tw`text-[18px] text-white`}>Link</Text>
          <Text style={tw`text-[18px] text-white`}>Name</Text>
          <Text style={tw`text-[18px] text-white`}>icon</Text>
          <Text style={tw`text-[18px] text-white`}>smth</Text>
        </View>
      </View>
    </View>
  );
}
