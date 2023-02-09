import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { 
    wp, 
    hp, 
} from '../../src/core/tools';

export default ({
    width = 32,
    height = 33,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 3.28198C5.196 3.28198 4 4.47798 4 5.94865V21.9486C4 23.4193 5.196 24.6153 6.66667 24.6153H11.448L16 29.1673L20.552 24.6153H25.3333C26.804 24.6153 28 23.4193 28 21.9486V5.94865C28 4.47798 26.804 3.28198 25.3333 3.28198H6.66667ZM25.3333 21.9486H19.448L16 25.3967L12.552 21.9486H6.66667V5.94865H25.3333V21.9486Z" fill="#FF8E12"/>
        <path d="M9.33331 9.94849H22.6666V12.6152H9.33331V9.94849ZM9.33331 15.2818H18.6666V17.9485H9.33331V15.2818Z" fill="#FF8E12"/>
        </svg>    
    `;

    return <SvgXml xml={xml} />;
};