export const errorHandler = (error: any, context: any): void => {
  if (error.name === "PostgresError") {
    console.log('');
    console.log(`Detail     : ${error.fields.detail}`);
    console.log(`Table      : ${error.fields.table}`);
    console.log(`Severity   : ${error.fields.severity}`);
    console.log(`Message    : ${error.message}`);
    context.response.body = "Internal Server Error!";
    context.throw(error);
  } else {
    context.response.body = "Internal Server Error!";
    context.throw(error);
  }
};
