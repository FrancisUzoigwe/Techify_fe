
import { configureStore } from "@reduxjs/toolkit"
import {
    persistReducer,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    FLUSH
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import rootReducer from "./globalState"

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
            }
        })
})