import store from "../store/store"

export interface Countries {
    name:        string
    region:      string
    area?:       number
    independent: boolean
}

export type RootState = ReturnType<typeof store.getState>
