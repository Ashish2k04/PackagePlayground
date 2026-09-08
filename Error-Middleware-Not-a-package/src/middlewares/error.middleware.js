import "dotenv/config";

export function handleError(error, req, res, next){
    const response = {
        message: error.message
    };

    if(process.env.NODE_ENVIRONMENT === "development"){
        response.stack = error.stack;
    };

    return res.status(error.status).json(response);
}