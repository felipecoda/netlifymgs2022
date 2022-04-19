import AbstractView from "./AbstractView.js";
import '../styles/main.css'

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("MGS 2022 - Dashboard");
        this.setActiveLink("dashboard");
    }

    async getHtml() {
        return `
<!-- HEADER starts -->
<div class="row">
    <div class="header">   
        <h4 class="screen-title animate-fade-in-down">Dashboard</h4>   
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
<div class="row border-0 border-green-400">

<!-- WELCOME starts -->
<div class="border-0 border-red-400 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full flex flex-col">
<div class="card-default flex-1">
        <div class="card-header">
        <p class="card-header-title">
                Welcome to MediaGrowth Summit 2022!
            </p>
        </div>
        <div class="m-6">
            <p class="text-slates-400 dark:text-gray-300 text-base mb-4">
                Insights And Strategies For The Next Successes In B2B Media. Expand Knowledge and Test New Ideas in Focus Sessions for: C-Suite, Digital/Technology, Editorial, Sales & Marketing. Track your progress thoughout the three days of the summit.
            </p>
            <div class="flex dark:text-gray-200 items-center justify-between">
                <p class="font-bold">Day One: sessions completed</p>
                <p class="font-bold">100%</p>
            </div>
            <div class="w-full h-4 bg-gray-500 rounded-full mt-3 mb-6">
                <div class="w-1/c h-full text-center text-xs text-white bg-green-400 rounded-full">
                </div>
            </div>
            <div class="flex dark:text-gray-200 items-center justify-between">
                <p class="font-bold">Day Two: sessions completed</p>
                <p class="font-bold">33%</p>
            </div>
            <div class="w-full h-4 bg-blue-500 rounded-full mt-3 mb-6">
                <div class="w-1/3 h-full text-center text-xs text-white bg-yellow-400 rounded-full">
                </div>
            </div>
            <div class="flex dark:text-gray-200 items-center justify-between">
                <p class="font-bold">Day Three: sessions completed</p>
                <p class="font-bold">0%</p>
            </div>
            <div class="w-full h-4 bg-blue-400 rounded-full mt-3 mb-1">
                <div class="w-1/1 h-full text-center text-xs text-white bg-blue-500 rounded-full">
                </div>
            </div>
        </div>
    </div>    
</div>
<!-- WELCOME ends -->  

<!-- FLEX COL starts --> 

<div class="xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-full w-full relative flex flex-col">
    <!-- CURRENT SESSION starts -->   
    <div class="card-default">
        <div class="px-6 py-4 bg-yellow-400">
            <p class="flex text-blue-600 dark:text-white text-2xl font-bold items-center ">
                Current Session
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            </p>
        </div>
        <div class="p-6 pt-5 bg-yellow-300">   
            <p class="text-red-600 dark:text-gray-300 text-sm font-bold mb-2">
            June 15, 2022 — 2:30PM
            </p>
            <ul>
           <li class="flex items-center my-4">
                <a href="#" class="block self-start pr-4 w-2/5">
                    <img alt="" src="craig-fuller.jpg" class="rounded-full items-center"/>
                </a>
                <div class="flex flex-col w-3/5">
                    <div class="text-sm text-slate-800 font-bold dark:text-white leading-tight">
                        Content supported SaaS, First Party Data, everything...
                    </div>
                    <div class="mt-2 mb-1 text-sm text-slate-800 dark:text-gray-300 leading-tight italic">
                        Craig Fuller — CEO, FreightWaves
                    </div>
                </div>
            </li>
            </ul>
            <div class="btn-default p-2 px-4 text-sm max-w-min whitespace-nowrap">
                        See details <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </div>
        </div>
    </div>
    <!-- CURRENT SESSION ends --> 

    <!-- OTHER starts-->   
    <div class="rounded-xl m-3 px-6 py-4 bg-blue-700 dark:bg-gray-600 animate-fade-in flex-1 flex flex-wrap items-center">

        <div class="text-slate-100 dark:text-white text-2xl font-bold mb-2 w-full">
            Next...

            <p class="text-blue-300 dark:text-gray-300 text-lg font-medium w-full">
        Break — 2:55 to 3:30 PM
        </p>
        
        </div>
        
    </div>
    <!-- OTHER ends -->
</div>
<!-- FLEX COL ends -->

<!-- TODAY'S SESSIONS start -->   
<div class="xl:w-1/4 lg:w-full md:w-full sm:w-full w-full flex flex-col">
<div class="card-default bg-blue-700 flex-1">
    <div class="card-header border-b border-blue-600">
        <p class="card-header-title">
            Today's Sessions
        </p>
    </div>
    <div class="m-6 mt-2 mr-0">
        <ul class="sc mb-6 overflow-y-scroll h-72">
            <li class="flex items-center my-4">
                <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="jennifer-litterick.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Content supported SaaS, First Party Data, everything...
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        Jennifer Litterick — CEO, EnsembleIQ
                    </div>
                </div>
            </li>
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="paras-maniar.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Current State of the Industry
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        Paras Maniar — CEO, Bobit
                    </div>
                </div>
            </li>
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="jill-mcdermott.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Recruiting, Motivating, Training and Retaining Talent
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        Jill McDermott — CEO, Trade Press Media Group
                    </div>
                </div>
            </li>
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="james-hewes.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Trends in Global Media
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        James Hewes — CEO, FIPP
                    </div>
                </div>
            </li> 
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="tara-may-tesimu.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Why Running a Media Company is so Darn Hard and How Recurring Revenue Can Help.
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        Tara May Tesimu — CEO, FIPP
                    </div>
                </div>
            </li>  
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="logo-white.png" class="rounded-full h-10 w-10 items-start"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        BREAK
                    </div>
                    
                </div>
            </li>   
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="kathi.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Renewal
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        Kathi Simonsen — CEO, MediaGrowth
                    </div>
                </div>
            </li>  
            <li class="flex items-center my-4">
                 <a href="#" class="self-start pr-2 min-w-max">
                    <img alt="" src="dan-fink.jpg" class="rounded-full h-10 w-10 items-start min-w-min"/>
                </a>
                <div class="flex flex-col">
                    <div class="text-sm text-blue-300 font-bold dark:text-white leading-tight">
                        Practical Steps to Get Revenue From Readers
                    </div>
                    <div class="mr-2 mt-0 mb-1 text-sm text-blue-300 dark:text-gray-300 leading-tight italic">
                        Dan Fink — CEO, FIPP
                    </div>
                </div>
            </li>                        
        </ul>
        <div class="btn-default p-2 px-4 text-sm max-w-min whitespace-nowrap bg-blue-600">
                        View full agenda <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </div>
    </div>
</div>
</div>
<!-- TODAY'S  SESSIONS ends -->




</div>
<!-- CONTENT ROW ends -->

<!-- CONTENT ROW starts -->
<div class="row border-0 border-green-400">

<!-- SPONSORS starts --> 
    <div class="border-0 border-red-400 lg:w-1/3 md:w-full sm:w-full w-full">  
        <div class="card-default">
                <div class="card-header">
                    <p class="card-header-title">Sponsors</p>
                </div>
                <div class="m-6 mt-4">
                    <p class="text-blue-300 dark:text-gray-300 font-medium mb-4 p-0">
                    Meet the sponsors that make MediaGrowth Summit possible.
                    </p>
                    <div class="btn-default p-2 px-4 text-sm max-w-min whitespace-nowrap">
                                    View sponsors <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                </div>
        </div>  
    </div>
<!-- SPONSORS ends -->

<!-- PRESENTERS starts --> 
    <div class="border-0 border-red-400 lg:w-1/3 md:w-full sm:w-full w-full">  
        <div class="card-default">
                <div class="card-header">
                    <p class="card-header-title">Presenters</p>
                </div>
                <div class="m-6 mt-4">
                    <p class="text-blue-300 dark:text-gray-300 font-medium mb-4 p-0">
                    Read about the presenters for each individual session.
                    </p>
                    <div class="btn-default p-2 px-4 text-sm max-w-min whitespace-nowrap">
                                    View sponsors <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                </div>
        </div>  
    </div>
<!-- PRESENTERS ends -->

<!-- AGENDA starts --> 
    <div class="border-0 border-red-400 lg:w-1/3 md:w-full sm:w-full w-full">  
        <div class="card-default">
                <div class="card-header">
                    <p class="card-header-title">Agenda</p>
                </div>
                <div class="m-6 mt-4">
                    <p class="text-blue-300 dark:text-gray-300 font-medium mb-4 p-0">
                    See the full summit schedule and read about each individual session.
                    </p>
                    <div class="btn-default p-2 px-4 text-sm max-w-min whitespace-nowrap">
                        View presenters <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    </div>
                </div>
        </div> 
    </div>
<!-- AGENDA ends -->

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