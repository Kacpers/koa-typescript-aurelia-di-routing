export async function list(ctx, next) {
  ctx.body = {'msg': 'hello it is product index endpoint'};
  await next();
}
