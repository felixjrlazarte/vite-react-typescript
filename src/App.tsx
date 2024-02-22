import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { store } from "./redux/store";
import routes from "./utils/routes";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={routes} />
      </ChakraProvider>
    </Provider>
  )
}

export default App
