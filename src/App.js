import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NotFound from "./pages/notFound/NotFound";

import { useAuthContext } from "./hooks/useAuthContext";

import { Route, Routes } from "react-router-dom";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="login" element={!user ? <Login /> : <Home />} />
            <Route path="signup" element={!user ? <Signup /> : <Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
