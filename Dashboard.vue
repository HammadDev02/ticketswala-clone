<template>
    <div class="w-full">
        <div class="w-full lg:w-10/12 ml-auto lg:h-full bg-[#222736] overflow-auto pt-24 pb-36 px-4">


            <div class="flex flex-wrap gap-6 ">
                <div class="md:w-[31%] sm:w-[48%] w-full bg-[#2a3042] p-6 rounded-md">
                    <div class="flex justify-between items-center">
                        <div class="flex-col justify-around	">
                            <h2 class="text-[#a6b0cf]">Available Busses</h2>
                            <p class="text-white text-xl font-bold mt-2">125</p>
                        </div>
                        <div
                            class="w-12 h-12 z-10 relative flex justify-center items-center rounded-full bg-[#556ee6] before:absolute before:left-[13px] before:top-[-1px] before:content-[''] before:w-2 before:h-[43px] before:bg-white/10 before:rotate-[32deg] before:z-[-1]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
                                <path
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                                    fill="rgba(255,255,255,1)"></path>
                            </svg>
                        </div>
                    </div>
                </div>


                <div class="md:w-[31%] sm:w-[48%] w-full bg-[#2a3042] p-6 rounded-md">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-[#a6b0cf]">Pending Projects</h2>
                            <p class="text-white text-xl font-bold mt-2">12</p>
                        </div>
                        <div
                            class="w-12 h-12 z-10 relative flex justify-center items-center rounded-full bg-[#556ee6] before:absolute before:left-[13px] before:top-[-1px] before:content-[''] before:w-2 before:h-[43px] before:bg-white/10 before:rotate-[32deg] before:z-[-1]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                                <path
                                    d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.88457 8.43384 7.71032 9.2811 8.58583C10.008 9.33699 10.9548 10.0398 12 10.7781C13.0452 10.0398 13.992 9.33699 14.7189 8.58583C15.5662 7.71032 16 6.88457 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C8.43384 16.2897 8 17.1154 8 18V20H16V18C16 17.1154 15.5662 16.2897 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"
                                    fill="rgba(255,255,255,1)"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="md:w-[31%] sm:w-[48%] w-full bg-[#2a3042] p-6 rounded-md">

                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-[#a6b0cf]">Total Revenue</h2>
                            <p class="text-white text-xl font-bold mt-2">$36,524</p>
                        </div>
                        <div
                            class="w-12 h-12 z-10 relative flex justify-center items-center rounded-full bg-[#556ee6] before:absolute before:left-[13px] before:top-[-1px] before:content-[''] before:w-2 before:h-[43px] before:bg-white/10 before:rotate-[32deg] before:z-[-1]">
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="white"
                                    d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16a.35.35 0 0 0-.05-.08l-.1-.13l-.08-.06l-.12-.09l-9-5a1 1 0 0 0-1 0l-9 5l-.09.07l-.11.08a.41.41 0 0 0-.07.11a.39.39 0 0 0-.08.1a.59.59 0 0 0-.06.14a.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06l9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52l6.83 3.9zm0-7.72L18.94 8L16.7 9.25L9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z">
                                </path>
                            </svg>
                        </div>
                    </div>



                </div>
            </div>

            <div class="flex flex-wrap lg:flex-nowrap gap-4 mt-8">
                <div
                    class="lg:w-1/2 w-full lg:flex-nowrap flex-wrap relative overflow-x-auto bg-[#2a3042] py-2 px-6 rounded-md">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-3">
                        <thead class="text-xs ">
                            <tr class="px-3 ">
                                <th colspan="4" scope="col" class="py-4 w-full text-xl">
                                    Recent Booking
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap ">
                                    #
                                </th>
                                <td class="py-5 text-center font-bold">
                                    Name
                                </td>
                                <td class="py-5 text-center font-bold">
                                    Route
                                </td>
                                <td class="py-5 text-center font-bold">
                                    Type
                                </td>
                            </tr>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap">
                                    1
                                </th>
                                <td class="py-5 text-center">
                                    M.Ali
                                </td>
                                <td class="py-5 text-center">
                                    Karachi to Swat
                                </td>
                                <td class="py-5 text-center">
                                    Luxury
                                </td>
                            </tr>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap">
                                    2
                                </th>
                                <td class="py-5 text-center">
                                    Nasir G.
                                </td>
                                <td class="py-5 text-center">
                                    Lahore to Rawalpindi
                                </td>
                                <td class="py-5 text-center">
                                    Economy
                                </td>
                            </tr>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap">
                                    3
                                </th>
                                <td class="py-5 text-center">
                                    A Rehman
                                </td>
                                <td class="py-5 text-center">
                                    Lahore To Islamabad
                                </td>
                                <td class="py-5 text-center">
                                    Sleeper
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    class="lg:w-1/2 w-full lg:flex-nowrap flex-wrap relative overflow-x-auto bg-[#2a3042] py-2 px-6 rounded-md">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-3">
                        <thead class="text-xs">
                            <tr class="px-3 ">
                                <th colspan="4" scope="col" class="py-4 w-full text-xl">
                                    Upcoming Trips
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap ">
                                    #
                                </th>
                                <td class="py-5 text-center font-bold">
                                    Name
                                </td>
                                <td class="py-5 text-center font-bold">
                                    Route
                                </td>
                                <td class="py-5 text-center font-bold">
                                    Type
                                </td>
                            </tr>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap">
                                    1
                                </th>
                                <td class="py-5 text-center">
                                    M.Ali
                                </td>
                                <td class="py-5 text-center">
                                    Karachi to Swat
                                </td>
                                <td class="py-5 text-center">
                                    Luxury
                                </td>
                            </tr>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap">
                                    2
                                </th>
                                <td class="py-5 text-center">
                                    Nasir G.
                                </td>
                                <td class="py-5 text-center">
                                    Lahore to Rawalpindi
                                </td>
                                <td class="py-5 text-center">
                                    Economy
                                </td>
                            </tr>
                            <tr class="border-t border-[#32394e]">
                                <th scope="row" class="py-5 font-bold whitespace-nowrap">
                                    3
                                </th>
                                <td class="py-5 text-center">
                                    A Rehman
                                </td>
                                <td class="py-5 text-center">
                                    Lahore To Islamabad
                                </td>
                                <td class="py-5 text-center">
                                    Sleeper
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() { },
    components: {},
    methods: {},
};
</script>
<style></style>







  <!-- <div
                class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-l font-bold leading-none text-primary-text">Availabale Busses</h5>
                </div>
                <div class="w-full flex items-center">
                    <div class="w-1/3 bg-slate-400 py-12"></div>
                    <div class="w-1/3 bg-slate-400 py-12"></div>
                    <div class="w-1/3 bg-slate-400 py-12"></div>
                </div>
            </div> -->