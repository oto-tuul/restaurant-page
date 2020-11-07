let initLoad = function initLoad() {
    let content = document.querySelector('#content');
    let  header  = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    let title = document.createElement('h1');
    let titleText = document.createTextNode('Exsquisite');
    title.appendChild(titleText);
    header.appendChild(title);

    let summary = document.createElement('p');
    let summaryText = document.createTextNode('Exsquisite is a fine dining restaurant '
    + 'offering most highly regarded culinary adventures in downtown Alexandria. '
    + 'Our world renowned chefs treat every dish with the precise attention it deserves. ');
    summary.appendChild(summaryText);
    header.appendChild(summary);

    let nav = document.createElement('nav');
    header.appendChild(nav);
    let ul = document.createElement('ul');
    nav.appendChild(ul);

    let home = document.createElement('li');
    let homeLink = document.createElement('a');
    let homeLinkText = document.createTextNode('Home');
    homeLink.href = '#';
    homeLink.appendChild(homeLinkText);
    home.appendChild(homeLink);
    ul.appendChild(home);

    let menu = document.createElement('li');
    let menuLink = document.createElement('a');
    let menuLinkText = document.createTextNode('Menu');
    menuLink.href = '#';
    menuLink.appendChild(menuLinkText);
    menu.appendChild(menuLink);
    ul.appendChild(menu);

    let contact = document.createElement('li');
    let contactLink = document.createElement('a');
    let contactLinkText = document.createTextNode('Contact');
    contactLink.href = '#';
    contactLink.appendChild(contactLinkText);
    contact.appendChild(contactLink);
    ul.appendChild(contact);

}

export default initLoad;