import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from "@/router/index";
import store from "@/store";
import Notifications from '@kyvg/vue3-notification';
import firebase from '@/firebase/index.js';
import VueScrollTo from 'vue-scrollto'
import vClickOutside from "click-outside-vue3"
import FileSelector from 'vue-file-selector';
import SimpleTypeahead from 'vue3-simple-typeahead';
import * as VueConfirmDialog  from 'vuejs-confirm-dialog';



const app = createApp(App)
app.use(router);
app.use(store);
app.use(firebase);
app.use(Notifications);
app.use(VueConfirmDialog );
app.use(VueScrollTo);
app.use(FileSelector);
app.use(vClickOutside);
app.use(SimpleTypeahead);
app.mount('#app');




