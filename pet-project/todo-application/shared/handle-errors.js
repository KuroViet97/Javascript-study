const handleInternalError = (err, msg, res) => {
      console.log(err);
      res.status(500).json({
            message: msg
      });
};

module.exports = handleInternalError;