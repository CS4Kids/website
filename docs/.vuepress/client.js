import { defineClientConfig } from '@vuepress/client'
import HomeLayout from './layouts/HomeLayout.vue'
import ContactLayout from './layouts/ContactLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import PasscodeLayout from './layouts/PasscodeLayout.vue'
import PrintableLayout from './layouts/PrintableLayout.vue'
  
export default defineClientConfig({
    layouts: {
      HomeLayout,ContactLayout,AuthLayout,PasscodeLayout,PrintableLayout
    },
    enhance({ router }) {
      let isAuthenticated = false;
      //this is a browser api so wrap the whole thing in non-SSR catch
      if (!__VUEPRESS_SSR__) {
        localStorage.setItem('vuepress-color-scheme', 'dark');
        
      router.beforeEach((to) => {

        const auth = localStorage.getItem("logged-in");
          if (auth == 'false' || auth == null){
            isAuthenticated = false;
          }
          else {
            isAuthenticated = true;
          }
        let gated = (to.fullPath.indexOf('lessons') != -1);
        //if we're in a lessons area and we're not authenticated, go to login page
        if (gated && !isAuthenticated){
          return { path: '/login/' }
          }
        })
      }
    },
  })



