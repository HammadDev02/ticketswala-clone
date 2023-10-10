<!-- <template>
    <div>
        <div
            class="lg:w-[90%] my-12 w-full lg:flex-nowrap flex-wrap relative overflow-x-auto bg-[#2a3042] py-2 px-6 rounded-md mx-auto ">
            <div class="flex flex-col justify-around h-[120px] ">
                <input type="file"
                    class=" file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold first-letter:file:bg-violet-50-700 file:bg-[#32394e] file:text-[#a3adcc] text-white " />
                <h1 class="text-white font-bold text-2xl">Add Company</h1>
            </div>

            <div class="flex justify-between items-start">

                <div class="w-[48%] flex flex-col justify-evenly">

                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Name</label>
                        <input v-model="companiesData.name" type="text" placeholder="Name"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Phone</label>
                        <input type="number" v-model="companiesData.phone" placeholder="Phone"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border-[0.75px] border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Address</label>
                        <input type="text" v-model="companiesData.address" placeholder="Address"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border-[0.75px] border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Unique Company Code</label>
                        <input required="true" maxlength="3" type="text" v-model="companiesData.companyCode"
                            placeholder="Unique Company Code"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border-[0.75px] border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <button v-if="!loading"
                        class="w-[120px] mt-2 px-8 py-2 rounded-md text-white bg-[#556ee6] hover:bg-[#3452e1]"
                        @click="createCompanyHandler()">Add</button>
                    <button v-else
                        class="w-[120px] mt-2 px-8 py-2 rounded-md text-white bg-[#556ee6] hover:bg-[#3452e1]">Saving...</button>
                </div>




                <div class="w-[48%] flex flex-col justify-start items-start p-[8px]">

                    <div class="mb-2  flex flex-col justify-between items-start ">
                        <label class="w-[402px] text-[#a6b0cf] font-semibold mb-2 text-sm">Email</label>
                        <input v-model="companiesData.email" type="email" placeholder="Email"
                            class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="mt-2 mb-4 flex flex-col justify-between items-start h-[60px] ">
                        <label class="w-[402px] text-[#a6b0cf] font-semibold mb-2 text-sm">Operating From</label>
                        <input v-model="companiesData.operatingFrom" type="text" placeholder="Operating From"
                            class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="mt-2 mb-4 flex flex-col justify-between items-start h-[60px] ">
                        <label class="w-[402px] text-[#a6b0cf] font-semibold mb-2 text-sm">Password</label>
                        <input v-model="companiesData.password" type="password" placeholder="Operating From"
                            class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style></style> -->



<template>
    <div class="w-10/12  w- ml-auto h-[90vh] mt-auto text-sm text-left p-3 bg-[#222736] overflow-auto">
        <div
            class="lg:w-[90%] my-12 w-full lg:flex-nowrap flex-wrap relative overflow-x-auto bg-[#2a3042] py-2 px-6 rounded-md mx-auto ">
            <div class="flex flex-col justify-around h-[120px] ">
                <input type="file"
                    class=" file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold first-letter:file:bg-violet-50-700 file:bg-[#32394e] file:text-[#a3adcc] text-white " />
                <h1 class="text-white font-bold text-2xl">Edit Company</h1>
            </div>

            <div class="flex justify-between items-start">

                <div class="w-[48%] flex flex-col justify-evenly">

                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Name</label>
                        <input v-model="companiesData.name" type="text" placeholder="Name"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Phone</label>
                        <input type="number" v-model="companiesData.phone" placeholder="Phone"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border-[0.75px] border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Address</label>
                        <input type="text" v-model="companiesData.address" placeholder="Address"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border-[0.75px] border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="my-2 flex flex-col justify-between items-start h-[60px] ">
                        <label class="text-[#a6b0cf] font-semibold mb-2 text-sm">Unique Company Code</label>
                        <input required="true" maxlength="3" type="text" v-model="companiesData.companyCode"
                            placeholder="Unique Company Code"
                            class="w-[402px] rounded-md py-1.5 px-3 outline-none border-[0.75px] border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <button v-if="!loading"
                        class="w-[120px] mt-2 px-8 py-2 rounded-md text-white bg-[#556ee6] hover:bg-[#3452e1]"
                        @click="updateCompany()">Edit</button>
                    <button v-else
                        class="w-[120px] mt-2 px-8 py-2 rounded-md text-white bg-[#556ee6] hover:bg-[#3452e1]">Saving...</button>
                </div>




                <div class="w-[48%] flex flex-col justify-start items-start p-[8px]">

                    <div class="mb-2  flex flex-col justify-between items-start ">
                        <label class="w-[402px] text-[#a6b0cf] font-semibold mb-2 text-sm">Email</label>
                        <input v-model="companiesData.email" type="email" placeholder="Email"
                            class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="mt-2 mb-4 flex flex-col justify-between items-start h-[60px] ">
                        <label class="w-[402px] text-[#a6b0cf] font-semibold mb-2 text-sm">Operating From</label>
                        <input v-model="companiesData.operatingFrom" type="text" placeholder="Operating From"
                            class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                    <div class="mt-2 mb-4 flex flex-col justify-between items-start h-[60px] ">
                        <label class="w-[402px] text-[#a6b0cf] font-semibold mb-2 text-sm">Password</label>
                        <input v-model="companiesData.password" type="password" placeholder="Operating From"
                            class="w-[400px] rounded-md py-1.5 px-3 outline-none border border-[#32394e] bg-transparent text-[#a6aec2] bg-[#2e3548]">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import apiService from '../services/apiService';
export default {
    data() {
        return {
            loading: false,
            companiesData: {
                name: '',
                email: '',
                phone: '',
                operatingFrom: '',
                address: '',
                password: '',
                companyCode: '',
            }
        }
    },
    created() {
        this.apiService = new apiService();
    },
    mounted() {
        this.loading = true;
        this.getCompany(this.$route.params.id);
    },
    methods: {
        async getCompany() {
            await this.apiService
                .getCompanyData(this.$route.params.id)
                .then((res) => {
                    this.loading = false;

                    this.companiesData = res?.data;
                })
                .catch((error) => {
                    console.error("Don't get companies=====>>>", error);
                });
        },
        async updateCompany() {
            await this.apiService
                .updateCompany(this.companiesData)
            console.log("para====>>>>", this.companiesData)
                .then((res) => {
                    console.log("Response ====> ", res)
                    if (res.statusText == "OK") {
                        this.$notify({ title: "Company Updated Successfully", type: "success" });

                    }
                })
                .catch((error) => {
                    console.error("Don't get companies=====>>>", error);
                });
        },
    }
}
</script>
<style></style>
