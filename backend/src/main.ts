import { Application, oakCors } from "@deps"
import { router } from "./routes/routes.ts"

// Create your Deno application
const app = new Application();
app.use(oakCors());
app.use(router.routes()); // Use the router
app.use(router.allowedMethods());

// Start the server
console.log("Server is running on localhost:8000");
await app.listen({ port: 8000 });