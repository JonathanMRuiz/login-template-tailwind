
import Login from './components/login';
import Register from './components/register'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
}

export default App;
