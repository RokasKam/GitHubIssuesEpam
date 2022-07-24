import { StyleSheet } from 'react-native';

export const styling = (open: boolean) =>
    StyleSheet.create({
        blockView: {
            alignItems: "center",
        },
        dropDown: {
            backgroundColor: "#00bf33",
            width: "80%",
        },
        dropDownContainer: {
            height: open ? 210 : undefined,
            marginBottom: 20,
        },
        dropDownList: {
            backgroundColor: "#00bf33",
            width: "80%",
        },
        dropDownText: {
            fontSize: 15,
            color: "white"
        },
        text: {
            color: "#323C4C",
            marginBottom: 10,
            fontSize: 15
        }
    });