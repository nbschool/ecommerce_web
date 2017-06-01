import React from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n'; // initialized i18next instance

// addons.js
import '@kadira/storybook/addons';
import registerScissors, { defaultDevices } from 'storybook-addon-scissors';

import { storiesOf, action, addDecorator } from '@kadira/storybook';
import { MemoryRouter } from 'react-router';

import Cart from '../src/components/Cart';
import CategoryMenu from '../src/components/CategoryMenu';
import Item from '../src/components/Item';
import ItemList from '../src/components/ItemList';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import SearchBar from '../src/components/SearchBar';
import DropDownItem from '../src/components/DropDownItem';
import DropDownList from '../src/components/DropDownList';
import SearchBox from '../src/components/SearchBox';
import SidebarMenu from '../src/components/SidebarMenu';
import PersonalAreaPersonalData from '../src/components/PersonalAreaPersonalData';
import PersonalAreaAddressData from '../src/components/PersonalAreaAddressData';
import PersonalArea from '../src/components/PersonalArea';

registerScissors(defaultDevices);

const LanguageDecorator = (story) => (
  <I18nextProvider i18n={i18n}>
    {story()}
  </I18nextProvider>
);
addDecorator(LanguageDecorator);
storiesOf('cart', module)
  .add('one item', () => {
    const items = [{
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      category: 'accessori',
      quantity: 5,
    }];
    return (
      <Cart
        items={items} />
    );
  })
  .add('with many items', () => {
    const items = [];

    for (let i = 1; i <=5; i++) {
      const item = {
        uuid: 'ert534534we'.concat(i),
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 30 * i,
        pictureUrl: null,
        category: 'accessori',
        quantity: i,
      };
      items.push(item);
    }
    return (
      <Cart
        items={items} />
    );
  });

storiesOf('CategoryMenu', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('four categories', () => {
    const categories = [
      { name: 'abbigliamento uomo', id: 1 },
      { name: 'abbigliamento donna', id: 2 },
      { name: 'scarpe', id: 3 },
      { name: 'accessori', id: 4 },
    ];
    return (
      <CategoryMenu
        listCategories={categories} context={{}} />
    );
  });

storiesOf('Item', module)
  .add('Item in Stock it', () => {
    i18n.changeLanguage("it");
    const item = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      availability: 3
    };
    return (
      <Item
      {...item} />
    );
  })
  .add('Item out Stock it', () => {
    i18n.changeLanguage("it");
    const item = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      availability: 0
    };
    return (
      <Item
      {...item} />
    );
  })
  .add('Item in Stock en', () => {
    i18n.changeLanguage("en");
    const item = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      availability: 3
    };
    return (
      <Item
      {...item} />
    );
  })
  .add('Item out Stock', () => {
    i18n.changeLanguage("en");
    const item = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      category: 'accessori',
      availability: 0
    };
    return (
      <I18nextProvider i18n={i18n}>
        <Item
          {...item} />
      </I18nextProvider>
    );
  });

storiesOf('Itemlist', module)
  .add('empty en', () => {
    i18n.changeLanguage("en");
    const itemList = [];
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList empty')}
      loaded={true}
      match={{ params: {category: 'accessori'}}}/>
    );
  })
  .add('empty it', () => {
    i18n.changeLanguage("it");
    const itemList = [];
    return (
      <I18nextProvider i18n={i18n}>
        <ItemList
          itemList={itemList}
          fetchItemList={action('fetch ItemList empty')}
          loaded={true}
          match={{ params: { category: 'accessori' } }} />
      </I18nextProvider>
    );
  })
  .add('with one item', () => {
    i18n.changeLanguage("en");
    const itemList = [{
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus veniam.',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      category: 'accessori',
      availability: 3
    }];
    return (
      <I18nextProvider i18n={i18n}>
        <ItemList
          itemList={itemList}
          fetchItemList={action('fetch ItemList with one item')}
          loaded={true}
          match={{ params: { category: 'accessori' } }} />
      </I18nextProvider>
    );
  })
  .add('with many items', () => {
    i18n.changeLanguage("en");
    const itemList = [];

    for (let i = 0; i < 9; i++) {
      const item = {
        uuid: 'ert534534wertwert',
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 233.34,
        pictureUrl: null,
        category: 'accessori',
        availability: 3
      };
      item.item_id = item.item_id + i;
      itemList.push(item);
    }
    return (
      <I18nextProvider i18n={i18n}>
        <ItemList
          itemList={itemList}
          fetchItemList={action('fetch ItemList with one item')}
          loaded={true}
          match={{ params: { category: 'accessori' } }} />
      </I18nextProvider>
    );
  });

