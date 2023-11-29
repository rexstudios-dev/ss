import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>

      <p className="text-gray-700">
        Somos un equipo apasionado por la educación y tecnología. Nos especializamos en el desarrollo web 3 y hemos
        aprendido las habilidades del desarrollo frontend en este curso.
      </p>

      <div className="flex justify-center gap-16 mt-8">
        <div>
          <img src="ayrton.png" className="w-32 h-32 rounded-full shadow-lg mb-2" alt="Ayrton Rodriguez" />
          <p>
            Desarrollado por <b>Ayrton Rodriguez</b>
          </p>
        </div>

        <div>
          <img src="https://cdn.discordapp.com/attachments/1122904108752457858/1179410208007671858/Imagen_de_WhatsApp_2023-11-29_a_las_10.12.11_16170786.jpg?ex=6579ae59&is=65673959&hm=cad0f001a7ac678b287a4371d1cd3e8ad8baa878cceb2dbd47026ae53c4e7c70&" className="w-32 h-32 rounded-full shadow-lg mb-2" alt="Martina Macayo" />
          <p>
            Desarrollado por <b>Martina Macayo</b>
          </p>
        </div>

        <div>
          <img src="https://cdn.discordapp.com/attachments/1122904108752457858/1179411398762188800/Imagen_de_WhatsApp_2023-11-29_a_las_10.19.09_b25fda27.jpg?ex=6579af75&is=65673a75&hm=2b6c818b84049918c6a3ae6cb7960e89dffccda123f9a802d6df69da5d55e1eb&" className="w-32 h-32 rounded-full shadow-lg mb-2" alt="Kevin Villanueva" />
          <p>
            Desarrollado por <b>Kevin Villanueva</b>
          </p>
        </div>
      </div>

      <p className="mt-4">
        Proyecto de{' '}
        <Link to="https://aprendeprogramando.bue.edu.ar" className="text-blue-500 hover:underline">
          Aprende Programando Ciudad de Buenos Aires
        </Link>
      </p>
    </div>
  );
}
