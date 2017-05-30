import i18n from 'i18next';

i18n
  .init({
    lng: 'en',
    fallbackLng: 'en',

    resources: {
      en: {
        login: {
          caption: 'Fill the form to login',
          email_placeholder: 'Insert your email',
          password_placeholder: 'Insert your password',
          login_button: 'Login',
          rememberme: 'Remember me',
          help: 'Do you need help?',
          register: 'Register',
          error: {
            form: 'Username or password not correct'
          }
        },
        register: {
          caption: 'Fill the form to register',
          first_name_placeholder: 'Insert your first name',
          last_name_placeholder: 'Insert your last name',
          email_placeholder: 'Insert your email',
          password1_placeholder: 'Insert your password',
          password2_placeholder: 'Re-insert your password',
          register_button: 'Register',
          help: 'Do you need help?',
          login: 'Go to your account',
          error: {
            form: 'Form errors',
            empty: 'Empty field',
            invalid: 'Field not correct'
          }
        },
        itemList: {
          empty: 'No items availables'
        }
      },
      it: {
        login: {
          caption: 'Inserisci i tuoi dati per il login',
          email_placeholder: 'Inserisci la tua email',
          password_placeholder: 'Inserisci la tua password',
          login_button: 'Accedi',
          rememberme: 'Ricordami',
          help: 'Bisogno di aiuto?',
          register: 'Registrati',
          error: {
            form: 'Username o password non corretti'
          }
        },
        register: {
          caption: 'Inserisci i tuoi dati per registrarti',
          first_name_placeholder: 'Inserisci il tuo nome',
          last_name_placeholder: 'Inserisci il tuo cognome',
          email_placeholder: 'Inserisci la tua email',
          password1_placeholder: 'Inserisci la tua password',
          password2_placeholder: 'Riscrivi la tua password',
          register_button: 'Registrati',
          help: 'Bisogno di aiuto?',
          login: 'Accedi al tuo account',
          error: {
            form: 'Ci sono campi con errore',
            empty: 'Campo obbligatorio',
            invalid: 'Campo non corretto'
          }
        },
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
