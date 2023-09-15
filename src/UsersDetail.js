import React from 'react';

import { View, Text, StyleSheet, Image, Button } from 'react-native';

 

const UsersDetail = ({ route, navigation }) => {

    const { title, email } = route.params.item;

 

    return (

        <View style={styles.container}>
            <Text style={{fontSize: 30,fontWeight: 'bold', marginBottom: 20, justifyContent: 'center', alignItems: 'center', position: "absolute", top: 15, padding: 25, fontStyle: 'italic', fontWeight: 'bold'}}>User Detail</Text>
            <Image
            source={require('../assets/rav.png')}
            style={styles.image}
            />

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.email}>{email}</Text>
            
            <Button title="Back" color='#8b008b' onPress={() => navigation.navigate("UsersList")} />
            

            

        </View>

    );

};

 

const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#f5f5dc',

        borderWidth: 5,

        margin: 20,

        borderColor: 'pink',

        borderRadius: 10

    },

    title: {

        flex: 1,

        fontSize: 24,



        fontWeight: 'bold',
        marginTop: 30,

    },

    email: {

        flex: 4, 

        fontSize: 16,

        marginTop: 10,

        fontStyle: 'normal'

    },
    image: {
        width: 150,  
        height: 150, 
        borderColor: 'green',
        borderWidth: 3,
        marginTop: 100,
        borderRadius: 10,
      },


});

 

export default UsersDetail;