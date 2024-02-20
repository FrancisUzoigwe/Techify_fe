import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/mainRouter"
import { Provider } from "react-redux"
import { store } from "./global/store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistStore } from "redux-persist"

const App = () => {
  const persistor = persistStore(store)
  return (
    <div>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <RouterProvider router={mainRouter} />
        </Provider>
      </PersistGate>
    </div>
  )
}

export default App