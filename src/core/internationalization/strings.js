import LocalizedStrings from 'react-native-localization';

export const strings = new LocalizedStrings({
  en: require('./en.json'),
  pl: require('./pl.json'),
});

export const setLanguage = () => {
  const availableLanguages = strings.getAvailableLanguages();
  let result;

  availableLanguages.every(language => {
    if(strings.getInterfaceLanguage().toLowerCase().startsWith(language.toLowerCase())) {
      result = language;
      return false;
    } else {
      return true;
    }
  });

  result ? strings.setLanguage(result) : strings.setLanguage("en");
}