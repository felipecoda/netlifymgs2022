import AbstractView from "./AbstractView.js";
import '../styles/main.css'


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MGS 2022 - Sign In");
        this.setActiveLink("advisory-board");

        function signout() {
            const sN = document.getElementById("signout")
            sN.style.background = "red";
            console.log("caralho")
        }
        
    }

  

    async getHtml() {
        return `


<!-- CONTENT ROW starts -->
<div class="row bg-blue-600">


<div id="sig" class="w-full h-screen font-sans bg-blue-600 bg-landscape fixed top-0 left-0">
    <div class="container flex items-center justify-center flex-1 h-full mx-auto">
        <div class="w-full max-w-lg">
            <div class="leading-loose">
                <div class="max-w-sm p-10 m-auto bg-blue-700 bg-opacity-100 rounded-lg shadow-xl">
                <div class="flex flex-col dark:bg-gray-800 items-center mb-8 animate-fade-in"> 
                    <img src="logo-white.png" alt="Logo" class="w-12 p-0 mr-2 self-center" />  
                      <h4 class="text-xl text-slate-100 font-bold dark:text-blue-100 pb-4">MediaGrowth Summit 2022</h4>       
                  </div>
                    <!--p class="m-8 text-2xl font-light text-center text-white">
                    
                        Login
                    </p-->
                    <div class="mb-2">
                        <div class=" relative ">
                            <input type="text" id="login-with-bg-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="email"/>
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class=" relative ">
                                <input type="text" id="login-with-bg-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="password"/>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <a href="/" class="py-2 px-4 bg-blue-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                    Login
                                </a>
                            </div>
                            <div class="text-center">
                                <a class="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                                    Lost my password
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</div>
<!-- CONTENT ROW ends -->
        `;
    }
}