import { app } from ".";

app.listen(3333, () =>
  console.log({
    server_status: "Server is running! 🤯️🚀️",
    server_address: "http://localhost:3333/",
    doc_adress: "http://localhost:3333/api-docs/#/Users",
  })
);
