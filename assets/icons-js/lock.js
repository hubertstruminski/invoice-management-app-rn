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
    color = lightTheme.WHITE,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.9136 5.49316C13.5341 5.50088 15.0153 6.53428 15.6445 7.97608C15.8598 8.47826 15.9741 8.99414 15.9741 9.55372V10.9805H17.9399V18.5068H6.06006V10.9805H7.86768C7.8513 9.97234 7.83056 8.81906 8.18408 7.97604C8.87148 6.45786 10.293 5.48544 11.9136 5.49316ZM11.8257 7.88964C10.9281 7.90852 10.3361 8.5911 10.2495 9.55368V10.9805H13.5923V9.53906C13.5511 8.62624 12.8602 7.91478 11.9135 7.88964C11.8843 7.88895 11.855 7.88895 11.8257 7.88964Z" fill="${color}"/>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};