storiesOf('Login', module)
  .add('empty login it', () => {
    i18n.changeLanguage("it");
    return (
      <Login
      lng="it"
      logged={false}
      login={action('call to login')} />
    );
  })
  .add('empty login en', () => {
    i18n.changeLanguage("en");
    return (
      <Login
        logged={false}
        login={action('call to login')} />
    );
  });

storiesOf('Register', module)
  .add('empty form en', () => {
    i18n.changeLanguage("en");
    const error = {};
    return (
      <Register
      error={error}
      register={action('call to register')} />
    );
  })
  .add('empty form it', () => {
    i18n.changeLanguage("it");
    const error = {};
    return (
      <Register
        error={error}
        register={action('call to register')} />
    );
  })
  .add('form with first name empty and email not correct', () => {
    i18n.changeLanguage("en");
    const error = {
      details: [{
        field: 'first_name',
        error: 'empty'
      },{
        field: 'email',
        error: 'invalid'
      }]
    };
    return (
      <Register
        error={error}
        register={action('call to register')} />
    );
  });
storiesOf('SearchBar', module)
  .add('empty search en', () => {
    i18n.changeLanguage("en");
    return (
      <SearchBar

        emptySearchresults={action('empty stored search results')}
        search={action('call to search')} />
    );
  })
  .add('empty search it', () => {
    i18n.changeLanguage("it");
    return (
      <SearchBar

        emptySearchresults={action('empty stored search results')}
        search={action('call to search')} />
    );
  })
  .add('dropDownList wrong empty', () => {
    const dropDownList = [];
    i18n.changeLanguage("en");
    return (
      <div>
        <SearchBar
          emptySearchresults={action('empty stored search results')}
          search={action('call to dropDownList')} />
        <DropDownList
          dropDownList={dropDownList}
          loaded={true} />
      </div>
    );
  })
  .add('dropDownList search one item', () => {
    i18n.changeLanguage("en");
    const dropDownList = [{
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus veniam.',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null
    }];
    return (
      <div>
        <SearchBar
          emptySearchresults={action('empty stored search results')}
          search={action('call to dropDownList')} />
        <DropDownList
          dropDownList={dropDownList}
          loaded={true} />
      </div>
    );
  })
  .add('dropDownList search many item', () => {
    i18n.changeLanguage("en");
    const dropDownList = [];
    for (let i = 0; i < 9; i++) {
      const item = {
        uuid: 'ert534534wertwert',
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 233.34,
        pictureUrl: null
      };
      item.item_id = item.item_id + i;
      dropDownList.push(item);
    }
    return (
      <div>
        <SearchBar
          emptySearchresults={action('empty stored search results')}
          search={action('call to dropDownList many items')} />
        <DropDownList
          dropDownList={dropDownList}
          loaded={true} />
      </div>
    );
  })
  .add('dropDownList search many item and itemList', () => {
    i18n.changeLanguage("en");
    const dropDownList = [];
    for (let i = 0; i < 9; i++) {
      const item = {
        uuid: 'ert534534wertwert',
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 233.34,
        pictureUrl: null,
      };
      item.item_id = item.item_id + i;
      dropDownList.push(item);
    }
    const itemList = [];

    for (let i = 0; i < 9; i++) {
      const item = {
        uuid: 'ert534534wertwert',
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 233.34,
        pictureUrl: null,
        category: 'accessori',
        availability: 3
      };
      item.item_id = item.item_id + i;
      itemList.push(item);
    }
    return (
      <div>
        <SearchBar
          emptySearchresults={action('empty stored search results')}
          search={action('call to dropDownList many items')} />
        <DropDownList
          dropDownList={dropDownList}
          loaded={true} />
        <I18nextProvider i18n={i18n}>
          <ItemList
            itemList={itemList}
            fetchItemList={action('fetch ItemList with one item')}
            loaded={true}
            match={{ params: { category: 'accessori' } }} />
        </I18nextProvider>
      </div>
    );
  });

