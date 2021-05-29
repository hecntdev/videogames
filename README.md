# videogames

Aplicacion examen,
Realizada con:

- ReactJS
- NodeJS
- ✨MongoDB✨

## Instalacion 

Videogames requiere [Node.js](https://nodejs.org/) v10+ para correr.

Ingresar a la plataforma. (Esta harcodeado el login xD)

```sh
user: admin
pass: admin
```

Variables de entorno back.

```sh
export URI_MONGO="mongodb://127.0.0.1:27017"
export DB="VideoGames"
export PORT=3001
```

Variables de entorno front.

```sh
export REACT_APP_URI="http://localhost:3001"
```

Instalacion de dependencias

```sh
cd videogames/app
npm i
```

Correr Back DEV.

```sh
cd videogames/app
npm i
npm run start
```

Correr Front DEV.

```sh
cd videogames/app
npm i
npm run dev
```

Compilar Front DEV.

```sh
cd videogames/app
npm i
npm run build
```

Realizar pruebas Front DEV.

```sh
cd videogames/app
npm i
npm run test
```
