import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { CarritoContext } from "./Provider/CartContext";
import Routing from "./Routes/Routes";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CarritoContext>
          <Routing />
        </CarritoContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
