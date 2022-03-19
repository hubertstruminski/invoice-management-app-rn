import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
  
export const wp = (size) => {
    return widthPercentageToDP((size / 390) * 100 + '%');
};
  
export const hp = (size) => {
    return heightPercentageToDP((size / 844) * 100 + '%');
};