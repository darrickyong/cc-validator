import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import ValidatorForm from "./features/ValidatorForm/components";

function App() {
  const qc = new QueryClient();

  return (
    <QueryClientProvider client={qc}>
      <ValidatorForm />
    </QueryClientProvider>
  );
}

export default App;
