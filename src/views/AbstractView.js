export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    setActiveLink(link) {
        const a = link
        const activeLink = document.getElementById(a)
        //a.classList.add("currentScreen"); 
        //activeLink.className = 'currentScreen';
        //console.log(activeLink)
        }
    
    async getHtml() {
        return "";
    }
}