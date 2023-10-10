<template>
  <div class="h-[100vh] overflow-y-auto flex">
    <DashboardHeader v-if="userLogedIn" @append-showHideBar="showHideSideBar" />
    <sideBar class="pt-8" v-if="userLogedIn && !isSmallScreen" />
    <div class="flex min-h-[90vh] w-full">
      <slot />
    </div>
    <DashboardFooter v-if="userLogedIn" />
    <AllCompanies />
  </div>
</template>

<script>
import DashboardHeader from '@/components/layout/DashboardHeader.vue';
import DashboardFooter from '@/components/layout/DashboardFooter.vue';
import SideBar from '@/components/SideBar.vue';
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";


export default {
  name: 'Layout',
  data() {
    return {
      active: false,
      userId: null,
      isSmallScreen: false,
      hideLoader: true
    }

  },
  computed: {
    userLogedIn() {
      if (this.$store.state.user != null) {
        // console.log(this.$store.state.user)
        this.active = true;
        // console.log(this.active)
      } else {
        this.active = false;
        // console.log(this.active)
      }
      return this.active
    }
  },
  created() { },
  components: {
    DashboardHeader,
    DashboardFooter,
    SideBar,
  },
  mounted() {
    this.getUpdatedUser();
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    async getUpdatedUser() {
      if (this.$store.state.user != null) {
        const db = getFirestore();
        const q = query(collection(db, "user"), where("userUid", "==", this.$store.state.user.uid));
        const querySnapshot = await getDocs(q);
        let userDetails = querySnapshot.docs.map((doc) => {
          return {
            credit: doc.data().credit || '5',
            email: doc.data().email,
            uid: this.$store.state.user.uid,
            displayName: doc.data().displayName || ''
          }
        });
        // console.log("Update Data =====> ", userDetails)
        localStorage.removeItem("auth");
        this.$store.commit('CLEAR_USER');
        this.$store.commit('SET_USER', userDetails[0]);
        localStorage.setItem("auth", JSON.stringify(userDetails[0]));
      }
      else {
        this.$store.dispatch('logout');
      }
    },
    showHideSideBar() {
      this.isSmallScreen = !this.isSmallScreen;
      console.log("Hello =====> ", this.isSmallScreen)
    },
    onResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1024) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    }
  }
}
</script>