import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import swiper from 'swiper'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Form, Field, Button, List, Icon, Toast, CellGroup, Dialog} from "vant"; // 按需引入,优化加载速度
import { Image as VanImage } from 'vant';
import { Uploader } from 'vant';

Vue.use(Dialog)
Vue.use(CellGroup)
Vue.use(Uploader)
Vue.use(VanImage);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(List);
Vue.use(Icon);
Vue.use(Toast);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$swiper = swiper
axios.interceptors.request.use((config) => {
  store.commit('setLoading', 0)
  return config
})
axios.interceptors.response.use((config) => {
  store.commit('setLoading', 2)
  return config
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
