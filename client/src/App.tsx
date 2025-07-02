import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Questions from './pages/Questions';
import Home from './pages/Home';
import { useEffect } from 'react';
import CreateQuestionPage from './pages/CreateQuestionPage';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.9) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <Router>

      <div className="app">
        <header className="app__header">
          <nav className='header__list'>
            <li className='header__list-item'>
              <Link to={"/questions"} className="header__list_link">
                Список вопросов
              </Link>
            </li>
            <li className='header__list-item'>
              <Link to={"/"} className="header__list_link">
                Вопросы
              </Link>
            </li>
            <li className='header__list-item'>
              <Link to={"/createQuestion"} className="header__list_link">
                Создать вопрос
              </Link>
            </li>
          </nav>
        </header>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/createQuestion" element={<CreateQuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
