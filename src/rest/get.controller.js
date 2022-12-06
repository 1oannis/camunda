import { Client, logger, Variables } from "../../node_modules/camunda-external-task-client-js/index.js"
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create client instance
const client = new Client(config);

// susbscribe to the topic 'GetCustomer' mentioned in the model
client.subscribe("GetCustomer", async function({ task, taskService }) {
  const customerId = task.variables.get("id")
  console.log(`** Searching Customer with id:: ${customerId} **`)

  fetch(`http://localhost:3000/customers?id=${customerId}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
  })
  .then(response => response.text())
  .then(async (text)=> {
    console.log(text)
    const processVariables = new Variables()
    processVariables.set("customer", text)

    if(text.includes("prename")) {
      await taskService.complete(task, processVariables);
    }
    throw 'CUSTOMER_DOES_NOT_EXIST';
  }
    ).catch(async (error)=>{
      await taskService.handleBpmnError(task, "CUSTOMER_DOES_NOT_EXIST", "ex", error);
    });
});