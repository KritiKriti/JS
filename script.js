function Text()
{
    const fet =async =>
        {
      const response=  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      console.log("Response",response);
      return response;
    }
    
    const button=document.getElementById("click");
    button.innerHTML =  fet();
   
    const data = fet();
    console.log(data);
    document.getElementById(data);
}