import * as React from 'react';

import { SvgXml } from 'react-native-svg';

import { lightTheme } from '../../src/core/constants/colors';
import { 
    wp, 
    hp, 
} from '../../src/core/tools';

export default ({
    width = 24,
    height = 24,
    color = lightTheme.MAIN_GRAY,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 11L11 17L21 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};