import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './home';
import About from './About';
import Contact from './Contact';
import Chat from './ChatAI';
import Header from './components/header';  
import Footer from './components/footer'; 
import CV from './components/CV';
import CVEditor from './components/CVEditor';
import JobBoard from './components/JobBoard';
import Cources from './components/Cources';
import Signup from './components/Signup';
import Login from './components/login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faDownload);

function App() {
  return (
    <div className='app flex flex-col min-h-screen'>
      <Header />

      <main className="flex-grow">
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/ChatAI" element={<Chat />} />
          <Route path="/resources" element={<CV />} />
          <Route path="/cv-editor" element={<CVEditor />} />
          <Route path="/careers" element={<JobBoard />} />
          <Route path="/courses" element={<Cources />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={< Login />} />
        </Routes>
        </Layout>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
