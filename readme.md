# node-mvc-template
Plantilla para crear aplicaciones web con Node, siguiendo el patrón de arquitectura de software MVC (modelo-vista-controlador).

Los **modulos** mas importantes utilizados son:
* [Express](https://github.com/expressjs/express), para el servidor HTTP y la gestión de las peticiones.
* [dotenv](https://github.com/motdotla/dotenv), para usar archivos de entorno `.env`.
* [nodemon](https://github.com/remy/nodemon/), en desarollo, para reiniciar el sevidor cada vez que hay un cambio en el mismo.

**Funcionalidades**:
- [x] Archivos de entorno `.env`.
- [ ] Motor de plantillas con [EJS](https://ejs.co/)
- [ ] Webpack 4 (Vue + SCSS).
- [ ] Modelos con [Sequelizejs](http://docs.sequelizejs.com/).
- [ ] Socket (opcional por configuracion) con [WS](https://github.com/websockets/ws).
  - Cliente con [Sockette](https://github.com/lukeed/sockette).
- [ ] Socket (opcional por configuracion) con [Socket.io](https://socket.io/).

## Documentación

### Empezar

1. Clonar repositorio y eliminar la carpeta `.git` dentro del mismo.
2. `npm install`
4. Cambiar el archivo `.env-template` a `.env`.
5. Ejecutar `npm run dev-server` para ejecutar un servidor que se reiniciara con los cambios.
6. Ejecutar `npm run dev` para ejecutar `webpack` en modo _watcher_.

### Como crear una pagina:
1. Añadir un ajuste a `./server/routes.yml`:
  ```
  # Ejemplo de ajuste
  - url: /user # URL amigable
    method: get # HTTP Method
    controller: /user/panel.js # Controller que ejecuta logica/renderiza contenido.
  ```

