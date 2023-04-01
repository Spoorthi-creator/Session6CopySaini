import React, { Component,useEffect } from "react";
import {
    View,
    ActivityIndicator
} from "react-native";
import { auth,onAuthStateChanged } from "../firebase";


export default function LoadingScreen({navigation}) {
useEffect(() => {
   
        onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log(user)
               navigation.navigate('Home');
            } else {
              navigation.navigate('FlashScreen');
            }
        })
    
}, [])

    


        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                
            </View>
        )
    
}
