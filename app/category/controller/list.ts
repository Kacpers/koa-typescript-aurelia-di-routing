export async function list(ctx, next) {
  ctx.body = {'msg': 'hello it is category index endpoint'};
  await next();
}
