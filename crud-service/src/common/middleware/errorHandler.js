const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const status = err.status || (statusCode >= 500 ? "error" : "fail");
  
    res.status(statusCode).json({
      success: false,
      statusCode: statusCode,
      status: status,
      message: message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    });
  };
  
export default errorHandler;