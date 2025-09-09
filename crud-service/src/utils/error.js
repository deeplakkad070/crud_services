const error = (message, statusCode = 500) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    err.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    err.isOperational = true;
    return err;
  }
  
export default error;