// addons.js
import '@kadira/storybook/addons';
import registerScissors, { defaultDevices } from 'storybook-addon-scissors';

const devices = [
  ...defaultDevices,
  {
    name: 'Ipad',
    width: 1024,
    height: 768
  }
];
registerScissors(devices);
