const url = "http://localhost:4000";

export const subsystems = async () => {
    
        try {
            const response = await fetch(`${url}/subsystems`);
            const data = await response.json();
            return data;
           
        }
        catch(error) {
            //declare state for errors
            <h1>error</h1>
        }
      }
      export const subsystemsByID = async () => {
    
        try {
            const response = await fetch(`${url}/subsystems`);
            const data = await response.json();
            return data;
           
        }
        catch(error) {
            //declare state for errors
            <h1>error</h1>
        }
      }

      export const satsBuses = async () => {
    
        try {
            const response = await fetch(`${url}/dataSatbuses`);
            const data = await response.json();
            return data;
           
        }
        catch(errr) {
            //declare state for errors
            <h1>catch</h1>
        }
      }
      export const satsByID = async (satId) => {
    
        try {
            const response = await fetch(`${url}/subsystems/${satId}`);
            const data = await response.json();
            return data;
           
        }
        catch(error) {
            //declare state for errors
            <h1>error</h1>
        }
      }

      export const usersFetch = async () => {
    
        try {
            const response = await fetch(`${url}/users`);
            const data = await response.json();
            return data;
           
        }
        catch(error) {
            //declare state for errors
            <h1>catch error api</h1>
        }
      }
