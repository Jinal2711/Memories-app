import jwt from 'jsonwebtoken';

// Wants to like a post
//Click th like button => auth middleware(next) => like Controller =>  this is want actual middle ware does in Authentucatino 

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test')
            req.userId = decodedData.id;
        } else {
            decodedData = jwt.decode(token)
            req.userId = decodedData.sub; // google name for signId, differentiate every single google User
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

export default auth;