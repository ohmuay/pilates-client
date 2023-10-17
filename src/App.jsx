import Route from "./router/Route";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Route />
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
