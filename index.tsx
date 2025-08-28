import { createRoot } from 'react-dom/client';
import App from './src/app';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Элемент с id 'root' не найден в DOM");
  }
  const root = createRoot(rootElement);

  root.render(<App />);
} catch (error) {
  alert(error);
}
