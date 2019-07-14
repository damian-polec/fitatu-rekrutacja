import Vue from 'vue';
import router from './router';
import App from '@components/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import styles from '@scss/reset.scss';

library.add(faUserEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');