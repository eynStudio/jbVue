import Vue from 'vue';
export declare class JbNum extends Vue {
    value: number | string;
    fmt: string;
    pattern: RegExp;
    val: number | string;
    isfocus: boolean;
    onValue(): void;
    formatValue(): void;
    onInput(e: any): void;
    onFocus(): void;
    onBlur(): void;
    mounted(): void;
}
