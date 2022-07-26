import { ViteSSG } from 'vite-ssg/single-page';

import App from './App.vue';

import '@/assets/styles/scss/app.scss';
import 'virtual:fonts.css';

export const createApp = ViteSSG(App);
