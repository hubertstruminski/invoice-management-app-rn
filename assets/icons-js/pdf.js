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
        <path d="M30 18.6152V16.6152H24V26.6152H26V22.6152H29V20.6152H26V18.6152H30ZM19 26.6152H15V16.6152H19C19.7954 16.616 20.558 16.9324 21.1204 17.4948C21.6829 18.0572 21.9992 18.8198 22 19.6152V23.6152C21.9992 24.4106 21.6829 25.1732 21.1204 25.7357C20.558 26.2981 19.7954 26.6144 19 26.6152ZM17 24.6152H19C19.2651 24.615 19.5193 24.5095 19.7068 24.322C19.8943 24.1346 19.9997 23.8804 20 23.6152V19.6152C19.9997 19.3501 19.8943 19.0959 19.7068 18.9084C19.5193 18.7209 19.2651 18.6155 19 18.6152H17V24.6152ZM11 16.6152H6V26.6152H8V23.6152H11C11.5302 23.6144 12.0384 23.4035 12.4133 23.0286C12.7882 22.6537 12.9992 22.1454 13 21.6152V18.6152C12.9995 18.085 12.7886 17.5766 12.4136 17.2016C12.0387 16.8266 11.5303 16.6158 11 16.6152V16.6152ZM8 21.6152V18.6152H11L11.001 21.6152H8Z" fill="#FF8E12"/>
        <path d="M22 14.6153V10.6153C22.0035 10.4839 21.9785 10.3533 21.9268 10.2324C21.875 10.1116 21.7976 10.0034 21.7 9.91533L14.7 2.91533C14.612 2.81767 14.5038 2.74028 14.3829 2.68849C14.2621 2.63669 14.1314 2.61173 14 2.61533H4C3.47005 2.61691 2.96227 2.82813 2.58753 3.20287C2.2128 3.5776 2.00158 4.08538 2 4.61533V28.6153C2 29.1458 2.21071 29.6545 2.58579 30.0295C2.96086 30.4046 3.46957 30.6153 4 30.6153H20V28.6153H4V4.61533H12V10.6153C12.0016 11.1453 12.2128 11.6531 12.5875 12.0278C12.9623 12.4025 13.4701 12.6137 14 12.6153H20V14.6153H22ZM14 10.6153V5.01533L19.6 10.6153H14Z" fill="#FF8E12"/>
        </svg>
    `;

    return <SvgXml xml={xml} />;
};