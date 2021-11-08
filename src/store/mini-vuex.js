import { inject, reactive } from 'vue';

const STORE_KEY = '__store__';

class Store {
    constructor(options) {
            this._state = reactive({
                data: options.state
            });
            this._mutations = options.mutations;
        }
        // main.js入口处app.use(store)的时候，会执行这个函数
    install(app) {
        app.provide(STORE_KEY, this);
    }
    get state() {
        return this._state.data;
    }
    commit = (type, payload) => {
        const entry = this._mutations[type];
        entry && entry(this.state, payload);
    };
}

export function createStore(options) {
    return new Store(options);
}

export function useStore() {
    return inject(STORE_KEY);
}