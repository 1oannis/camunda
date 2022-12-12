import { Client, logger, Variables } from "../../node_modules/camunda-external-task-client-js/index.js"
import { findCustomerByName } from "../service/customer-read.service.js";
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create client instance
const client = new Client(config);

// susbscribe to the topic 'GetCustomer' mentioned in the model
client.subscribe("GetCustomer", async function({ task, taskService }) {
  const customerId = task.variables.get("id")
  findCustomerByName(prename, surname)

  
});