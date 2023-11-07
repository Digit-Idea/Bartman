import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu = false
    loading: boolean = true
    loading2: boolean = true

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            loading: observable,
            loading2: observable,

            setBurgerMenu: action.bound,
            setLoading: action.bound,
            setLoading2: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setLoading(loading: boolean) {
        this.loading = loading
    }

    setLoading2(loading2: boolean) {
        this.loading2 = loading2
    }
}
export const store = new Store()
