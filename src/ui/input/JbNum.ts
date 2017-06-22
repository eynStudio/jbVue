import Vue from 'vue'
import {Component, Model, Prop, Watch} from 'vue-property-decorator'
import numeral from 'numeral'

@Component({
    name: 'jb-num',
    template: `<input :value="val" type="text" @blur="onBlur" @input="onInput" @focus="onFocus">`,
})
export class JbNum extends Vue {
    @Prop([Number, String]) value: number | string
    @Prop fmt: string
    @Prop pattern: RegExp

    val: number | string = 0
    isfocus = false

    @Watch('value')
    onValue() {
        if (!this.isfocus)
            this.formatValue()
    }

    formatValue() {
        this.val = this.fmt ? numeral(this.value).format(this.fmt) : this.value
    }

    onInput(e) {
        let pat = this.pattern || /^[0-9]{0,}$/
        if (pat.test(e.target.value)) {
            this.val = e.target.value
            this.$emit('input', Number(e.target.value))
        } else {
            e.target.value = this.val
        }
    }

    onFocus() {
        this.isfocus = true;
        this.val = this.value
    }

    onBlur() {
        this.isfocus = false
        this.formatValue()
    }

    mounted() {
        this.formatValue()
    }
}
