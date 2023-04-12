import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { NavContextProvider } from "./context/navContext";
import store from "./store/store";
import { GlobalStyle } from "./styles/globalStyles";
import { Theme } from "./styles/Theme";
import App from "./App";
import { ModalCreateContextProvider } from "./context/modalCreateContext";

const queryClient = new QueryClient();
const AppWrapper = () => {
  return (
    <Router>
      <Provider store={store}>
        <Theme>
          <ModalCreateContextProvider>
            <NavContextProvider>
              <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <App />
              </QueryClientProvider>
            </NavContextProvider>
          </ModalCreateContextProvider>
        </Theme>
      </Provider>
    </Router>
  );
};

export default AppWrapper;
