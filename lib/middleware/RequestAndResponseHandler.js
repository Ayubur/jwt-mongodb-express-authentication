const ensureDBConnection = require("../../config/DB");
module.exports = (handler) => {
  return async (req, res) => {
    try {
      await ensureDBConnection();

      const route = req.originalUrl;

      console.log(`++ ${req.method} ${route}`);
      console.log(req.body);

      if (route.startsWith("/api/a")) {
        return;
      }

      const result = await handler(req, res);
      const statusCode = res.statusCode || 200;
      res.status(statusCode).json({
        type: "RESULT",
        message: res.message || "OK",
        result: result,
        error: null,
        code: statusCode,
      });

    } catch (error) {
      const statusCode = res.statusCode || 500;
      res.status(statusCode).json({
        type: "ERROR",
        message: error.message,
        result: null,
        error: process.env.ENV_TYPE === "production" ? null : error.stack,
        code: statusCode
      })
    }
  }
}