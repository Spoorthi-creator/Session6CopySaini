

import React, { useEffect, useState } from "react";
import { ImageBackground, Touchable, TouchableOpacity } from "react-native";
import { View, Text ,Dimensions,FlatList} from "react-native";
//import { FlashList } from "@shopify/flash-list";
import {db,collection,addDoc,setDoc,doc,auth,getDocs} from "../firebase"


export default function AllJournals ({navigation}) {
    const[journalData,setJournalData]=useState([]);
    const { height, width } = Dimensions.get("window");
    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        const querySnapshot = await getDocs(collection(db,auth.currentUser.email));
        const journal = [];
querySnapshot.forEach((doc) => {
journal.push({
...doc.data(),
id:doc.id
});
console.log(doc.id, " => ", doc.data());
// setJournalData({...doc.data(),
// //journal:doc.data().journal,
// id: doc.id,
// });

});
setJournalData(journal);
    };

   


  return (
  <ImageBackground source={require('../assets/home2.png')}style={{height:height,width:width}}>
    <View style={{flex:1,width:width,height:height,alignContent:'center'}}>
      
  {
    journalData ?
    
    <FlatList
  
      data={journalData}
      renderItem={({ item }) =>
     
      <TouchableOpacity style={{alignSelf:'center',justifyContent:'center',alignContent:'center',width:width-20,height:80,borderRadius:30,borderWidth:1,margin:10, 
       shadowOffset: {
         width: 0,
        height: 4,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
      // elevation: 1,
      borderColor:'grey', borderWidth:2
      }} onPress={()=>navigation.navigate('ViewDetailJournals',{journalDetails:item})}>
         <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
         <Text style={{fontSize:18,backgroundColor:'white',textAlign:'center',margin:5}}>{item.date}</Text>
         <Text style={{fontSize:20,textAlign:'center',color:'grey',margin:5}}>{item.journal}</Text>
         
         </View>
         </TouchableOpacity>}
      keyExtractor={item=>item.id}
    //  estimatedItemSize={200}
    />
    : alert('No records at the moment')
  }
    </View>
    </ImageBackground>
   
  );

};
