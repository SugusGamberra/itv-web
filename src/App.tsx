import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500">
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;