import { configureStore } from '@reduxjs/toolkit'

import Main from './modules/main'

const store = configureStore({
  reducer: {
    main: Main,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
