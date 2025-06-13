import { Toaster } from "react-hot-toast";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Toaster position="top-right"/>
      <Home />
    </div>
  );
}

export default App;
