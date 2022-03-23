import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import { 
    wp, 
    hp, 
} from '../../../../src/tools';

export default ({
    width = 59,
    height = 57,
}) => {
    const xml = `
        <svg width="${wp(width)}" height="${hp(height)}" viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="59" height="57" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_118_2137" transform="translate(0 0.137719) scale(0.0025)"/>
        </pattern>
        <image id="image0_118_2137" width="400" height="280" xlink:href="data:image/png;base64,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39UTAWFAAARAAATKl8CsWSfPveiiuQv1eJheB3LfPY8tW7Zytp4ICAMCIAACIFC+BI45+ujfX3X11T/V42G6BbJ48YqlK1acoScCwoAACIAACJQvgSMOn77mhvkLdE2q0gRk8eK77l2x4pGflS8SeAYCIAACIKCHwFcPPvij2xct2ktP2PRuvHctWvjQI49dpCcCwoAACIAACJQvgb332qv9gSVLGvR4qAnIXYtuv+GRx1ZdqScCwoAACIAACJQvgUa/v+uJP/xB13NBNAFZeOtvr3riyaeuL18k8AwEQAAEQEAPgaqqKlqzZo2mDUMd6e3c7737Z8uXP3TvUIHxOwiAAAiAQPkT+MEPfrD/eeed9+5QnmoC8uSqR4+79fY7nx0qMH4HARAAARAofwInnnjcTy6//NdLhvJUE5ANG97f/6yzfv4/QwXG7yAAAiAAAuVPYObMIxdec828uUN5qglIS0vLhDN//ONNO77Qtf3JUGnidxAAARAAgRImMH36tD8tWHDjkNtbaQKyLRx2/+TCC+LhcEsJuwzTQQAEQAAErCAw9eCD371j0aL9h0pLE5DNmzfXXjtv3r8//N//HSo8fgcBEAABEChzAnvvtVfkgSVLGodys2eq1tyLL0qt+/ubylAR8DsIgAAIgEB5EwgEGneuWvXEiKG87BGQ31x91Rd/XvPakBGGShC/gwAIgAAIlDaB2poafuXVV4dsUPQIyI0Lbog8+6fnfaXtNqwHARAAARCwgoC3psb9x1dfbRssrR4BWXTHbRsee/wPX7IiY6QBAiAAAiBQ2gQOnTr1O7feccdqXQLywP33/W3J0mXfKG2XYT0IgAAIgIAVBE487pg5l//6qqW6BOSRR1Y+eddd9+CphFaQRxogAAIgUOIEfn3FpT8/7oTv3qdLQJ579um75t948/kl7jPMBwEQAAEQsIDA0gfuv3jy3l++XZeArHvjb5fPvfTymyzIF0mAAAiAAAiUMIGZR36bzj/n5ze4/YGrdQlI86f/mn3K6T98rIR9hukgAAIgAAIWELj15htp0qSJS72NTXN0CUi8peXwH86Z89r27dstyB5JgAAIgAAIlCKBM390Bp104gnERC95/cGjdAlIW0vLl8+76ML1zc2hUvQZNoMACIAACORBYK8vTaZTZs+igw48QEuFid/3+pu+oktAtm9v8Vwy9zex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"/>
        </defs>
        </svg>        
    `;

    return <SvgXml xml={xml} />;
};