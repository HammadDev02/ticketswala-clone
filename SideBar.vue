<template>
    <div>
        <!-- Desktop sidebar -->
        <aside id="sidebar-multi-level-sidebar"
            class="fixed top-0 left-0 z-40 w-[230px] h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-[#2a3042]">

                <router-link class="text-white text-center font-semibold text-xl mb-12" :to="'/dashboard'">
                    Ticket Wala
                </router-link>




                <ul class=" font-medium mt-[10px]" v-for="(item, index) in menuOption" :key="index">
                    <li class="flex justify-between items-center rounded-lg text-gray-400 group" @click="handler(item)">
                        <a href="#" class="flex items-center p-2 rounded-lg  group-hover:text-white w-[400px] mt-[20px]">
                            <div v-html="item.icon"></div>
                            <!-- <span class="ml-3 text-sm"></span> -->


                            <router-link class="ml-3 text-sm" :to="'/dashboard'">
                                {{ item?.label }}
                            </router-link>
                        </a>

                        <!-- <svg v-if="item?.subMenu?.length > 0" class="w-6 h-6 mr-3 group-hover:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg> -->
                    </li>
                    <ul v-if="item?.subMenu?.length > 0 && item?.isExpanded" id="dropdown-example"
                        class="dropdown-example py-2  mt-[20px]">
                        <li>
                            <router-link
                                class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-gray-400 hover:text-white text-xs"
                                :to="'/all-companies'">
                                All Companies
                            </router-link>
                        </li>
                    </ul>
                </ul>

            </div>
        </aside>

    </div>
</template>
<script>
export default {
    data() {
        return {
            isPagesMenuOpen: false,
            menuOption: [
                {
                    label: "Dashboard",
                    source: '',
                    icon: `<svg class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z" fill="rgba(163,173,204,1)"></path></svg>`,
                    isExpanded: false,
                    subMenu: []
                },
                {
                    label: "Company",
                    source: '',
                    icon: `<svg class='w-5 h-5 hover:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z" fill="rgba(163,173,204,1)"></path></svg>`,
                    isExpanded: false,
                    subMenu: [{ label: 'Companies', source: '', icon: '' }]
                },
                // {
                //     label: "Tickets",
                //     source: '',
                //     icon: `<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                //                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                //                 viewBox="0 0 18 21">
                //                 <path
                //                     d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                //             </svg>`,
                //     isExpanded: false,
                //     subMenu: []
                // },
            ],
        }
    },
    mounted() { },
    methods: {
        togglePagesMenu() {
            this.isPagesMenuOpen = !this.isPagesMenuOpen
        },
        handler(item) {
            console.log("Item =====> ", item)
            item.isExpanded = !item.isExpanded;
        }
    },
}
</script>