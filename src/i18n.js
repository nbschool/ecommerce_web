import i18n from 'i18next';

i18n
  .init({
    lng: 'it',
    fallbackLng: 'en',

    resources: {
      en: {
        itemList: {
          empty: 'No items availables'
        }
      },
      it: {
        itemList: {
          empty: 'Nessun items disponibile'
        }
      }
    },

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  });


export default i18n;
