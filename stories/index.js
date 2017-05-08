import React from 'react';

// addons.js
import '@kadira/storybook/addons';
import registerScissors, { defaultDevices } from 'storybook-addon-scissors';

import { storiesOf, action } from '@kadira/storybook';

import Item from '../src/components/Item';
import ItemList from '../src/components/ItemList';

registerScissors(defaultDevices);

storiesOf('Item', module)
  .add('single item', () => {
    const item = {
      item_id: 'dgdsfgsdfg',
      name: 'item name',
      description: 'item description',
      price: 23.34
    };
    return (
      <Item
      item={item} />
    );
  });


storiesOf('Itemlist', module)
  .add('empty', () => {
    const itemList = [];
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList empty')}
      loaded={true}/>
    );
  })
  .add('with one item', () => {
    const itemList = [{
      item_id: 'dgdsfgsdfg',
      name: 'item name',
      description: 'item description',
      price: 23.34
    }];
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList with one item')}
      loaded={true}/>
    );
  })
  .add('with many items', () => {
    const itemList = [];

    for(let i = 0; i < 9; i++) {
      const item = {
        item_id: 'dgdsfgsdfg',
        name: 'item name',
        description: 'item description',
        price: 23.34
      };
      item.item_id = item.item_id + i;
      itemList.push(item);
    }
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList with one item')}
      loaded={true}/>
    );
  });
