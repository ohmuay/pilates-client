import Route from "./router/Route";
import { useAuth } from "./hooks/use-auth";
import Loading from "./utils/Loading";

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return (
    <>
      <Route />
    </>
  );
}

export default App;
