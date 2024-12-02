import Sidebar from './components/Sidebar';
import { DarkModeProvider } from './context/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />

      <Sidebar />
    </DarkModeProvider>
  );
}
