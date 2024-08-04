import { configureStore } from '@reduxjs/toolkit'
import quickLinkSlice from './features/quicklinkSlice'
import languagesSlice from './features/languagesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        quicklink:quickLinkSlice.reducer,
        language:languagesSlice.reducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']