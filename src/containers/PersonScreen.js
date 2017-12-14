import React,{Component} from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    Text, 
    Button, 
    View, 
    Image 
} from 'react-native';
import styled from 'styled-components/native';
import { StackNavigator } from 'react-navigation';
class PersonScreen extends Component {
    render() {
        return (
            <PersonBody>
                <PersonTopWrapper>
                    <PeronDataWrapper>
                        <PersonName>Lawrence Cannon</PersonName>
                        <PersonDesc>
                            我是位美食遊俠，走片世界各地，尋找我心中的美食聖地！
                            7年級生/台北人目前長期住在巴黎
                        </PersonDesc>
                    </PeronDataWrapper>

                    <PersonPicWrapper> 
                        
                    </PersonPicWrapper>

                </PersonTopWrapper>
            </PersonBody>
        )
    }
}
export default StackNavigator(
    {
        Person: {
            screen: PersonScreen,
            path: '/personal',
            navigationOptions: ({navigation}) => ({
                title: '關於我',
            })
        }
    }
)
const PersonBody = styled.ScrollView`
    padding: 10px 15px;
    background-color: rgba(255,255,255,1);
`
const PersonTopWrapper = styled.View`
    position: relative;
    flexDirection: row;
    flex: 1;
    borderBottomColor: rgba(240,240,240,1);
    borderBottomWidth: 1px;
`
const PeronDataWrapper = styled.View`
    flex: 2;
`
const PersonPicWrapper = styled.View`
    border: solid 1px blue;
    flex: 1;
`
const PersonName = styled.Text`
    font-size: 20px;
    color: rgba(74,74,74,1);
`
const PersonDesc = styled.Text`
    line-height: 20px;
    padding: 10px 0 ;
    font-size: 14px;
    color: rgba(90,90,90,1);
`
