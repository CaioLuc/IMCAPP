import { Image, View, StyleSheet } from "react-native";

export function Topo() {
    return (
        <View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../assets/logo_app_imc.png')} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        containerLogo: {
            height: 150,
            alignItems: 'center',
            justifyContent: 'center'
        },
        logo: {
            width: 170,
            height: 60
        }
    }
)