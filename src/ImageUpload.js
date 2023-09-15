import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUpload() {
 const [image, setImage] = useState(null);

 const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Image</Text>
      <Button title="Pick an image" color='#8b008b' onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      
    </View>

 );
}

const styles = StyleSheet.create({
 container: {
    padding: 20,
      flexDirection: 'column',
      flex:  1,
      backgroundColor: '#f5f5dc',
      borderWidth: 5,
      borderColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      paddingBottom: 5,
      borderRadius: 10,
 },
 title: {
    
    
    fontSize: 30,
    fontWeight: 'bold', 
    marginBottom: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: "absolute", 
    top: 15, 
    padding: 25, 
    fontStyle: 'italic', 
    fontWeight: 'bold'
 },
 image: {
    width: 200,
    height: 200,
    marginTop: 20,
 },
});