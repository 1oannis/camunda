import { Client, logger, Variables } from "camunda-external-task-client-js";
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create client instance
const client = new Client(config);

// susbscribe to the topic 'GetCustomer' mentioned in the model
client.subscribe("SendResult", async function ({ task, taskService }) {
  const prename = task.variables.get("prename");
  const surname = task.variables.get("surname");
  const approved = task.variables.get("approved");

  if (approved==false) {
    console.log()
    await taskService.complete(task);
  }

  
  const interestRate = task.variables.get("interestRate");
  const loanVolume = task.variables.get("loanVolume");  


  console.log("** Sending Result: ", approved);

});
