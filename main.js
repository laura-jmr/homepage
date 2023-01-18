window.pages = {
    home: {
        element: document.getElementById('main'), init: function () {
            console.log('Routed to main page')
        }
    },
    projects: {
        element: document.getElementById('projects'), init: function () {
            console.log('Routed to projects page')
        }
    },
    cv: {
        element: document.getElementById('cv'), init: function () {
            console.log('Routed to cv page')

        }
    },
    contact: {
        element: document.getElementById('contact'), init: function () {
            console.log('Routed to contact page')

        }
    },
};


/**
 * Router
 * */
function routeTo(routeToPageName) {
    for (const [pageName, pageObject] of Object.entries(pages)) {
        if (pageName === routeToPageName) {
            pageObject.element.style.display = '';
            pageObject.init();

        } else {
            pageObject.element.style.display = 'none';
        }
    }
}
