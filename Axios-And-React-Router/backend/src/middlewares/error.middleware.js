import 'dotenv/config';

async function handleError(error, req, res, next) {
    let response = {
        message: error.message
    };

    if(process.env.NODE_ENVIRONMENT === "development"){
        response.stack = error.stack
    }

    res.status(error.status || 500).json(response);
}

export default handleError;