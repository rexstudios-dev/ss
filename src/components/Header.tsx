import { Link } from 'react-router-dom';
import "../index.css"
export default function Header() {

  return (

    <header className="bg-teal-500 text-white">

      <div className="container mx-auto p-4 flex justify-between items-center">

        <Link to="/">
        
          <div className="text-3xl font-extrabold">
            <img src="https://aprendeprogramando.bue.edu.ar/pluginfile.php/1/theme_moove/logo/1701100688/APV_logo2.png"  className="h-20" />  
          </div>

        </Link>

        <nav className="flex items-center gap-4 text-lg">

          <Link to="/Clases">
            <div className="p-2 rounded hover:bg-teal-400">
              Cursos
            </div>
          </Link>

          <Link to="/instructors">
            <div className="p-2 rounded hover:bg-teal-400">
              Instructores  
            </div>
          </Link>

          <Link to="/about">
            <div className="p-2 rounded hover:bg-teal-400">
              Nosotros
            </div>
          </Link>

        </nav>

      </div>

    </header>

  )

}