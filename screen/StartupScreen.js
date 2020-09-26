import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyCdrEEpIoxadjpdtzGli6viXj-Os5AMpDQ",
    authDomain: "data-15a55.firebaseapp.com",
    databaseURL: "https://data-15a55.firebaseio.com",
    projectId: "data-15a55",
    storageBucket: "data-15a55.appspot.com",
    messagingSenderId: "1084026091707",
    appId: "1:1084026091707:web:451e73d969e0f16ed5119e",
    measurementId: "G-30BPT49F2E"
  };
  // Initialize Firebase
  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  
//creater a component
const StartupScreen = (props) => {
   
    const tryLogin = async () => {
        try{
            await firebase.auth().onAuthStateChanged(user => {
                if (user != null)  {
                            console.log('user is logged in')

                            props.navigation.navigate('Jobs')
                }
                else{
                            console.log('user is not logged in, try to login now')
                            props.navigation.navigate('Auth')
                }
            })
        } catch{
            console.log('errors')
        }
    }

    useEffect(() => {
        tryLogin()
    },[])

    return(
        <View>
            <ActivityIndicator size ="large"/>
        </View>
    )

};





export default StartupScreen;