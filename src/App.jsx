import { TransactionProvider } from "./context/TransactionContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <TransactionProvider>
      <Dashboard />
    </TransactionProvider>
  );
}

export default App;