<template>
    <div class="w-full">
        <div class="container mx-auto h-[90vh]">
          <div class="h-full flex justify-center items-center px-4 sm:px-6 lg:px-20 xl:px-24">
              <div class="mx-auto w-full md:w-[500px] shadow-lg px-6 py-5 rounded-lg border border-gray-100">
                <div>
                  <h2 class="text-3xl font-bold tracking-tight text-black">Sign in to your account</h2>
                </div>
                <div class="mt-5">                  
                  <div>
                    <form @submit.prevent="login" class="space-y-6">
                      <div>
                        <label for="email" class="block text-base font-medium text-black">Email address</label>
                        <div class="mt-1">
                          <input v-model="login_form.email" id="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm">
                        </div>
                      </div>
          
                      <div class="space-y-1">
                        <label for="password" class="block text-base font-medium text-black">Password</label>
                        <div class="mt-1">
                          <input v-model="login_form.password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm">
                        </div>
                      </div>
          
                      <div class="flex items-center justify-end mt-6">
                        <div class="text-sm">
                          <router-link to="/reset_password" class="font-medium text-black hover:text-primary">Forgot your password?</router-link>
                        </div>
                      </div>
                      <div>
                        <!-- <router-link to="/dashboard"> -->
                          <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none uppercase tracking-wider">
                            Sign in
                          </button>
                        <!-- </router-link> -->
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-black text-center">
                          Don't have an account? 
                          <router-link to="/register" class="font-bold hover:text-primary">
                            Register here
                          </router-link>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="bg-white px-2 text-gray-500">Or</span>
                    </div>
                  </div>

                  <div @click="signInWithGoogle" class="mt-1">
                    <button aria-label="Continue with google" role="button" class="focus:outline-none py-2 px-4 border rounded-lg border-gray-400 flex justify-center items-center w-full mt-4">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google">
                        <p class="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div>
          <footer class="bg-white">
              <div class="mx-auto max-w-[1240px]  py-12 px-6 sm:py-4 lg:px-8">
                  <div class="flex gap-x-2 items-center justify-center">
                      <!-- <img src="../../images/logo-icon.svg" alt="logo" class="w-6"> -->
                      <span class="text-3xl font-bold tracking-wide text-primary">TalentMatch</span>
                  </div>
                <p class="mt-1 text-center text-base leading-5 text-gray-500">&copy; <span class="font-bold">TalentMatch</span>, Inc. All rights reserved.</p>
              </div>
          </footer>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import Header from './layout/DashboardHeader.vue'

export default {  
setup() {
  const store = useStore()
    const login_form = ref({});
    const login = () => {
      store.dispatch('login', login_form.value);
    }
    const signInWithGoogle = () => {
      store.dispatch('signInWithGoogle')
    }
  components: {
    Header
  }
    return {
      login_form,
      login,
      signInWithGoogle,
    }
  },
  
}

</script>
<style>
    
</style>