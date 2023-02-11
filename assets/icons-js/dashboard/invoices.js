import * as React from 'react';

import { SvgXml } from 'react-native-svg'
;
import { lightTheme } from '../../../src/core/constants/colors';
import { 
    wp, 
    hp, 
} from '../../../src/core/tools';

export default ({
    width = 48,
    height = 48,
    color = lightTheme.WHITE,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 25.584V28.8H25.6V25.584H32ZM32 19.2V22.384H25.6V19.2H32ZM22.4 19.2H16V22.384H22.4V19.2ZM22.4 25.584H16V28.8H22.4V25.584Z" fill="${color}"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20001 4.8C3.20001 3.52696 3.70573 2.30606 4.6059 1.40589C5.50607 0.505713 6.72697 0 8.00001 0L34.2624 0L44.8 10.5376V43.2C44.8 44.473 44.2943 45.6939 43.3941 46.5941C42.4939 47.4943 41.273 48 40 48H8.00001C6.72697 48 5.50607 47.4943 4.6059 46.5941C3.70573 45.6939 3.20001 44.473 3.20001 43.2V4.8ZM12.8 12.8H22.4V9.6H12.8V12.8ZM35.2 16H12.8V32H35.2V16ZM35.2 38.4H25.6V35.2H35.2V38.4Z" fill="${color}"/>
        </svg>    
    `;

    return <SvgXml xml={xml} />;
};