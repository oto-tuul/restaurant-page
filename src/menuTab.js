let menuTab = function menuTab () {
    let content = document.querySelector('#content');
    let tab = document.createElement('div');
    tab.classList.add('tab');
    content.appendChild(tab);

    let tabContent = document.createElement('p');
    tabContent.innerHTML = `
    <pre>
    Fried Mozzarella                                    8.95

    Thick slices of mozzarella cheese, breaded and pan-fried
    to a golden brown, then covered with meat sauce.


    Fried Mushrooms                                     8.95

    Fresh whole mushrooms breaded, pan-fried, and covered
    in a light red sauce.


    Artichoke Hearts                                    8.95

    Tender hearts pan fried until brown, then sprinkled with
    romano cheese and a light red sauce.


    Sauteed Mushrooms                                   8.95

    Fresh whole mushrooms sautéed in light garlic butter
    with capers, parsley, and white wine.


    Calamari                                            8.95

    Calamari sautéed in a special red sauce, or try it
    lightly pan-fried. 
    
    Pasta Manicotti                                     16.95
    
    Handmade pasta shells stuffed with ricotta and romano
    cheese and fresh spices. Baked in a light red sauce. 


    Cannelloni                                          16.95 
    
    Handmade pasta shells, stuffed with beef and pork, romano 
    cheese, spinach and spices. Baked in a light red sauce. 
    
    
    Homemade lasagna                                    16.95
    
    Simply the best!
    
    
    Pasta con Vegetali Eolio                            16.95 

    Corkscrew pasta, mixed fresh vegetables, sautéed in oil,
    butter, and garlic.
    
    
    Fettuccini al Marino                                16.95

    Fettuccini noodles blended with romano and ricotta 
    cheeses.
    
    
    Fusilli                                             16.95 
    
    Corkscrew pasta, sautéed onion and fresh mushrooms in
    a red sauce with choice of chicken or sausage. 
    </pre>`;
    tab.appendChild(tabContent);
}

export default menuTab;