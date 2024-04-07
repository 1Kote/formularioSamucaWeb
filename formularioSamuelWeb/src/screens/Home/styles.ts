import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent:"center",
    },
    box: {
        backgroundColor:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:20,
        borderRadius: 15,
    },
    form:{
        marginVertical:20,
        maxHeight:'48%',
    },
    button: {
        backgroundColor: "#00008B",
        height:55,
        minWidth:"35%",
        alignItems:"center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
    },
    textbutton: {
        color: "#ffffff",
        fontSize:25,
    }
});