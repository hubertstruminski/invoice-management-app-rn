import * as React from 'react';

import { SvgXml } from 'react-native-svg';

import { 
    wp, 
    hp, 
} from '../../src/core/tools';

export default ({
    width = 128,
    height = 128,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="64" fill="#FF8E12"/>
        <path d="M74.6666 66.112V70.4H66.1333V66.112H74.6666ZM74.6666 57.6V61.8453H66.1333V57.6H74.6666ZM61.8666 57.6H53.3333V61.8453H61.8666V57.6ZM61.8666 66.112H53.3333V70.4H61.8666V66.112Z" fill="#45465A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2666 38.4C36.2666 36.7026 36.9409 35.0747 38.1411 33.8745C39.3414 32.6743 40.9692 32 42.6666 32H77.6831L91.7333 46.0501V89.6C91.7333 91.2974 91.059 92.9253 89.8587 94.1255C88.6585 95.3257 87.0307 96 85.3333 96H42.6666C40.9692 96 39.3414 95.3257 38.1411 94.1255C36.9409 92.9253 36.2666 91.2974 36.2666 89.6V38.4ZM49.0666 49.0667H61.8666V44.8H49.0666V49.0667ZM78.9333 53.3333H49.0666V74.6667H78.9333V53.3333ZM78.9333 83.2H66.1333V78.9333H78.9333V83.2Z" fill="#45465A"/>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};