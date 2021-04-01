import { observable } from 'mobx'
import { RootStore } from '.'

export class DummyStore {
    @observable foo = 'bar'
    
    constructor(private root: RootStore) {

    }
}