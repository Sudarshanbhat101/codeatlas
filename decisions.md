# Decisions log

## Decision 1: One repo with three parts
What: api (Node.js), ai-service (Python), web (React) live in one repository.
Why: easier to learn and to run everything together while I am the only developer.
Alternatives: separate repos for each part.
Tradeoff: one repo gets bigger over time, but it is simpler to manage right now.


## Decision 3: Express as the web framework
What: The API is built with Express.
Why: It is the most widely used Node framework, simple to learn, and has a huge ecosystem, so what I learn transfers to many jobs.
Alternatives: Fastify (faster, more structured), NestJS (bigger, opinionated), plain Node http.
Tradeoff: Express gives little structure by default, so I have to organize the code myself, which is part of what I want to learn.

## Decision 4: Code lives in api/src, app.js and server.js are separate
What: app.js builds the Express app and defines routes. server.js imports it and starts listening on a port.
Why: Separation of concerns. Automated tests can import the app without opening a real port. server.js will later hold startup and shutdown logic such as connecting to databases.
Alternatives: one single file that does both.
Tradeoff: one extra file, which is a tiny cost.

## Decision 5: Hide the x-powered-by header
What: I disabled the header Express adds by default.
Why: It tells anyone which software I run, which helps them pick known attacks. Not sending it reduces what an attacker learns for free.
Alternatives: leave the default.
Tradeoff: none, but it is only a small layer. Real security comes from updated packages and safe code.