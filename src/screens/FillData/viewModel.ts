

export interface IViewModel {
    onDataChanges: callBackFunction
    updateGroceryName(name: string)
    updateWalletValue(value: string)
}

type callBackFunction = () => void;

export class ViewModel implements IViewModel {

    groceryName: string
    walletValue: string


    constructor() {
        this.groceryName = ""
        this.walletValue = ""
    }

    onDataChanges: callBackFunction;

    registerDatas(form) {

    }

    updateGroceryName(name: string) {
        this.groceryName = name
        // this.onDataChanges()
    }

    updateWalletValue(value: string) {
        this.walletValue = value
        // this.onDataChanges(this.data)
    }
}