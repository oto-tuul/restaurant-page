let contactTab = function contactTab () {
    let content = document.querySelector('#content');
    let tab = document.createElement('div');
    tab.classList.add('tab');
    content.appendChild(tab);

    let tabContent = document.createElement('p');
    let tabContentText = document.createTextNode('Address : 1333 Caesare St, Alexandria, VA 22684-2375');
    tabContent.appendChild(tabContentText);
    tab.appendChild(tabContent);

    let tabContent2 = document.createElement('p');
    let tabContent2Text = document.createTextNode('Phone : +1 703-633-9339');
    tabContent2.appendChild(tabContent2Text);
    tab.appendChild(tabContent2);
}

export default contactTab;