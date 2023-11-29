
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Header from './components/Header'
import coursesData from './data/courses.json';
import "./index.css"
import Clases from "./components/Clases"
import { JoinInstructors } from './components/joinInstructors';
import About from './components/About';

function App() {
 
  return (
    <BrowserRouter>
    
      <Header />          
      <Routes>

        <Route path="/" element={
          <Home courses={coursesData} />
        } />

        <Route path="/about" element={
          <About />
        } />

        <Route path='/Clases' element={

         <Clases />

        } />
      

      <Route path='/instructors' element={
       
      <JoinInstructors />

      } />
      </Routes>
    


    </BrowserRouter>
  )

}

function Home({ courses }) {
  return (
    <main className="container mx-auto mt-8">
      <p className="text-xl font-semibold mb-4">Bienvenido a Aprende Programando...</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded shadow border-2 border-teal-500 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>

            <img src={course.image} className="mb-4 rounded-md" alt={course.title} />

            <p>{course.description}</p>

            {course.topics && (
              <div>
                <h3 className="font-bold mt-2 mb-1">Temas del Curso:</h3>
                <ul>
                  {course.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}

            <Link to={course.link} className="text-teal-500 hover:underline block mt-4">
              Mas Informacion....
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}










export default App;