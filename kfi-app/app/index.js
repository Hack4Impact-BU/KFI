import { Redirect } from 'expo-router';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  
  // if no user state, redirect to login
  const [user, setUser] = useState(null);


  return (
    <View styles={{}}>
      { user ? <Redirect href="/home"/> : <Redirect href="/signup" />}
    </View>
    
  );
}
