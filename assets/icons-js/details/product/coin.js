import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { 
    wp, 
    hp, 
} from '../../../../src/core/tools';

export default ({
    width = 125,
    height = 102,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 125 102" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="125" height="102" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_118_2145" transform="translate(0.092) scale(0.00204 0.0025)"/>
        </pattern>
        <image id="image0_118_2145" width="400" height="400" xlink:href="data:image/png;base64,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"/>
        </defs>
        </svg>    
    `;

    return <SvgXml xml={xml} />;
};