const url = "http://localhost:4000/users";

const fetchUserSession = async (dataSession) => {

    try {

        const response = await fetch(url);

        const data = await response.json();

        const session = data.find((user) => { return user.email = dataSession})

        return session;


    }
    catch(error) {
        //declare state for errors
        console.log('ERROR at user session')
    }
  }
export default fetchUserSession