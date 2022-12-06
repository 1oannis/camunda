import { Client, logger, Variables } from "../../node_modules/camunda-external-task-client-js/index.js"
// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create client instance
const client = new Client(config);

// susbscribe to the topic 'CreateCustomer' mentioned in the model
client.subscribe("CreateCustomer", async function({ task, taskService }) {
  const prename = task.variables.get("prenameInput")
  const surname = task.variables.get("surenameInput")
  const income = task.variables.get("incomeInput")
  console.log(`** Creating Customer **`)

  fetch(`http://localhost:3000/customers`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
    },
    body: {
      id: 12,
      prename,
      surname,
      creditRating: "C",
      income,
      bankLoans: 0
    }
  })
  .then(response => response.code())
  .then(async (code)=> {
    console.log(code)

    if(code == 201) {
      
      await taskService.complete(task, processVariables);
    }
    throw 'CREATE_FAILED';
  }
    ).catch(async (error)=>{
      await taskService.handleBpmnError(task, "CREATE_FAILED", error);
    });
});