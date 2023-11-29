import { useState } from 'react';

export default function Clases() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <img
        src="https://media.discordapp.net/attachments/1122904108752457858/1179396753049530408/web-developer-monochromatic.png?ex=6579a1d2&is=65672cd2&hm=6c52e3081cdaa9ccbdaf4bc545f6a15e882a51a1c7d3951512054b6ce55ab438&=&format=webp&quality=lossless&width=573&height=468"
        className="mx-auto mt-8"
        alt="Web Developer"
      />

      <div className="mt-8 mb-8 max-w-2xl mx-auto flex justify-around">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className={`rounded-full bg-gray-200 flex items-center justify-center border border-blue-500 text-blue-500 w-12 h-12 cursor-pointer mb-4 ${
              selectedOption === number && 'bg-blue-500 text-white'
            }`}
            onClick={() => setSelectedOption(number)}
          >
            <span className="text-lg font-bold">{number}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 mb-8 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {selectedOption === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">MÓDULO: Recordar el uso de variables y funciones</h2>
            <p>
              En esta primera semana, nos sumergiremos en los conceptos fundamentales de programación para establecer una base sólida.
              Aquí hay una explicación detallada junto con algunos ejercicios prácticos:
            </p>
           
            <h3 className="text-xl font-bold mt-4">1. Variables:</h3>
            <p>Definición: Una variable es un espacio de almacenamiento que puede contener información.</p>
            <p>Ejemplo: <code className="bg-gray-800 text-white p-1 rounded-md">let edad = 25; let nombre = "Juan";</code></p>

            <h3 className="text-xl font-bold mt-4">2. Funciones:</h3>
            <p>Definición: Una función es un bloque de código reutilizable que realiza una tarea específica.</p>
            <p>Ejemplo: <code className="bg-gray-800 text-white p-1 rounded-md">function saludar(nombre) {'{'} console.log(`Hola, {'${nombre}'}!`); {'}'}</code></p>

            <h3 className="text-xl font-bold mt-4">3. Template Literal:</h3>
            <p>Definición: Es una forma de incluir expresiones dentro de cadenas de texto.</p>
            <p>Ejemplo: <code className="bg-gray-800 text-white p-1 rounded-md">let nombre = "Pedro"; let mensaje = {'`'}Bienvenido, {'${nombre}'}!{'`'};</code></p>



            <h3 className="text-xl font-bold mt-4">4. JSON:</h3>
            <p>Definición: JSON es un formato de intercambio de datos fácil de leer y escribir para humanos.</p>
            <p>Ejemplo: <code className="bg-gray-800 text-white p-1 rounded-md">
              {`
                {
                  "nombre": "María", 
                  "edad": 30,
                  "ciudad": "Barcelona"
                }
              `}
            </code></p>

            <h3 className="text-xl font-bold mt-4">5. Consola de Comandos:</h3>
            <p>Definición: Es una herramienta para interactuar con el sistema operativo y ejecutar comandos.</p>
            <p>Comandos: <code className="bg-gray-800 text-white p-1 rounded-md">cd</code> para cambiar el directorio, <code className="bg-gray-800 text-white p-1 rounded-md">ls</code> o <code className="bg-gray-800 text-white p-1 rounded-md">dir</code> para listar archivos en el directorio.</p>

            <h3 className="text-xl font-bold mt-4">Ejercicio:</h3>
            <p>Abre la consola y navega hasta un directorio específico en tu sistema.</p>


          </>
        )}

        {selectedOption === 2 && (
        <>
        <h2 className="text-2xl font-bold mb-4">MÓDULO: Repaso de Arrays</h2>
        <p>
          En esta clase, repasaremos los conceptos fundamentales de Arrays y exploraremos sus métodos e iteraciones.
          Aquí hay algunos ejemplos prácticos:
        </p>

        <h3 className="text-xl font-bold mt-4">1. Crear un Array:</h3>
        <p>Definición: Un Array es una estructura de datos que puede contener múltiples elementos.</p>
        <p>Ejemplo: <code className="bg-gray-800 text-white p-1 rounded-md">let frutas = ['Manzana', 'Banana', 'Uva'];</code></p>

        <h3 className="text-xl font-bold mt-4">2. Métodos de Array:</h3>
        <p>Algunos métodos comunes:</p>
        <ul>
          <li><code className="bg-gray-800 text-white p-1 rounded-md">map</code>: Crea un nuevo array con los resultados de llamar a una función por cada elemento.</li>
          <li><code className="bg-gray-800 text-white p-1 rounded-md">filter</code>: Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.</li>
          <li><code className="bg-gray-800 text-white p-1 rounded-md">reduce</code>: Aplica una función acumuladora a cada valor de un array de izquierda a derecha para reducirlo a un solo valor.</li>
        </ul>

        <h3 className="text-xl font-bold mt-4">3. Iteraciones con Array:</h3>
        <p>Usaremos bucles como <code className="bg-gray-800 text-white p-1 rounded-md">forEach</code> para iterar sobre los elementos del array.</p>
      </>
        )}


  

