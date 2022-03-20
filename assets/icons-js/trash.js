import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { 
    wp, 
    hp, 
} from '../../src/tools';

export default ({
    width = 30,
    height = 30,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6667 13.6667V20.3334M4.33334 7.00002H25.6667L23.56 25.96C23.4878 26.6125 23.1774 27.2155 22.6883 27.6534C22.1993 28.0913 21.5658 28.3334 20.9093 28.3334H9.09067C8.43419 28.3334 7.80075 28.0913 7.31167 27.6534C6.82258 27.2155 6.51222 26.6125 6.44001 25.96L4.33334 7.00002ZM8.79334 3.19602C9.00901 2.73864 9.35028 2.35202 9.77735 2.08123C10.2044 1.81045 10.6997 1.66668 11.2053 1.66669H18.7947C19.3006 1.66643 19.7961 1.81008 20.2234 2.08088C20.6508 2.35167 20.9922 2.73844 21.208 3.19602L23 7.00002H7.00001L8.79334 3.19602V3.19602ZM1.66667 7.00002H28.3333H1.66667ZM12.3333 13.6667V20.3334V13.6667Z" stroke="#FF8E12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};