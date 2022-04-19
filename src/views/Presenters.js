import AbstractView from "./AbstractView.js";
import presentersData from "../data/presentersData.js"
import '../styles/main.css'

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MGS 2022 - Presenters");
        this.setActiveLink("presenters");           
    }

    async getHtml() {
        return `
<!-- HEADER starts -->
<div class="row">
    <div class="header">   
        <h4 class="screen-title animate-fade-in-down">Presenters</h4>   
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
<div class="row mb-4">
${
        (function daLoop() {
            let pP = ''
            for (let i = 0; i < presentersData.length; i++) {
                pP += `      
                <!-- PRESENTER starts -->
                    <div class="flex flex-wrap w-full xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 ">
                    <div class="card-default bg-blue-600 border-0 border-green-400 flex flex-col w-full">
                            <div class=rounded-md">
                                <img alt="" src="${presentersData[i].image}" class="w-full"/>
                            </div>
                            <p class="card-header-title pt-6 px-6">
                                    ${presentersData[i].name}
                            </p>
                            <p class="font-medium text-sm text-blue-400 mb-2 px-6 flex-1">${presentersData[i].title}</p>
                            <label for="my-modal-${presentersData[i].id}" class=" "><span class="flex items-center text-sm font-medium text-slate-300 px-6 pb-6">
                        Read bio <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </span></label>
                            </div>        
                    </div>
                <!-- PRESENTER ends -->  
                
                <!-- MODAL starts-->
<input type="checkbox" id="my-modal-${presentersData[i].id}" class="modal-toggle">
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-semibold text-md text-slate-800">${presentersData[i].bio}</p>
    <div class="modal-action">
      <label for="my-modal-${presentersData[i].id}" class="btn-default p-2 px-4 text-sm">Close</label>
    </div>
  </div>
</div>
<!-- MODAL ends-->
`      
            }
return pP      
        })()      
}

</div>
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