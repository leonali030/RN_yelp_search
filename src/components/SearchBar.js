import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    

    return <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle}
        name="search" size={30}/>
        <TextInput style={styles.inputStyle}
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false} 
        value = {term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
};
const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex:1,
        marginLeft: 5
        
    },
    iconStyle:{
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: 5,
    }
});
export default SearchBar;