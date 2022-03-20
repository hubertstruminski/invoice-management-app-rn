import React from 'react';
import { Text } from 'react-native';

import styles from './reponsiveTextStyle';

const ResponsiveText = ({
    text,
    fontStyle,
    color,
    customStyle,
}) => {
    return (
        <Text
            style={[
                fontStyle && styles[fontStyle],
                customStyle, {
                    color: color,
                }
            ]}
        >
            {text}
        </Text>
    );
}

export default ResponsiveText;