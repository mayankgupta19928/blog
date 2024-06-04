const userName = process.env.MYUSERNAME;
const password = process.env.MYPASSWORD;

 if(!userName || !password){
    throw new Error('MongoDb connecion security')
}

export const connectString = `mongodb+srv://${userName}:${password}@cluster0.payoiho.mongodb.net/BlogPost?retryWrites=true&w=majority&appName=Cluster0`;