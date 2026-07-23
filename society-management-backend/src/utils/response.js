
export function successResponse(
  res,
  data = null,
  message = "Success",
  statusCode = 200
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

// export function errorResponse(res, message, status = 500) {
//   return res.status(status).json({
//     success: false,
//     message,
//   });
// }