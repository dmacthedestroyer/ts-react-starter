import { createContext, useContext } from 'react'
import { observable } from 'mobx'
import { DummyStore } from './dummy-store'

export class RootStore {
    @observable dummyStore: DummyStore
    
    constructor() {
        this.dummyStore = new DummyStore(this)
    }
}

export const RootStoreContext = createContext<RootStore>({} as RootStore)
export const RootStoreProvider = RootStoreContext.Provider
export const useRootStore = (): RootStore => useContext(RootStoreContext)