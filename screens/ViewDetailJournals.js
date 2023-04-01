import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ViewDetailJournals = ({route}) => {
    const journal=route.params.journalDetails['journal']
    const date=route.params.journalDetails['date']
  return (
    <View >

      <Text>{journal}</Text>
      <Text>{date}</Text>
    </View>
  )
}

export default ViewDetailJournals

const styles = StyleSheet.create({})



