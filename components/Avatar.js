import React from 'react';   
import { StyleSheet, Text, View, ColorPropType } from "react-native";
import PropTypes from 'prop-types'

export default function Avatar({ size, initials, backgroundColor }) {

    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <View style={ style } >
            <Text style={{ color: 'white', fontWeight: 'bold' }}> { initials } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    }
})

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired,
};