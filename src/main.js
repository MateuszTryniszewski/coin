import Vue from 'vue';
import firebase from 'firebase';
import * as allIcons from 'ionicons/icons';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'normalize.css';

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      allIcons,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
