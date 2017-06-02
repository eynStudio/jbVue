import * as Vue from 'vue'
import '../index.html'
import {Component, Model, Prop, Watch} from 'vue-property-decorator'

@Component({template: `<h1>jbVue</h1>`})
export class Root extends Vue {
}

new Root({
}).$mount('#root')