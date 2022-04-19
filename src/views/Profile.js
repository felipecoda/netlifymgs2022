import AbstractView from "./AbstractView.js";
import '../styles/main.css'

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MGS 2022 - Profile");
        this.setActiveLink("profile");
    }

    async getHtml() {
        return `
<!-- HEADER starts -->
<div class="container flex items-center justify-center h-full m-auto">
    <div class="header">   
        <h4 class="screen-title animate-fade-in-down">Profile</h4>   
        <!-- MESSAGE NOTIFICATION -->
        <div class="shadow-sm rounded-2xl ml-auto px-3 p-2flex justify-between items-center animate-fade-in-down">
            <div class="tooltip tooltip-left tooltip-warning pl-2" data-tip="You have 3 new messages.">
            <label for="my-modal-n" class=" ">
                <svg width="20" height="20" fill="white" viewBox="0 0 1792 1792" class="svg-email text-blue-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                </svg>
                </label>
             </div>
        </div>
        <!-- MESSAGE NOTIFICATION ends -->  
    </div>
</div>
<!-- HEADER ends -->

<!-- CONTENT ROW starts -->
<div class="row place-items-center items-center">



<form class="card-default mx-0 p-6 w-full xl:w-1/2 lg:w-1/2 xl:mx-auto lg:mx-auto rounded-2xl place-items-center">

<h2 class="card-header-title w-full mb-2 text-lg">
    Name
</h2>

 
<div class="pb-6 w-full border-0 border-red-300">
            <input type="text" id="user-info-name" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Name"/>
</div>

<h2 class="card-header-title w-full mb-2 text-lg">
    Phone Number
</h2>

<div class="pb-6 w-full border-0 border-red-300">
                <input type="text" id="user-info-phone" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Phone number"/>
                </div>


<h2 class="card-header-title w-full mb-2 text-lg">
    Email
</h2>

<div class="pb-6 w-full border-0 border-red-300">
    <input type="text" id="user-info-email" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Email"/>

</div>

<h2 class="card-header-title w-full mb-2 text-lg">
    Password
</h2>

<div class="pb-6 w-full border-0 border-red-300">
    <input type="text" id="login-with-bg-password" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="password"/>

</div>
  
 

            <div class="w-full pb-0 ml-auto text-gray-500 md:w-1/3">
                <button type="" class="py-2 px-4 bg-blue-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                    Save
                </button>
            </div>
</form>
<!-- CONTENT ROW ends -->

<!-- MODAL EMAIL starts-->
<input type="checkbox" id="my-modal-n" class="modal-toggle">
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-semibold text-md text-slate-800">EMAIL INFO</p>
    <div class="modal-action">
      <label for="my-modal-n" class="btn-default p-2 px-4 text-sm">Close</label>
    </div>
  </div>
</div>
<!-- MODAL EMAIL ends-->

        `;
    }
}