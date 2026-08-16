function generateEmail(){
    return `users${Date.now()}@gmail.com`;

}

module.exports={
    generateEmail
};