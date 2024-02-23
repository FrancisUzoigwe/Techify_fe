import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/mainRouter"
import { Provider } from "react-redux"
import { store } from "./global/store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistStore } from "redux-persist"
import axios from "axios"
import { useEffect } from "react"

const App = () => {
  const persistor = persistStore(store)
  useEffect(() => {
    axios
      .get("https://techify-be.onrender.com")
      .then((res) => {
        console.log("Backend now spinning", res?.data?.message);
      })
      .catch((error: any) => {
        console.log(typeof error);
      });
  });

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