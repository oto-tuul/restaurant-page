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
    + 'offering most highly regarded culnary adventures in downtown Alexandria.'
    + 'Our world renowned chefs treat every dish with the precise attention it deserves.');
    summary.appendChild(summaryText);
    header.appendChild(summary);

}

export default initLoad;