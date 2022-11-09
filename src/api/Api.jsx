
const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
           
        }
        catch(error) {
            //declare state for errors
            <h1>error</h1>
        }
      }
export default fetchData