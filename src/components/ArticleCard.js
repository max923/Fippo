import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Button, 
    View, 
    Image,
    TouchableHighlight 
} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const UserInfo = {
    "image_url": "https://s3-media3.fl.yelpcdn.com/photo/qSpuS6ZR8-AACX6fsOCPMQ/o.jpg",
    "name": "Isabel C."
}
const Card = ({image_url, name, navigation}) => {
        return (
            <CardWrapper>
                <TouchableHighlight
                    onPress={() => navigation.navigate('Article')}
                >
                    <CardImage
                        source={{uri: image_url}}
                    />
                </TouchableHighlight>
                
                <CardButtomWrapper>
                    <UserInfoWrapper>
                        <UserPhoto source={{uri: UserInfo.image_url}} />
                        <UserName> {UserInfo.name} </UserName>
                    </UserInfoWrapper>
                    <CardTitile> {name} </CardTitile>
                    <CardContentText>
                        Man this place is great. We came here before heading to the National Palace Museum as it was somewhat on the way. I came here because my girlfriend wanted to come and I saw a few
                    </CardContentText>
                    <GoodWrapper>
                        <Ionicons
                            name='ios-heart-outline'
                            size={20}
                        />
                        <Text>1024</Text>
                    </GoodWrapper>
                    
                </CardButtomWrapper>
            </CardWrapper>
        )
}
export default Card

const CardWrapper = styled.View`
    position: relative;
    flex: 1;
    width: 100%;
    background-color: #fff;
    margin-bottom: 15px;
    padding-bottom: 10px;
    shadow-color: #000;
    shadow-offset: 1px;
    shadow-opacity: 0.1;
    shadow-radius: 2;
`;
const CardImage = styled.Image`
    position: relative;
    flex: 1;
    width: 100%;
    height: 300px;
`;
const CardButtomWrapper = styled.View`
    position: relative;
    /* border: solid 1px red; */
    padding: 0 15px;
`
const UserInfoWrapper =  styled.View`
    position: relative;
    display: flex;
    flexDirection: row;
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
    flex: 1;
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
const GoodWrapper = styled.View`
    display: flex;
    flexDirection: row;
`

    