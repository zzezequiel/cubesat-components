const session = () => {
try{
    const userSession = []
    const res = sessionStorage.getItem("userSession")
    userSession = JSON.parse(res)
    return userSession;

}catch{
    console.log('ERROR at user session')
}
}