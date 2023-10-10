<template>
  <div class="">
    <header class="fixed top-0 right-0 lg:w-10/12  ml-auto bg-white " id="dashheader">
      <nav class="bg-[#262b3c] border-gray-200 px-4 lg:px-6 py-2.5">
        <div class="flex lg:justify-between justify-between items-center mx-auto ">
          <div class="w-1/2 lex items-center ">
            <!-- Hamburger  -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-[20px] h-[20px] cursor-pointer">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(166,176,207,1)"></path>
            </svg>
            <!-- Hamburger ends here  -->
            <!-- <span class="text-primary self-center text-xl font-semibold whitespace-nowrap ">TalentMatch</span> -->
          </div>
          <div class="w-[25%] mr-5 flex justify-evenly items-center">
            <button
              class="bg-[#c3cbe4] hover:bg-[#a9b4d8] px-5 py-6 rounded-md text-[#42485c] font-thin text-sm">Impersonate</button>
            <div class="mx-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mr-4 cursor-pointer">
                <path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"
                  fill="#a6b0cf"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 cursor-pointer">
                <path
                  d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
                  fill="#a6b0cf"></path>
              </svg>
            </div>
            <button class="flex gap-1 items-center text-sm text-[#a6b0cf]">
              <div class="w-7 h-7 rounded-full bg-white flex-shrink-0"></div>
              Admin
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24">
                <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"
                  fill="#a6b0cf"></path>
              </svg>
            </button>
          </div>
          <!-- <button
            class="flex max-lg:-order-1 p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            @click="toggleSideMenu" aria-label="Menu">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button> -->
          <!-- <div class="flex items-center lg:order-2">
            <li class="md:inline-block hidden ">
              <div class="flex items-center">
                <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 10h7l-9 13v-9H4l9-13z" :fill="this.$store?.state?.user?.credit != '0' ? '#FBBF24' : '#FF0000'"/></svg>
              <strong
                class="text-bold text-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm mr-2 focus:outline-none">Free
                Trial</strong>
              <span
                class="text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mr-2 focus:outline-none">{{ this.$store?.state?.user?.credit }}
                Credits left</span>
              </div>
            </li>
            <li class="inline-block">
              <div class="relative">
                <div class=" border-gray-200 py-1">
                  <div class="flex items-center pl-4">
                    <div @click="showDropdown = !showDropdown"
                      class="select-none h-10 w-10 block font-medium bg-primary text-white rounded-full cursor-pointer flex justify-center items-center">
                      <span v-if="user?.displayName != ''" class="uppercase">{{user?.displayName?.split(' ')[0][0]}}{{user?.displayName?.split(' ')[1][0]}}</span>
                      <span v-else class="uppercase">{{ user?.email?.split(' ')[0][0] }}</span>
                    </div>
                  </div>
                  <div :class="showDropdown ? 'active' : ''"
                    class="profileBx mt-3 space-y-1 absolute right-0 z-50 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                      <ul>
                        <li @click="confirm_logut = true; showDropdown = false"
                          class="cursor-pointer block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                          <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"
                                fill="#2073d9" />
                            </svg>
                            Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div> -->
        </div>
      </nav>
    </header>

    <div v-if="confirm_logut" class="confirmation-modal relative z-[999]" aria-labelledby="modal-title" role="dialog"
      aria-modal="true">
      <div class="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <!-- Heroicon name: outline/check -->
                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Confirm Logout</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Are you sure you want to logout?</p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button @click="logout(), confirm_logut = false" type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm">Logout</button>
              <button @click="confirm_logut = false" type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    const logout = () => {
      store.dispatch('logout');
    }
    return {
      logout,
    }
  },
  props: {},
  mounted() {
    this.user = this.getUserData;
  },
  computed: {
    getUserData() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      user: '',
      showMenu: false,
      showDropdown: false,
      confirm_logut: false,
    }
  },
  methods: {
    toggleSideMenu() {
      this.$emit('append-showHideBar');
    },
  },

}

</script>
<style>
#dashheader {
  box-shadow: 0px 0px 0px 1px rgb(17 24 39 / 5%), 0px 1px 4px rgb(17 24 39 / 10%), 0px 8px 16px rgb(17 24 39 / 5%);
}
</style>