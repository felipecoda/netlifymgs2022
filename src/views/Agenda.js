import AbstractView from "./AbstractView.js";
import '../styles/main.css'

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MGS 2022 - Agenda");
        this.setActiveLink("agenda");
    }

    async getHtml() {
        return `
<!-- HEADER starts -->
<div class="row">
    <div class="header">   
        <h4 class="screen-title animate-fade-in-down">Agenda</h4>   
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
<div class="row">

<!-- TABLE 1 starts -->
<div class="p-0 w-full m-3 rounded-2xl">
        <p class="text-slate-100 dark:text-slate-100 text-2xl font-bold">
                Tuesday, June 14, 2022
        </p>
</div>

<table class="border-collapse w-full m-3">
    <thead>
        <tr class="text-start">
            <td class="rounded-tl-xl p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Time</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Presenter</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Session</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Location</td>
            <td class="rounded-tr-xl p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell"></td>
        </tr>
    </thead>
    <tbody>

    <!-- ROW 1 -->    
        <tr class="rounded-t-xl bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Registration, Greeting and Reconnecting with Colleagues</div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 2 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="kathi.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Kati Simonsen</div>
                    <div class="text-sm opacity-50">CEO, Mediagrowth</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Welcome to MediaGrowth Summit 2022</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 3 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>3:35 PM – 5:00 PM<br>
                    FOCUS SESSION #1</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="kathi.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Kati Simonsen</div>
                    <div class="text-sm opacity-50">CEO, Mediagrowth</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>
                          Catching-Up; What have we learned?
  
<ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
<li class="text-sm opacity-50">Editorial Discussion – Website Traffic & Engagement</li>
<li class="text-sm opacity-50">Technology Discussion – Data Profit & Privacy</li>
<li class="text-sm opacity-50">Sales Discussion – Shaking the Funnel</li>
<li class="text-sm opacity-50">Events – Agony & Ecstasy</li>
<li class="text-sm opacity-50">Subscriptions – Yes or No?</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
                </div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 4 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>5:00 PM – 7:00 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <img src="logo-readex.png" alt="" class="w-36"/>
            
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Welcome Reception — Hosted by Readex Research</div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

    </tbody>
        <!-- foot -->
    <tfoot>
      <tr>
        <td class="bg-blue-200 h-3 rounded-bl-xl"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200 h-3 rounded-br-xl"></td>
      </tr>
    </tfoot>
</table>

<!-- TABLE 1 ends -->

<!-- TABLE 2 starts -->
<div class="p-0 w-full m-3 rounded-2xl">
        <p class="text-slate-100 dark:text-slate-100 text-2xl font-bold">
                Wednesday, June 15, 2022
            </p>
</div>

<table class="border-collapse w-full m-3">
    <thead>
        <tr class="text-start">
            <td class="rounded-tl-xl p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Time</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Presenter</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Session</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Location</td>
            <td class="rounded-tr-xl p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell"></td>
        </tr>
    </thead>
    <tbody>

    <!-- ROW 1 -->    
                <tr class="rounded-t-xl bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
		<img src="logo-omeda.png" alt="" class="w-36"/>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Breakfast Buffet</div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 2 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>8:05 AM – 8:50 AM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="josh-brous.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600"> Josh Brous</div>
                    <div class="text-sm opacity-50">Senior Vice President of Events, ZondaHome</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>What’s Next for Events</div>
                
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 3 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="jill-mcdermott.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Jill McDermott</div>
                    <div class="text-sm opacity-50">CEO and GM, Trade Press Media Group</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Industry Update</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 4 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="paras-maniar.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Paras Maniar</div>
                    <div class="text-sm opacity-50">CEO, Bobit</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Content supported SaaS, First Party Data, everything…</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 5 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>3:35 PM – 5:00 PM<br>
                    FOCUS SESSION #1</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="dan-fink.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Dan Fink</div>
                    <div class="text-sm opacity-50">Managing Director, Money-Media Inc.</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>
                          Catching-Up; What have we learned?
  
<ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
<li class="text-sm opacity-50">Editorial Discussion – Website Traffic & Engagement</li>
<li class="text-sm opacity-50">Technology Discussion – Data Profit & Privacy</li>
<li class="text-sm opacity-50">Sales Discussion – Shaking the Funnel</li>
<li class="text-sm opacity-50">Events – Agony & Ecstasy</li>
<li class="text-sm opacity-50">Subscriptions – Yes or No?</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
                </div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

        <!-- ROW 2 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="jennifer-litterick.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Jennifer Litterick</div>
                    <div class="text-sm opacity-50">CEO, EnsembleIQ</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Appointments with Resource Providers</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 6 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="james-hewes.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">James Hewes</div>
                    <div class="text-sm opacity-50">CEO, FIPP</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Welcome to MediaGrowth Summit 2022</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 7 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>5:00 PM – 7:00 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <img src="logo-maghub.png" alt="" class="w-36"/>
            
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Welcome Reception — Hosted by Readex Research</div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

    </tbody>
        <!-- foot -->
    <tfoot>
      <tr>
        <td class="bg-blue-200 rounded-bl-xl"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200 h-3 rounded-br-xl"></td>
      </tr>
    </tfoot>
</table>

<!-- TABLE 2 ends -->

<!-- TABLE 3 starts -->
<div class="p-0 w-full m-3 rounded-2xl">
        <p class="text-slate-100 dark:text-slate-100 text-2xl font-bold">
                Thursday, June 16, 2022
            </p>
</div>

<table class="border-collapse w-full m-3">
    <thead>
        <tr class="text-start">
            <td class="rounded-tl-xl p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Time</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Presenter</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Session</td>
            <td class="p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell">Location</td>
            <td class="rounded-tr-xl p-4 text-sm font-bold uppercase text-start bg-blue-200 text-slate-600 border-0 border-slate-300 hidden lg:table-cell"></td>
        </tr>
    </thead>
    <tbody>

    <!-- ROW 1 -->    
                <tr class="rounded-t-xl bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
		<img src="logo-fry.png" alt="" class="w-36"/>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Breakfast Buffet</div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 2 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>8:05 AM – 8:50 AM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="james-hewes.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">James Hewes</div>
                    <div class="text-sm opacity-50">Senior Vice President of Events, ZondaHome</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>What’s Next for Events</div>
                
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 3 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="tara-may-tesimu.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Tara May Tesimu</div>
                    <div class="text-sm opacity-50">CEO and GM, Trade Press Media Group</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Practical Steps to Get Revenue From Readers</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 4 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="paras-maniar.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Paras Maniar</div>
                    <div class="text-sm opacity-50">CEO, Bobit</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Industry Update/Interview</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span> 
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 5 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>3:35 PM – 5:00 PM<br>
                    FOCUS SESSION #1</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="dan-fink.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Dan Fink</div>
                    <div class="text-sm opacity-50">Managing Director, Money-Media Inc.</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>
                          Catching-Up; What have we learned?
  
<ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
<li class="text-sm opacity-50">Editorial Discussion – Website Traffic & Engagement</li>
<li class="text-sm opacity-50">Technology Discussion – Data Profit & Privacy</li>
<li class="text-sm opacity-50">Sales Discussion – Shaking the Funnel</li>
<li class="text-sm opacity-50">Events – Agony & Ecstasy</li>
<li class="text-sm opacity-50">Subscriptions – Yes or No?</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
                </div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

        <!-- ROW 2 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="jennifer-litterick.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">Jennifer Litterick</div>
                    <div class="text-sm opacity-50">CEO, EnsembleIQ</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>The Thing About Data</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-yellow-400 text-slate-800">Sales</span><span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-purple-400 text-slate-800">C-Suite</span><span class="badge badge-ghost badge-sm bg-orange-400 text-slate-800">Subscriptions</span>  
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 6 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>2:00 PM – 3:30 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg mb-2">Presenter</div>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12">
                      <img src="james-hewes.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-slate-600">James Hewes</div>
                    <div class="text-sm opacity-50">CEO, FIPP</div>
                  </div>
                </div>
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Why Running a Media Company is so Darn Hard and How Recurring Revenue Can Help.</div>
                <ul>
<li class="text-sm opacity-50">C-Suite Discussion — Digital Disruption and Innovation</li>
</ul>
  <span class="badge badge-ghost badge-sm bg-red-400 text-slate-800">Tech</span><span class="badge badge-ghost badge-sm bg-green-400 text-slate-800">Editorial</span><span class="badge badge-ghost badge-sm bg-blue-400 text-slate-800">Events</span> 
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

<!-- ROW 7 -->    
        <tr class="bg-white lg:hover:bg-slate-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 mb-0 border-t border-b border-slate-100">
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Time</div>
                <div>5:00 PM – 7:00 PM</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
            <img src="logo-credspark.png" alt="" class="w-36"/>
            
            </td>
          	<td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Session</div>
                <div>Welcome Reception — Hosted by Readex Research</div>
          	</td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start block lg:table-cell relative lg:static">
                <div class="lg:hidden w-24 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase  rounded-br-lg">Location</div>
                <div>Rosemont Room</div>
            </td>
            <td class="w-full lg:w-auto p-3 text-slate-800 text-start text-center block lg:table-cell relative lg:static">
                
                 <label for="my-modal-5" class=" "><div class="btn-small flex items-center text-md font-medium text-slate-50">
                                Details <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </div></label>
            </td>
        </tr>

    </tbody>
        <!-- foot -->
    <tfoot>
      <tr>
        <td class="bg-blue-200 h-3 rounded-bl-xl"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200"></td>
        <td class="bg-blue-200 h-3 rounded-br-xl"></td>
      </tr>
    </tfoot>
</table>


<!-- TABLE 3 ends -->


                <!-- MODAL starts-->
<input type="checkbox" id="my-modal-5" class="modal-toggle">
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-semibold text-md text-slate-800">Session info goes here...</p>
    <div class="modal-action">
      <label for="my-modal-5" class="btn-default p-2 px-4 text-sm">Close</label>
    </div>
  </div>
</div>
<!-- MODAL ends-->

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