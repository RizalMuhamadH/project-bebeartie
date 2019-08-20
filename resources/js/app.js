/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router';
import { Form, HasError, AlertError } from 'vform';
import VueProgressBar from 'vue-progressbar';
import Swal from 'sweetalert2';
import Tinymce from 'vue-tinymce-editor';
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueCurrencyFilter from 'vue-currency-filter';
import store from './store';

require('./bootstrap');


window.Vue = require('vue');

window.Fire = new Vue();

window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.component(VueCarousel.name, VueCarousel);


Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
});

Vue.use(VueCurrencyFilter, {
    symbol: 'Rp',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// const slider = '<!-- SLIDER --><div class="slider-wrap"><div class="tp-banner-container"><div class="tp-banner"><ul><!-- SLIDE  --><li data-transition="fade" data-slotamount="2" data-masterspeed="500" data-thumb="homeslider_thumb1.jpg" data-saveperformance="on" data-title="Intro Slide" > <!-- MAIN IMAGE --> <img src="design/images/dummy.png" alt="slidebg1" data-lazyload="design/images/slides/2.jpg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" /> <!-- LAYERS --> <div class="tp-caption customin fadeout tp-resizeme rs-parallaxlevel-10" data-x="center" data-y="center" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="800" data-start="1000" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="7300" data-endspeed="300" style="z-index: 2; max-width: 630px; max-height: 250px; background:#fff;width:100%;height:100%; white-space: nowrap;" ></div> <!-- LAYER NR. 2 --> <div class="tp-caption lft skewtoleftshort rs-parallaxlevel-9" data-x="center" data-y="250" data-speed="1000" data-start="1400" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="7300" data-endspeed="1000" style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;font-family: Raleway; font-size: 36px; font-weight: bold; text-transform: uppercase;	color: #343434;" > Amazing <span class="ss-color" style="color:#d6644a;">Outlet</span> </div> <div class="tp-caption lft skewtoleftshort rs-parallaxlevel-9" data-x="center" data-y="310" data-speed="1000" data-start="1800" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="7300" data-endspeed="1000" style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;	font-family: Raleway;
//                                  font-size: 18px;
//                                  color: #333;text-align:center;"
//           >
//             Clean & Elegant design with a modern style. This template includes
//             <br />all you need for a fashion & accessories store
//           </div>
//           <div
//             class="tp-caption lft skewtoleftshort rs-parallaxlevel-9"
//             data-x="center"
//             data-y="375"
//             data-speed="1000"
//             data-start="2200"
//             data-easing="Power3.easeInOut"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="1000"
//             style="z-index: 3; max-width: 80px; max-height: 4px; width:100%;height:100%;background:#000000;"
//           ></div>
//           <a
//             href="./categories-grid.html"
//             class="tp-caption lft skewtoleftshort rs-parallaxlevel-9"
//             data-x="center"
//             data-y="395"
//             data-speed="1000"
//             data-start="2600"
//             data-easing="Power3.easeInOut"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="1000"
//             style="z-index: 3; max-height:100%;line-height:43px;color:#fff;font-family: Montserrat;
//                                font-size: 12px;
//                                display:table;
//                                font-weight: bold;
//                                text-transform:uppercase;padding:0 40px;background:#000000;position:relative;z-index:77;"
//           >Shop Now !</a>
//         </li>
//         <li
//           data-transition="fade"
//           data-slotamount="2"
//           data-masterspeed="500"
//           data-thumb="homeslider_thumb1.jpg"
//           data-saveperformance="on"
//           data-title="Intro Slide"
//         >
//           <!-- MAIN IMAGE -->
//           <img
//             src="design/images/dummy.png"
//             alt="slidebg1"
//             data-lazyload="design/images/slides/1.jpg"
//             data-bgposition="center top"
//             data-bgfit="cover"
//             data-bgrepeat="no-repeat"
//           />
//           <!-- LAYERS -->
//           <div
//             class="tp-caption customin fadeout tp-resizeme rs-parallaxlevel-10"
//             data-x="center"
//             data-y="center"
//             data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
//             data-speed="800"
//             data-start="1000"
//             data-easing="Power3.easeInOut"
//             data-splitin="none"
//             data-splitout="none"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="300"
//             style="z-index: 2; max-width: 630px; max-height: 250px; background:#fff;width:100%;height:100%; white-space: nowrap;"
//           ></div>
//           <!-- LAYER NR. 2 -->
//           <div
//             class="tp-caption lft skewtoleftshort rs-parallaxlevel-9"
//             data-x="center"
//             data-y="250"
//             data-speed="1000"
//             data-start="1400"
//             data-easing="Power3.easeInOut"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="1000"
//             style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;font-family: Raleway;
//                                  font-size: 36px;
//                                  font-weight: bold;
//                                  text-transform: uppercase;	color: #343434;"
//           >
//             Women
//             <span class="ss-color" style="color:#d6644a;">Clothing</span>
//           </div>
//           <div
//             class="tp-caption lft skewtoleftshort rs-parallaxlevel-9"
//             data-x="center"
//             data-y="310"
//             data-speed="1000"
//             data-start="1800"
//             data-easing="Power3.easeInOut"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="1000"
//             style="z-index: 3; max-width: auto; max-height: auto; white-space: nowrap;	font-family: Raleway;
//                                  font-size: 18px;
//                                  color: #333;text-align:center;"
//           >
//             Clean & Elegant design with a modern style. This template includes
//             <br />all you need for a fashion & accessories store
//           </div>
//           <div
//             class="tp-caption lft skewtoleftshort rs-parallaxlevel-9"
//             data-x="center"
//             data-y="375"
//             data-speed="1000"
//             data-start="2200"
//             data-easing="Power3.easeInOut"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="1000"
//             style="z-index: 3; max-width: 80px; max-height: 4px; width:100%;height:100%;background:#000000;"
//           ></div>
//           <a
//             href="./categories-grid.html"
//             class="tp-caption lft skewtoleftshort rs-parallaxlevel-9"
//             data-x="center"
//             data-y="395"
//             data-speed="1000"
//             data-start="2600"
//             data-easing="Power3.easeInOut"
//             data-elementdelay="0.1"
//             data-endelementdelay="0.1"
//             data-end="7300"
//             data-endspeed="1000"
//             style="z-index: 3; max-height:100%;line-height:43px;color:#fff;font-family: Montserrat;
//                                font-size: 12px;
//                                display:table;
//                                font-weight: bold;
//                                text-transform:uppercase;padding:0 40px;background:#000000;position:relative;z-index:77;"
//           >Shop Now !</a>
//         </li>
//       </ul>
//       <div class="tp-bannertimer"></div>
//     </div>
//   </div>
// </div>';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Home', require('./components/frontend/Home.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('Tinymce', Tinymce);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


/**
 * Vue Router
 *
 * @link http://router.vuejs.org/en/installation.html
 */
Vue.use(VueRouter);

// define routes for users
const routes = [{
        path: '/',
        name: 'home',
        component: require('./components/organization/Dashboard.vue').default
    },
    {
        path: '/categories',
        name: 'categoryIndex',
        component: require('./components/organization/category/Index.vue').default
    },
    {
        path: '/passport',
        name: 'passportIndex',
        component: require('./components/organization/authorization/Index.vue').default
    },
    {
        path: '/promotes',
        name: 'promoteIndex',
        component: require('./components/organization/promote/Index.vue').default
    },
    {
        path: '/products',
        name: 'productIndex',
        component: require('./components/organization/product/Index.vue').default
    },
    {
        path: '/products/create',
        name: 'productForm',
        component: require('./components/organization/product/Create.vue').default
    },
    {
        path: '/products/:id/edit',
        name: 'productUpdate',
        component: require('./components/organization/product/Update.vue').default
    },
    {
        path: '/members',
        name: 'memberIndex',
        component: require('./components/organization/member/Index.vue').default
    },
    {
        path: '/front',
        name: 'frontIndex',
        component: require('./components/frontend/Front.vue').default
    },
    {
        path: '/shop',
        name: 'shopIndex',
        component: require('./components/frontend/Shop.vue').default
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: require('./components/frontend/Detail.vue').default
    },
    {
        path: '/view',
        name: 'bag',
        component: require('./components/frontend/Bag.vue').default
    },
]

const router = new VueRouter({ routes });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    router,
    el: '#app',
});
