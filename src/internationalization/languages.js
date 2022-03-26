import LocalizedStrings from 'react-native-localization';

export const languages = new LocalizedStrings({
  en: require('./en.json'),
  pl: require('./pl.json'),
});

export const setLanguage = () => {
  const availableLanguages = languages.getAvailableLanguages();
  let result;
  availableLanguages.every(language => {
    if(languages.getInterfaceLanguage().toLowerCase().startsWith(language.toLowerCase())) {
      result = language;
      console.log("found: " + result);
      return false;
    } else {
      return true;
    }
  });

  result ? languages.setLanguage(result) : languages.setLanguage("en");
}