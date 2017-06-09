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
        },
        searchBar: {
          input_placeholder: 'Search'
        },
        dropDownList: {
          empty: 'No items availables'
        },
        item: {
          in_stock: 'In Stock',
          out_stock: 'Out of Stock',
          addToCart: "Add To Cart",
          removeFromCart: "Remove from Cart"
        },
        personalArea: {
          title: 'Personal Area',
          dataArea: 'Edit your personal data',
          dataArea_first_name: 'First name',
          dataArea_last_name: 'Last name',
          dataArea_email: 'Email',
          dataArea_save: 'Save'
        },
        cart: {
          emptyCart: 'Your cart is empty.',
          cart: 'Cart',
          total: 'Total',
          buyNow: 'Acquista ora',
        },
        cartItem: {
          quantity: 'Quantity',
          subtotal: 'Subtotal',
          remove: 'Remove',
        },
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
        },
        searchBar: {
          input_placeholder: 'Cerca'
        },
        dropDownList: {
          empty: 'Nessun items disponibile con questa ricerca'
        },
        item: {
          in_stock: 'Disponible',
          out_stock: 'Non Disponibile',
          addToCart: "Aggiungi al Carrello",
          removeFromCart: "Rimuovi dal Carrello"
        },
        personalArea: {
          title: 'Area personale',
          dataArea: 'Modifica i tuoi dati personali',
          dataArea_first_name: 'Nome',
          dataArea_last_name: 'Cognome',
          dataArea_email: 'Email',
          dataArea_save: 'Salva'
        },
        cart: {
          emptyCart: 'Il tuo carrello è vuoto.',
          cart: 'Carrello',
          total: 'Totale',
          buyNow: 'Buy now',
        },
        cartItem: {
          quantity: 'Quantità',
          subtotal: 'Subtotale',
          remove: 'Rimuovi',
        },
      }
    },

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  });


export default i18n;
