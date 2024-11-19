En esta práctica vamos a hacer un pequeño formulario que nos permita introducir datos de un usuario y luego mostrarlos en la pantalla. Para ello,
vamos a utilizar React 

A priori tengo la idea de hacer tres componentes como piden las intrucciones, donde se piden datos del usuario, datos de contacto y datos de pago.
El cuarto componente será el que muestre los datos introducidos por el usuario.

//----Antes de comenzar

Asegúrate de tener instalado Node.js en tu sistema, asimismo, crea un nuevo proyecto de React para esta práctica, no uses el mismo que se trabajó en clase.

Paso a paso

Construye un app de React con las siguientes características:

Crea el proyecto con create-react-app
Desarrolla mínimo 4 componentes
Usa alguno de los métodos de ciclo de vida y el estado, no tiene que ser algo complejo puede ser usado para crear una funcionalidad o mostrar algún texto o 
información simple
Crea un repositorio de GitHub con los archivos del app, recuerda que NO debemos de subir la carpeta de node_modules


//--------Desarrollo
Creamos la app en React con el comando npx create-react-app react-I-practice
la ejecutamos con el comando cd react-I-practice y npm start

En la carpeta src de la app que creamos una nueva carpeta que se llame components, y dentro de ella creamos tres archivos js que se llamen UserForm.js, Contact
Form.js y PaymentForm.js, y vamos a armar todo en el archivo App.js.


Limpio un poco la carpeta src, borrando los archivos que no necesito, como el app.test.js, setupTests.js, reportWebVitals.js

Como aún no vemos el tema de estilos en react, voy a mantener la hoja que viene por defecto, tanto la de app. css como la de index.css, y voy a agregar un poco de
 estilos a los componentes que voy a crear, para que se vean un poco más atractivos.

Empezamos a agregar los componentes a cada archivos dentro de la carpeta de components, empecemos por el UserForm.js


 

