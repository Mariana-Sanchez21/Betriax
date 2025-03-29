import "./App.css";
import Header from "./components/molecules/Header";
import Home from "./components/organisms/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Home />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
