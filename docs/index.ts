import promise from 'es6-promise'
promise.polyfill()
import Vue from 'vue'
import '../index.html'
// import './common/common.scss'
// import {router} from "./Router";
import {Component, Model, Prop, Watch} from 'vue-property-decorator'
// import './common/filters'

@Component({template: `<h1>jbVue</h1>`})
export class Root extends Vue {
}

new Root({
    // router
}).$mount('#root')