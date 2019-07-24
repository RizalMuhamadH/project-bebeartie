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


Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
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

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('Tinymce', Tinymce);


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
        name: 'productForm',
        component: require('./components/organization/product/Update.vue').default
    },
]

const router = new VueRouter({ routes });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    el: '#app',
});