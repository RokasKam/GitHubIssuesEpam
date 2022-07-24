import React, { useState } from 'react'
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styling } from './DropDownBlock.style';
import { Props } from './DropDownBlock.type';

export const DropDownBlock: React.FC<Props> = ({ value, setValue }) => {

    const [open, setOpen] = useState(false);
    const styles = styling(open);
    const items = [
        { label: 'Newest', value: 'created' },
        { label: 'Recently updated', value: 'updated' },
        { label: 'Most commented', value: 'comments' },
        { label: 'Most reactions', value: 'reactions' }
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

