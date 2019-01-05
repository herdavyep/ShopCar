import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'

const mostrar_primero = [
    { 
        key: 1,  
        name: 'huevos',
        image: 'https://firebasestorage.googleapis.com/v0/b/crash-b6b47.appspot.com/o/productos%2F1471?alt=media&token=cc6560f4-b11a-4bff-b374-e8d42ce2fd9d'
    },
    {
        key: 2,
        name: 'mantequilla',
        image: 'https://firebasestorage.googleapis.com/v0/b/crash-b6b47.appspot.com/o/productos%2F1137?alt=media&token=fe122496-05e7-470b-8ee9-5f8357df310b'
    },
    {
        key: 3,
        name: 'saltin noel',
        image: 'https://firebasestorage.googleapis.com/v0/b/crash-b6b47.appspot.com/o/productos%2F1472?alt=media&token=e6c793cd-a113-4293-97a8-b8c9ff0017d4'
    },
    {
        key: 4,
        name: 'fruco',
        image: 'https://firebasestorage.googleapis.com/v0/b/crash-b6b47.appspot.com/o/productos%2F1473?alt=media&token=833031cc-19e5-4334-a3ca-752e3a7e66c1'
    },
    { 
        key: 5,  
        name: 'huevos',
        image: 'https://firebasestorage.googleapis.com/v0/b/crash-b6b47.appspot.com/o/productos%2F1137?alt=media&token=fe122496-05e7-470b-8ee9-5f8357df310b'
    },
    {
        key: 6,
        name: 'mantequilla',
        image: 'https://firebasestorage.googleapis.com/v0/b/crash-b6b47.appspot.com/o/productos%2F1471?alt=media&token=cc6560f4-b11a-4bff-b374-e8d42ce2fd9d'
    }
    ]


class List extends Component{


    _renderItem(item){
        return (
            <View style={{flex: 1}}>
                <Image style={{width: 300, height: 360}} source={{uri: item.image}} />
                <Text></Text>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <FlatList 
                    horizontal
                    ItemSeparatorComponent={() => <View style={{width: 5}} />}
                    renderItem={({item}) => this._renderItem(item)}
                    data={mostrar_primero}
                />
            </View>
        )
    }
}
export default List

