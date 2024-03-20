import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {AuthContext} from "./context";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(true)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
      setUserName(localStorage.getItem('userName'))
      setAccessToken(localStorage.getItem("access_token"))
    }

    setLoading(false);
  }, [])

  return (
    !isLoading
      &&
      <AuthContext.Provider value={{
        isAuth,
        userName,
        setUserName,
        accessToken,
        setAccessToken
      }}>
        <BrowserRouter>
          <div className="site-wrapper">
            <Header />
            <main>
              <AppRouter />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App