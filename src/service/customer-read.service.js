export async function findCustomerByName(prename, surname) {
    console.log(`** Searching Customer with id:: ${customerId} **`)
    fetch(`http://localhost:3000/customers?prename=${prename}&surname=${surname}`, {
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
      }else{
        throw 'CUSTOMER_DOES_NOT_EXIST';
      }
    })
    .catch(async (error)=>{
      await taskService.handleBpmnError(task, "CUSTOMER_DOES_NOT_EXIST", error);
    });
  }