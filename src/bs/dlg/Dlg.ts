import Vue from 'vue'
import {Component, Model, Prop, Watch} from 'vue-property-decorator'
const tpl = require("./dlg.htm")

@Component({template: tpl, components: {}})
export class Dlg extends Vue {
    @Prop title: string
    @Prop rmClose: boolean
}