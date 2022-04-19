//import './styles/main.css'
// import './main.js'

import Dashboard from "./views/Dashboard.js";
import Presenters from "./views/Presenters.js";
import Sponsors from "./views/Sponsors.js";
import signOut from "./views/signOut.js";
import Agenda from "./views/Agenda.js";
import Attendees from "./views/Attendees.js";
import Profile from "./views/Profile.js";
import logoWhite from "./assets/logo-white.png";
import logoBlue from "./assets/logo-blue.png";
import logom from "./assets/m.png";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./assets/presenters/', false, /\.(png|jpe?g|svg)$/));
const imagesSponsors = importAll(require.context('./assets/sponsors/', false, /\.(png|jpe?g|svg)$/));

//console.log(images)

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/dashboard", view: Dashboard },
        { path: "/agenda", view: Agenda },
        { path: "/presenters", view: Presenters },
        { path: "/signOut", view: signOut },
        { path: "/attendees", view: Attendees },
        { path: "/sponsors", view: Sponsors },
        { path: "/profile", view: Profile }
        // { path: "/", view: signOut }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    //console.log("here 1")
    document.body.addEventListener("click", e => {

        let currentLink = ""
        let data = e.target.getAttribute('data');
        //console.log(data)
        const linksArray = ["dashboard", "agenda", "presenters", "attendees", "sponsors", "profile", "sign-out"]
        currentLink = e.target.id
        //console.log(data)            
        for (let i = 0; i < linksArray.length; i++) {
            let link = document.getElementById(linksArray[i])
            //console.log(e.target)

            if (linksArray[i] !== currentLink) {
                link.style.background = "transparent"
            }
        }

        if (e.target.matches("[data-link]")) {
            const cl = e.target
            cl.parentNode.style.background = "#1d4ed8";             
            // !data && (cl.style.borderRadius = ".75em")             
            cl.style.transition = "0.5s";             
            // console.log(cl);
            e.preventDefault();

            data && (cl.parentNode.style.background = "transparent") 
            data && (cl.parentNode.parentNode.style.background = "#1d4ed8") 
            // data && (cl.parentNode.parentNode.style.borderRadius = ".75em") 
            // console.log(cl.parentNode.parentNode);
            data ? navigateTo(data) : navigateTo(e.target.parentNode.href)           
        }

    });
    
    console.log("NO data link")
    router();
});




