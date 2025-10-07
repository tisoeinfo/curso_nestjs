# Qué es Node.js
- Node.js es un programa instalado en tu sistema operativo (igual que Git, MySQL o Docker). 
- Lo que hace Node es permitir que JavaScript se ejecute fuera del navegador.
- Es el motor (runtime) que ejecuta JavaScript en tu sistema operativo.
- Node.js corre en tu sistema operativo.

# Qué es TypeScript (TS)
- tsconfig.json es exclusivo de TypeScript, es quien convierte el codigo TS  a JS para que pueda ser leido por Node.js
- TypeScript se usa para escribir código (que luego se convierte en JS).

# NestJS 
- NestJS es un framework de backend escrito con TypeScript.
- NestJS usa TypeScript como lenguaje y Node.js como motor de ejecución.
- Te da estructura y organización
- NestJS es un framework hecho en TypeScript, que usa Node para ejecutar todo.

# En una sola frase -> Tú escribes TypeScript 📝 → se convierte en JavaScript ⚙️ → Node lo ejecuta 🚀 → NestJS organiza todo 🧩.

# @ 
Todo lo que se vea con este signo @ se llama decorados

# any 
significa "puede venir cualquier cosa".

# interface
Se define como un contrato porque cuando se llame se tiene que cumplir los metodos o propiedades que ha sido declarado en esa clase interface

# providers 
Todo lo que declares en providers, está disponible solo dentro de ese módulo.

# exports 
Si quieres que otro módulo pueda usar ese provider, tienes que exportarlo

# constructor(private readonly findUserByUsername: FindUserByUsernameUseCase) { } 
Esto se llama inyectar dependencias, es como se hacia en CI3, gracias a eso puedo llamar a todo lo que tenga la clase.

# Capa          | Responsabilidad                                           | Ejemplos
Domain	        | Reglas de negocio puras, sin dependencias externas	    | Entities, Value Objects
Application	    | Casos de uso (lógica de aplicación, coordinan el dominio)	| UseCases, DTOs
Infrastructure	| Conexión con recursos externos	                        | ORM, DB, APIs, Files, Services externos
Presentation	| Exposición al usuario o cliente (HTTP, CLI, etc.)	        | Controllers, Routes, Pipes, Guards