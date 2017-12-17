import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements'
const SearchBar = () => {
    const handleSubmit = () => {

    }
    return (
        <SearchWrapepr>
            <InputText placeholder="輸入店名 . 地址關鍵字"></InputText>
            <Button
                icon={{ name: 'search', type: 'font-awesome', style: styles.ButtonIconStyle }}
                buttonStyle={styles.SearchBtnStyle}
            />
        </SearchWrapepr>
    )
}
export default SearchBar
const styles = {
    SearchBtnStyle: {
        backgroundColor: '#fff',
        flex: 1,
        height: 40,
        padding: 0,
    },
    ButtonIconStyle: {
        color: '#4A4A4A'
    }
}
const SearchWrapepr = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    border: solid 1px #ddd;
    background: #fff;
    border-radius: 8px;
    height: 40px;
    margin-top: 15px;
    shadow-color: #a2a2a2;
    shadow-offset: .1px;
    shadow-opacity: 0.1;
`
const InputText = styled.TextInput`
    position: relative;
    padding: 0 15px;
    borderRightColor: rgba(240,240,240,1);
    borderRightWidth: 1px;
    flex: 1;
    font-size: 15px;
`
const SearchSubmitBtn = styled.Button`
    flex: 1;
    width: 10px;
    border: solid 1px red;
    zIndex: 10;
`
