import Vue from 'vue'
import {Component, Model, Prop, Watch} from 'vue-property-decorator'

import ui from './ui'
export {ui}

@Component({template: `<h1>jbVue</h1>`})
export class Root extends Vue {
}
