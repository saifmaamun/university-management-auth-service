"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid ID',
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};
*/
const handleCastError = (error) => {
    const errors = [
        {
            path: error.path,
            message: 'Invalid Id',
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Cast Error',
        errorMessages: errors,
    };
};
exports.default = handleCastError;
