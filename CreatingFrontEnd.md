#CREANDO LA APP DEL FRONT END CON REACT Y VITE
- Primero ejecutamos el comando <npm init vite@latest> y luego de darle nombre al proyecto que en este caso es frontend elegimos la librería o framework, en este caso utilizamos react con javascript aunque bien se puede utilizar typescript. Seguido de eso, nos dirigimos a la carpeta de frontend y ejecutamos el comando <npm install> para instalar las dependencias.
- Nos dirigimos a la terminal hacia la carpeta de frontend y ejecutamos <npm run dev> para arrancar el servidor de desarrollo.

- En la carpeta src encontramos dos archivos principales "mani.js" y "App.js" 
    -- main.js es el archivo principal de react donde se renderiza el App.js
    http://127.0.0.1:5173/ -->  Es donde se ejecutará el servidor local

## INSTALAR TAILWIND CSS PARA EL DISEÑO FRONTEND
- Nos dirigimos a la carpeta de frontend en la terminal para ejecutar el comando <npm i --save-dev tailwindcss postcss autoprefixer>, éstas son unicamente dependencias de desarrollo (postcss y autoprefixer son dependencias que necesita tailwind).
- Luego ejecutamos <npx tailwindcss init -p> (npx es igual que npm pero te perminte ejecutar algunos paquetes sin instalar nada), nos crea dos archivos: postcss.config y tailwind.config.
-- Trabajaremos en tailwind.config para hacer algunas configuraciones:
    en content:[], dentro de los corchetes agregamos el "index.htm" que es donde se va a reenderizar el contenido y seguido de una coma "./src/**/*.jsx" para que taiwind tome en cuenta que escribiremos varios componentes dentro del src con la extensión jsx.
- En el archivo index.css están los estilos que se aplicarán a todos los componentes y en esa hoja de estilos agregaremos <@tailwind base; @tailwind components; @tailwind utilities;>
- Instalamos la extensión de tailwind intelisense para el autocompletado de tailwind.
- Detenemos la ejecución del servidor y la volvemos a levantar para mostrar los cambios que se hicieron el los archivos de configuración

### INSTALAMOS REACT DOOM 6
- instalamos una librería para el routing en frontend <npm i react-router-dom> y el el App.jsx importamos <import { BrowserRouter, Routes, Route } from 'react-router-dom'> y procedemos a crear las rutas.

<Route path='/' element={<AuthLayout />}> //Define la pagina de inicio y element la página principal, se crea la carpeta layout con el archivo AuthLayout.jsx
- Creamos otra carpeta paginas con un archivo Login.jsx
- Se agregan mas rutas y mas archivos en la carpeta de paginas

- Creamos los estilos del login
- Creando el formulario para el login
- Para manejar el routing se importa import { Link } from 'react-router-dom'; Esta opción nos permite ir al enlace sin necesidad de recargar

- Se utilizara axios para consumir la api, librería que también se necesitará en producción por lo que se instala de la manera <npm i axios>

- En el backend instalamos <npm i cors> para solucionar el error de cors
y en el index del backend importamos 