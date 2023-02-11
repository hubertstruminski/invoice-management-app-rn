import * as React from 'react';

import { SvgXml } from 'react-native-svg';

import { lightTheme } from '../../src/core/constants/colors';
import { 
    wp, 
    hp, 
} from '../../src/core/tools';

export default ({
    width = 16,
    height = 15,
    color = lightTheme.WHITE,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7H3.14L6.77 2.64C6.93974 2.43578 7.0214 2.1725 6.99702 1.90808C6.97264 1.64365 6.84422 1.39974 6.64 1.23C6.43578 1.06026 6.1725 0.978601 5.90808 1.00298C5.64365 1.02736 5.39974 1.15578 5.23 1.36L0.23 7.36C0.196361 7.40772 0.166279 7.45786 0.14 7.51C0.14 7.56 0.14 7.59 0.0700002 7.64C0.0246737 7.75466 0.000941121 7.87671 0 8C0.000941121 8.12329 0.0246737 8.24534 0.0700002 8.36C0.0700002 8.41 0.0699999 8.44 0.14 8.49C0.166279 8.54214 0.196361 8.59228 0.23 8.64L5.23 14.64C5.32402 14.7529 5.44176 14.8437 5.57485 14.9059C5.70793 14.9681 5.85309 15.0002 6 15C6.23365 15.0005 6.46009 14.9191 6.64 14.77C6.74126 14.6861 6.82496 14.583 6.88631 14.4666C6.94766 14.3503 6.98546 14.223 6.99754 14.092C7.00961 13.961 6.99573 13.8289 6.95669 13.7033C6.91764 13.5777 6.8542 13.461 6.77 13.36L3.14 9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="${color}"/>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};