storiesOf('DropDownItem', module)
  .add('one DropDownItem', () => {
    const dropDownItem = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null
    };
    return (
      <DropDownItem
        {...dropDownItem} />
    );
  });

storiesOf('DropDownList', module)
  .add('empty', () => {
    const dropDownList = [];
    return (
      <DropDownList
        dropDownList={dropDownList}
        loaded={false} />
    );
  })
  .add('wrong search', () => {
    const dropDownList = [];
    return (
      <DropDownList
        dropDownList={dropDownList}
        loaded={true} />
    );
  })
  .add('with one item', () => {
    const dropDownList = [{
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus veniam.',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null
    }];
    return (
      <DropDownList
        dropDownList={dropDownList}
        loaded={true} />
    );
  })
  .add('with many items', () => {
    const dropDownList = [];

    for (let i = 0; i < 9; i++) {
      const item = {
        uuid: 'ert534534wertwert',
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 233.34,
        pictureUrl: null
      };
      item.item_id = item.item_id + i;
      dropDownList.push(item);
    }
    return (
      <DropDownList
        dropDownList={dropDownList}
        loaded={true} />
    );
  });

storiesOf('SearchBox', module)
  .add('No results', () => {
    const searchResults = [];
    return (
      <SearchBox
        search={action(`search`)}
        emptySearchResults={action('emptying stored results')}
        searchResults={searchResults}
      />
    );
  })
  .add('With results', () => {
    const searchResults = [{
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus veniam.',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null
    }];
    return (
      <SearchBox
        search={action(`search`)}
        emptySearchResults={action('emptying stored results')}
        searchResults={searchResults}
      />
    );
  });

storiesOf('SidebarMenu', module)
  .add('default', () => {
    i18n.changeLanguage("it");
    const menuList = [{
      label: 'Dati personali',
      name: 'personalarea',
    },{
      label: 'Dati di spedizione',
      name: 'adressesarea',
    }];

    const defaultMenu = 'personalarea';
    return (
      <SidebarMenu
        active={defaultMenu}
        setActiveArea={action('set active Area')}
        menuList={menuList} />
    );
  });


storiesOf('PersonalAreaPersonalData', module)
  .add('default', () => {
    const personalData = {
      first_name: 'Pino',
      last_name: 'Silvestre',
      email: 'pino.silvestre@gmail.com'
    };

    return (
      <PersonalAreaPersonalData
        personalData={personalData}
        saveData={action('call to saveData')} />
    );
  });

storiesOf('PersonalAreaAddressData', module)
  .add('default', () => {
    return (
      <PersonalAreaAddressData />
    );
  });

storiesOf('PersonalArea', module)
  .add('default', () => {
    i18n.changeLanguage("en");

    const menuList = [{
      label: 'Dati personali',
      name: 'personalarea',
    },{
      label: 'Dati di spedizione',
      name: 'adressesarea',
    }];

    const personalData = {
      first_name: 'Pino',
      last_name: 'Silvestre',
      email: 'pino.silvestre@gmail.com'
    };

    const defaultMenu = 'personalarea';

    return (
      <PersonalArea
        active={defaultMenu}
        setActiveArea={action('set active Area')}
        menuList={menuList}
        personalData={personalData}
        saveData={action('call to saveData')} />
    );
  });
