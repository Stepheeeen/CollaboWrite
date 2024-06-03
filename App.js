import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`bg-black h-full w-full flex-1 justify-center items-center`}>
      <Text style={tw`text-[20px] text-white`}>I Love youuuu❤️😭</Text>
      <StatusBar style="auto" />
    </View>
  );
}
