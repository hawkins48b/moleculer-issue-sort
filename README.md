[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# Moleculer db adapter issue
This repository demonstrates the impossibility to make a search text with db adapter to a mongo instance with method 'list'.

Start Docker environment (logs and hot-reload)
- `docker-compose up --build`

Seed database with 100 users 
- http://localhost:3000/api/users/seed

Try to search user with name "Dianne" using 'find' method
- http://localhost:3000/api/users/searchWithFind

Try to search user with name "Dianne" using 'list' method
- http://localhost:3000/api/users/searchWithSeed

Shutdown Docker environment
- `CTRL + C`

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose
