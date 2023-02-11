import * as React from 'react';

import { SvgXml } from 'react-native-svg';

import { lightTheme } from '../../src/core/constants/colors';
import { 
    wp, 
    hp, 
} from '../../src/core/tools';

export default ({
    width = 33,
    height = 36,
    color = lightTheme.MAIN_ORANGE,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_107_241)">
        <path d="M9.33333 22.684L15.2173 22.664L28.06 9.94397C28.564 9.43997 28.8413 8.77064 28.8413 8.05864C28.8413 7.34664 28.564 6.67731 28.06 6.17331L25.9453 4.05864C24.9373 3.05064 23.1787 3.05597 22.1787 4.05464L9.33333 16.7773V22.684V22.684ZM24.06 5.94397L26.1787 8.05464L24.0493 10.164L21.9347 8.05064L24.06 5.94397ZM12 17.8893L20.04 9.92531L22.1547 12.04L14.116 20.0013L12 20.008V17.8893Z" fill="${color}"/>
        <path d="M6.66667 28H25.3333C26.804 28 28 26.804 28 25.3333V13.776L25.3333 16.4427V25.3333H10.8773C10.8427 25.3333 10.8067 25.3467 10.772 25.3467C10.728 25.3467 10.684 25.3347 10.6387 25.3333H6.66667V6.66667H15.796L18.4627 4H6.66667C5.196 4 4 5.196 4 6.66667V25.3333C4 26.804 5.196 28 6.66667 28Z" fill="${color}"/>
        </g>
        <defs>
        <filter id="filter0_d_107_241" x="-4" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_241"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_241" result="shape"/>
        </filter>
        </defs>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};