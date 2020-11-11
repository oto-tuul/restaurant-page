let homeTab = function homeTab () {
    let content = document.querySelector('#content');
    let tab = document.createElement('div');
    tab.classList.add('tab');
    content.appendChild(tab);

    let tabContent = document.createElement('img');
    tabContent.src = 'https://github.com/oto-tuul/restaurant-page/raw/master/dist/811fcd0ae46acf8e2c8daa1b0c57dee7.jpg';
    tab.appendChild(tabContent);

    let tabContent2 = document.createElement('p');
    let tabContent2Text = document.createTextNode('Our head chef Massimiliano '
    + 'graduated from the prestigious Apicius International School of Hospitality in Florence in 2004 '
    + 'and by his background is a master of Italian cuisine. In addition he has dabbled in '
    + 'French and Greek culinary arts. His favourite dish is a homely lasagna, '
    + '"Just like mamma used to make!" he loves to say.')
    tabContent2.appendChild(tabContent2Text);
    tab.appendChild(tabContent2);

    let tabContent3 = document.createElement('p');
    let tabContent3Text = document.createTextNode('Due to high demand we only accept reservations '
    + 'at least three months in advance. ' + 'We also offer speacial arrangements  for events. '
    + 'Please contact us for more information.');
    tabContent3.appendChild(tabContent3Text);
    tab.appendChild(tabContent3);
}

export default homeTab;