import { Client, logger, Variables } from "camunda-external-task-client-js";
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create client instance
const client = new Client(config);

// susbscribe to the topic 'CreateCustomer' mentioned in the model
client.subscribe("CreateCustomer", async function ({ task, taskService }) {
  const prename = task.variables.get("prename");
  const surname = task.variables.get("surname");
  const creditRating = task.variables.get("creditRating");
  const income = task.variables.get("income");
  const bankLoans = task.variables.get("bankLoans");

  const data = {
    prename,
    surname,
    creditRating,
    income,
    bankLoans,
  };

  console.log("** Creating Customer");

  fetch(`http://localhost:3000/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(async (data) => {
      console.log("Success:", data);

      await taskService.complete(task);
    })
    .catch(async (error) => {
      console.error("An error has occured with the fetch operation:", error);
      await taskService.handleBpmnError(task, "CUSTOMER_NOT_CREATED");
    });
});
