import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'
import ShoppingCartIcon from './ShoppingCartIcon';

export default class HomeScreen extends Component {
    render() {
        return (
<View style={styles.container}>
                <View style={{ padding: 10 }}>
                    <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
                </View>
                <View style={{ padding: 10 }}>

                    <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
                </View>
                <Button title="Cart" onPress={() => this.props.navigation.navigate('Cart')} />
                <View style={{marginTop: 50 }}>
                    <ShoppingCartIcon/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});