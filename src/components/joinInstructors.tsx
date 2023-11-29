// Importa tu archivo JSON
import instructorsData from './data/instructors.json'; // Reemplaza con la ruta correcta a tu archivo JSON
import "../App.css"
export function JoinInstructors() {
  return (
    <main>
      <div className="bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">Conviértete en instructor</h1>
        <img
          src="https://cdn.discordapp.com/attachments/1122904108752457858/1179408323125190737/team-meeting-flatline.png?ex=6579ac98&is=65673798&hm=2b57e8ff1f2865c26273cfa5f9f8daa87726ec0b233658573546ca3bb79d3012&"
          className="w-1/2 mx-auto"
          alt="Conviértete en instructor"
        />
      </div>

      <div className="max-w-3xl mx-auto my-8 text-center">
        <p className="text-lg">
          Únete a nuestro equipo de instructores y ayuda a otros a aprender
        </p>

        <div className="space-x-2 my-4">
          {instructorsData.map((instructor, index) => (
            <a
              key={index}
              href={instructor.link}
              className="btn-primary"
            >
              {instructor.buttonText}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-4">
        <h2 className="font-bold mb-4 text-lg">Requisitos</h2>
        <ul className="list-disc ml-5 text-gray-600">
          <li>Experiencia mínima de 2 años programando</li>
          <li>Habilidades para explicar conceptos técnicos simplemente</li>
          <li>Disponibilidad para dictar cursos online o presenciales</li>
        </ul>
      </div>
    </main>
  );
}
