<template>
    <div class="w-10/12 ml-auto my-auto mt-[40px]">
        <div class="lg:w-[90%] w-full mx-auto mt-20 flex items-center justify-between">
            <div v-if="Cvloader" id="loader"
                class="loader mainload container absolute w-10/12 z-[99] bottom-0 left-0 right-0 !h-[90vh] bg-[#222736] opacity-90 flex justify-center items-center"
                data-html2canvas-ignore="true">
                <div>
                    <div role="status" class=" flex justify-center items-center top-[500px]">
                        <svg aria-hidden="true"
                            class="w-[50px] h-[50px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#eeee]"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only flex items-center">Loading...</span>
                    </div>
                    <div>
                        <h2 class="text-white pt-4 text-sm">Loading...</h2>
                    </div>
                </div>
            </div>
            <h1 class="text-white text-xl font-extrabold">Companies</h1>
            <input type="text" placeholder="Search"
                class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">




            <button
                class="bg-[#556ee6] h-12 p-4 flex justify-center items-center rounded-md text-white text-xs hover:bg-[#3452e1]">
                <router-link class="" :to="'/create-company'">
                    Add New Company
                </router-link>
            </button>

            <!-- <li>
                <router-link class="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-gray-400 hover:text-white text-xs" :to="'/create-company'">
                    Add new company
                </router-link>
            </li> -->

        </div>
        <div
            class="lg:w-[90%] mt-6 lg:h-[500px] w-full lg:flex-nowrap flex-wrap relative overflow-x-auto bg-[#2a3042] py-2 px-6 rounded-md m-auto">



            <!-- <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-3">
                <thead class="text-xs ">
                    <tr class="px-3 ">
                        <th scope="col" class="py-4 text-l text-white">
                            Actions
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white">
                            Code
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white">
                            Name
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white">
                            Email
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white">
                            Phone No
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white ">
                            Operating From
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white">
                            Address
                        </th>
                        <th scope="col" class="py-4 text-l text-center text-white">
                            Created On
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="companies.length > 0">
                        <tr v-for="(company, index) in companies" :key="index" class="border-t border-[#32394e]">

                            <th scope="row" class="py-5 font-bold whitespace-nowrap ">
                                <div class="flex align-center justify-start ">
                                    <router-link :to="'/update-company/' + company?.companyId">
                                        <div
                                            class="relative group w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0000000a]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
                                                <path
                                                    d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z"
                                                    fill="rgba(191,200,226,1)"></path>
                                            </svg>

                                            <div
                                                class="absolute hidden -bottom-8 group-hover:block text-[10px] bg-[#5e5e5e66] rounded-md w-[35px] text-white text-center">
                                                Edit</div>
                                        </div>
                                    </router-link>
                                    <div class="relative group w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0000000a]"
                                        @click="popupAlert(company)">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ">
                                                <path
                                                    d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"
                                                    fill="rgba(191,200,226,1)"></path>
                                            </svg>
                                        </div>
                                        <div
                                            class="absolute hidden -bottom-8 group-hover:block text-[10px] bg-[#5e5e5e66] rounded-md w-[35px] text-white text-center">
                                            Delete</div>
                                    </div>
                                </div>

                            </th>
                            <td class="py-5 text-center font-bold">
                                {{ company.companyCode }}
                            </td>
                            <td class="py-5 text-center font-bold">
                                {{ company.name }}
                            </td>
                            <td class="py-5 text-center font-bold">
                                {{ company.email }}
                            </td>
                            <td class="py-5 text-center font-bold">
                                {{ company.phone }}
                            </td>
                            <td class="py-5 text-center font-bold">
                                {{ company.operatingFrom }}
                            </td>
                            <td class="py-5 text-center font-bold">
                                {{ company.address }}
                            </td>
                            <td class="py-5 text-center font-bold">
                                {{ company.createdOn }}
                            </td>
                        </tr>
                    </template>
                    <span v-else>No result</span>
                </tbody>
            </table> -->

            <data-table :columns="columns" :data="users" />
        </div>
        <ModalDialog v-if="isModalVisible" @append-closeModal="popupAlert()" @append-deleteCompany="deleteCompany" />
    </div>
</template>
<script>
import apiService from '../services/apiService';
import ModalDialog from './ModalDialog.vue';
import DataTable from 'vue-datatable';
// import { useConfirmBeforeAction } from '../helpers/confirm-dialog.js';

export default {
    data() {
        return {
            companies: [],
            Cvloader: false,
            isModalVisible: false,
            selectedID: null,
            columns: [
                { label: 'Actions', field: 'id' },
                { label: 'Name', field: 'name' },
                { label: 'Email', field: 'email' },
                { label: 'Phone No', field: 'phone_no' }
            ],
        }
    },
    created() {
        this.apiService = new apiService();
    },
    mounted() {
        this.getAllCompanies();
    },
    components: {
        ModalDialog,
        DataTable
    },

    methods: {
        async getAllCompanies() {
            await this.apiService
                .getCompaniesList()
                .then((res) => {
                    this.companies = res.data;
                    console.log("Companies Data =======> ", res.data)
                })
                .catch((error) => {
                    console.error("Don't get companies=====>>>", error);
                });
        },
        popupAlert(company = null) {
            this.selectedID = (company?.companyId != undefined || company?.companyId != null) ? company.companyId : null;
            this.isModalVisible = !this.isModalVisible;  // Update the data property to show the modal
        },
        async deleteCompany() {
            if (this.selectedID != null) {
                await this.apiService
                    .deleteCompany(this.selectedID)
                    .then((res) => {
                        this.$notify({ title: "Company Deleted Successfully", type: "success" });
                        this.popupAlert();
                        this.getAllCompanies();
                    })
                    .catch((error) => {
                        console.error("Don't get companies=====>>>", error);
                    });
            }
            else {
                this.$notify({ title: "Select any company first to be deleted", type: "error" });
            }
        }
    },

}
</script>
<style>
.loader.container {
    max-width: 100% !important;
}

.loader {
    width: 83.2%;
    margin-left: auto;
    height: auto;
    stroke-linecap: round;
}
</style>
