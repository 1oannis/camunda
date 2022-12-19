import { Client, logger, Variables } from "camunda-external-task-client-js";
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create client instance
const client = new Client(config);

// susbscribe to the topic 'GetCustomer' mentioned in the model
client.subscribe("GetCustomer", async function ({ task, taskService }) {
  const prename = task.variables.get("prename");
  const surname = task.variables.get("surname");

  console.log("** Searching Customer: ", prename, surname);

  fetch(
    `http://localhost:3000/customers?prename=${prename}&surname=${surname}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        console.error("Network response was not OK", response.code())
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(async (data) => {
      if (data[0] == undefined) {
        throw new Error("Customer not found");
      }
      let customer = data[0];
      const { id, creditRating, income, bankLoans } = customer;
      console.log("Found matching Customer: ", customer);
      const processVariables = new Variables();
      processVariables.set("id", id);
      processVariables.set("creditRating", creditRating)
      processVariables.set("income", income)
      processVariables.set("bankLoans", bankLoans)

      await taskService.complete(task, processVariables);
    })
    .catch(async (error) => {
      console.error("An error has occured with the fetch operation:", error);
      await taskService.handleBpmnError(task, "CUSTOMER_NOT_FOUND");
    });
});
