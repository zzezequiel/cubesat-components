export async function createUser(user) {

    try {
        const response = await fetch('http://localhost:4000/users',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            
        })

        const successful = await response.json()
        console.log('successfull audition', successful)
    
    } catch(z) {
        console.log('ERROR While creating the new user');
    }
}