{selectedOption === 3 && (
  <>
    <h2 className="text-2xl font-bold mb-4">MÓDULO: Trabajo con APIs</h2>
    <p>
      En esta clase, nos sumergiremos en el mundo de las APIs. Veremos qué son las APIs, cómo interactuar con ellas y crearemos nuestra propia API a través de un Endpoint.
    </p>

    <h3 className="text-xl font-bold mt-4">1. ¿Qué son las APIs?</h3>
    <p>Definición: Una Interfaz de Programación de Aplicaciones (API) permite la comunicación entre diferentes aplicaciones o servicios.</p>

    <h3 className="text-xl font-bold mt-4">2. Creación de una API (Simulación):</h3>
    <p>Simularemos la creación de una API y su consumo mediante un Endpoint.</p>
    <pre>
      {`
        // Simulación de Endpoint de API
        const endpoint = 'https://api.example.com/curso/apis';
        
        // Consumir la API
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
      `}
    </pre>

    <h3 className="text-xl font-bold mt-4">3. Creación de una API (Práctica):</h3>
    <p>En este ejercicio práctico, crearás tu propia API simple y la consumirás en tu aplicación.</p>
    <pre>
      {`
        // Código de tu propia API
        const express = require('express');
        const app = express();
        
        app.get('/api/curso', (req, res) => {
          const data = { mensaje: '¡Bienvenido al curso de APIs!' };
          res.json(data);
        });
        
        app.listen(3001, () => {
          console.log('API escuchando en el puerto 3001');
        });
      `}
    </pre>

    <h3 className="text-xl font-bold mt-4">4. Consumo de la API:</h3>
    <p>Ahora, consumiremos la API que acabas de crear en tu aplicación React.</p>
    <pre>
      {`
        // Consumir la API en React
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:3001/api/curso');
              const data = await response.json();
              setApiData(data);
            } catch (error) {
              console.error('Error fetching API data:', error);
            }
          };
          fetchData();
        }, []);
      `}
    </pre>

    <h3 className="text-xl font-bold mt-4">5. Visualización de Datos:</h3>
    {'${apiData}'}? (
      <pre className="bg-gray-200 p-4 rounded-md overflow-auto">
        {JSON.stringify('${apiData}', null, 2)}
      </pre>
    ) : (
      <p className="italic">Cargando datos de la API...</p>
    )
  </>
)}


{selectedOption === 4 && (
  <>
    <h2 className="text-2xl font-bold mb-4">MÓDULO: Comenzamos con React JS</h2>
    <p>
      En este módulo, nos introduciremos a React JS y exploraremos su sintaxis y su modo de trabajo.
    </p>

    <h3 className="text-xl font-bold mt-4">1. Introducción a React:</h3>
    <p>Definición: React es una biblioteca de JavaScript para construir interfaces de usuario.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">import React from 'react';</code></p>

    <h3 className="text-xl font-bold mt-4">2. Componentes en React:</h3>
    <p>En React, las interfaces de usuario se dividen en componentes reutilizables.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">class MiComponente extends React.Component {'{ /* Contenido del componente */ }'}</code></p>

    <h3 className="text-xl font-bold mt-4">3. Estado y Propiedades:</h3>
    <p>React utiliza estados y propiedades para gestionar los datos y la comunicación entre componentes.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">this.state = {'{ /* estado del componente */ }'};</code></p>

    <h3 className="text-xl font-bold mt-4">4. Ciclo de Vida de los Componentes:</h3>
    <p>Los componentes de React pasan por un ciclo de vida desde su creación hasta su destrucción.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">componentDidMount() {'{ /* lógica después de la creación */ }'}</code></p>

    <h3 className="text-xl font-bold mt-4">5. JSX en React:</h3>
    <p>JSX es una extensión de JavaScript utilizada en React para escribir componentes de manera más concisa.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">return {'<div>'}Hola Mundo{'</div>'};</code></p>
  </>
)}

       

{selectedOption === 5 && (
  <>
    <h2 className="text-2xl font-bold mb-4">MÓDULO: Seguimos trabajando con React JS</h2>
    <p>
      En esta sección, profundizaremos en el desarrollo con React JS, centrándonos en componentes, props y eventos.
    </p>

    <h3 className="text-xl font-bold mt-4">1. Componentes y Props:</h3>
    <p>En React, los componentes pueden aceptar datos llamados props para personalizar su comportamiento.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">&lt;MiComponente prop1="valor1" prop2="valor2" /&gt;</code></p>

    <h3 className="text-xl font-bold mt-4">2. Eventos en React:</h3>
    <p>Manejaremos eventos en React para interactuar con los componentes y actualizar el estado.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">onClick={() => handleOnClick()}</code></p>

    <h3 className="text-xl font-bold mt-4">3. Diferencia con JavaScript:</h3>
    <p>Destacaremos las diferencias clave entre el manejo de eventos en React y JavaScript tradicional.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">{'<button onClick={handleClick}>'}Haz clic{'</button>'}</code></p>

    <h3 className="text-xl font-bold mt-4">4. Avanzando con Ejemplos:</h3>
    <p>Aplicaremos los conceptos aprendidos en ejemplos prácticos y avanzados.</p>
    <p>Ejemplo: <code className="bg-gray-200 text-gray-800 p-1 rounded-md">{`function MiComponente({ prop1, prop2 }) {
  return (
    <div>
      <p>{prop1}</p>
      <p>{prop2}</p>
    </div>
  );
}`}</code></p>
  </>
)}



      </div>
    </div>
  );
}
