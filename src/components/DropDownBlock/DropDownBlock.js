import React, { useState } from 'react'
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styling } from './DropDownBlock.style';

export const DropDownBlock = ({ value, setValue }) => {

    const [open, setOpen] = useState(false);
    const styles = styling(open);
    const items = [
        { label: 'Created', value: 'created' },
        { label: 'Updated', value: 'updated' },
        { label: 'Popularity', value: 'popularity' },
        { label: 'Long-running', value: 'long-runing' }
    ];

    return (
        <View style={styles.blockView}>
            <Text style={styles.text}>How to sort</Text>
            <DropDownPicker
                style={styles.dropDown}
                textStyle={styles.dropDownText}
                containerStyle={styles.dropDownContainer}
                dropDownContainerStyle={styles.dropDownList}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
            />
        </View>

    )
};

