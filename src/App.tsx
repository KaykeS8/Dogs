import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { UserStorage } from './context/UserContext';
import { User } from './components/User/User';
import { ProtectedRouter } from "./components/Helpers/ProtectedRouter";
import { Photo } from "./components/Photo/Photo";
import { UserProfile } from './components/User/UserProfile';
import { NotFoundPage } from "./components/Helpers/NotfoudPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="conta/*" element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
