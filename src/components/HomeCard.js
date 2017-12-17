import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, ButtonGroup } from 'react-native-elements'

import { Colors } from '../constants/Const'
const UserInfo = {
    "image_url": "https://s3-media3.fl.yelpcdn.com/photo/qSpuS6ZR8-AACX6fsOCPMQ/o.jpg",
    "name": "Isabel C."
}
const HomeCard = ({ image_url, name, navigation }) => {
    return (
        <CardWrapper>
            <TouchableHighlight
                onPress={() => navigation.navigate('Article')}
            >
                <CardImage
                    source={{ uri: image_url }}
                />
            </TouchableHighlight>

            <CardButtomWrapper>
                <UserInfoWrapper>
                    <UserPhoto source={{ uri: UserInfo.image_url }} />
                    <UserName> 最愛吃＠小芳芳＊法國＊日本＊台灣＊ </UserName>
                </UserInfoWrapper>
                <CardTitile> {name} </CardTitile>
                <CardContentText>
                    Man this place is great. We came here before heading to the National Palace Museum as it was somewhat on the way. I came here because my girlfriend wanted to come and I saw a few
                    </CardContentText>
                <ButtomBarWrapper>
                    <Button
                        icon={{ name: 'heart-o', type: 'font-awesome', style: styles.ButtonIconStyle }}
                        containerViewStyle={styles.ButtomBtnWrapper}
                        buttonStyle={styles.ButtomBtnStyle}
                    ></Button>
                    <Button
                        icon={{ name: 'star-o', type: 'font-awesome', style: styles.ButtonIconStyle }}
                        containerViewStyle={styles.ButtomBtnWrapper}
                        buttonStyle={styles.ButtomBtnStyle}
                    ></Button>
                    <Button
                        icon={{ name: 'heart', type: 'font-awesome', style: styles.ButtonIconStyle }}
                        containerViewStyle={styles.ButtomBtnWrapper}
                        buttonStyle={styles.ButtomBtnStyle}
                    ></Button>
                </ButtomBarWrapper>

            </CardButtomWrapper>
        </CardWrapper>
    )
}
export default HomeCard
const styles = {
    ButtomBtnStyle: {
        backgroundColor: '#fff',
        padding: 0
    },
    ButtomBtnWrapper: {
        flex: 1,
        height: 35,
        padding: 0,
        margin: 0,
        borderColor: 'red',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonIconStyle: {
        color: '#4A4A4A'
    }
}
const CardWrapper = styled.View`
    position: relative;
    flex: 1;
    width: 100%;
    background-color: #fff;
    margin-bottom: 5px;
    padding-bottom: 10px;
    borderBottomColor: #d6d6d6;
    borderBottomWidth: 1px;
    shadow-radius: 2;
`;
const CardImage = styled.Image`
    position: relative;
    flex: 1;
    width: 100%;
    height: 350px;
`;
const CardButtomWrapper = styled.View`
    position: relative;
    padding: 0 15px;
`
const UserInfoWrapper = styled.View`
    position: relative;
    display: flex;
    flexDirection: row;
    top: 8px;
`
const UserPhoto = styled.Image`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    borderWidth: 1px;
    borderColor: #fff;
    top: -20px;
`
const UserName = styled.Text`
    font-size: 14px;
    font-weight: 500;
    flex: 1;
    color: ${Colors.mainPink}
`
const CardTitile = styled.Text`
    font-size: 20px;
    color: #111111;
`
const CardContentText = styled.Text`
    font-size: 13px;
    color: #757575;
    line-height: 16;
    padding: 8px 0;
`
const ButtomBarWrapper = styled.View`
    display: flex;
    flexDirection: row;
    /* borderColor: ${Colors.backGray};
    borderWidth: 1px;
    border-radius: 8px; */
    border: solid 1px blue
`

