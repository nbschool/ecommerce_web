// addons.js
import '@kadira/storybook/addons';
import registerScissors, { defaultDevices } from 'storybook-addon-scissors';

const devices = [
  ...defaultDevices,
  {
    name: 'Ipad',
    width: 768,
    height: 1024
  }
];
registerScissors(devices);
