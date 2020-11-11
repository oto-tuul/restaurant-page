console.log('check');

import initLoad from './initLoad';
import './stylesheet.css';
import Header from './header.jpg';
import homeTab from './homeTab';
import Chef from './chef.jpg';
import menuTab from './menuTab';
import contactTab from './contactTab';

initLoad();

document.querySelector('#home').addEventListener('click', () => {
    if (document.querySelector('.tab')) {
        document.querySelector('.tab').remove();
    }
    homeTab();
})

document.querySelector('#menu').addEventListener('click', () => {
    if (document.querySelector('.tab')) {
        document.querySelector('.tab').remove();
    }
    menuTab();
})

document.querySelector('#contact').addEventListener('click', () => {
    if (document.querySelector('.tab')) {
        document.querySelector('.tab').remove();
    }
    contactTab();
})