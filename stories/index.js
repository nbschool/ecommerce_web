import React from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n'; // initialized i18next instance

// addons.js
import '@kadira/storybook/addons';
import registerScissors, { defaultDevices } from 'storybook-addon-scissors';

import { storiesOf, action, addDecorator } from '@kadira/storybook';
import { MemoryRouter } from 'react-router';

import CategoryMenu from '../src/components/CategoryMenu';
import Item from '../src/components/Item';
import ItemList from '../src/components/ItemList';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import SearchBar from '../src/components/SearchBar';
import DropDownItem from '../src/components/DropDownItem';
import DropDownList from '../src/components/DropDownList';

registerScissors(defaultDevices);

const LanguageDecorator = (story) => (
  <I18nextProvider i18n={i18n}>
    {story()}
  </I18nextProvider>
);
addDecorator(LanguageDecorator);

storiesOf('CategoryMenu', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('four categories', () => {
    const categories = [
      {name: 'abbigliamento uomo', id: 1},
      {name: 'abbigliamento donna', id: 2},
      {name: 'scarpe', id: 3},
      {name: 'accessori', id: 4},
    ];
    return (
      <CategoryMenu
      listCategories={categories} context={{}}/>
    );
  });

storiesOf('Item', module)
  .add('single item', () => {
    i18n.changeLanguage("en");
    const item = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null,
      category: 'accessori',
    };
    return (
      <Item
      {...item} />
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
      <ItemList
        itemList={itemList}
        fetchItemList={action('fetch ItemList empty')}
        loaded={true}
        match={{ params: {category: 'accessori'}}}/>
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
    }];
    return (
      <ItemList
        itemList={itemList}
        fetchItemList={action('fetch ItemList with one item')}
        loaded={true}
        match={{ params: {category: 'accessori'}}}/>
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
      };
      item.item_id = item.item_id + i;
      itemList.push(item);
    }
    return (
      <ItemList
        itemList={itemList}
        fetchItemList={action('fetch ItemList with one item')}
        loaded={true}
        match={{ params: {category: 'accessori'}}}/>
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
        search={action('call to search')} />
    );
  })
  .add('empty search it', () => {
    i18n.changeLanguage("it");
    return (
      <SearchBar
        search={action('call to search')} />
    );
  })
  .add('dropDownList wrong empty', () => {
    const dropDownList = [];
    i18n.changeLanguage("en");
    return (
      <div>
        <SearchBar
          search={action('call to dropDownList')} />
        <DropDownList
          dropDownList={dropDownList}
          fetchDropDownList={action('fetch dropDownList one item')}
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
          search={action('call to dropDownList')} />
        <DropDownList
          dropDownList={dropDownList}
          fetchDropDownList={action('fetch dropDownList many items item')}
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
          search={action('call to dropDownList many items')} />
        <DropDownList
          dropDownList={dropDownList}
          fetchDropDownList={action('fetch dropDownList one item')}
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
        pictureUrl: null
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
      };
      item.item_id = item.item_id + i;
      itemList.push(item);
    }
    return (
      <div>
        <SearchBar
          search={action('call to dropDownList many items')} />
        <DropDownList
          dropDownList={dropDownList}
          fetchDropDownList={action('fetch dropDownList one item')}
          loaded={true} />
        <I18nextProvider i18n={i18n}>
          <ItemList
            itemList={itemList}
            fetchItemList={action('fetch ItemList with one item')}
            loaded={true}
            match={{ params: {category: 'accessori'}}} />
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
        fetchDropDownList={action('fetch dropDownList empty')}
        loaded={false} />
    );
  })
  .add('wrong search', () => {
    const dropDownList = [];
    return (
      <DropDownList
        dropDownList={dropDownList}
        fetchDropDownList={action('fetch dropDownList wrong search')}
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
        fetchDropDownList={action('fetch DropDownList with one item')}
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
        fetchDropDownList={action('fetch DropDownList with one item')}
        loaded={true} />
    );
  });
