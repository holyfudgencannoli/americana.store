export async function onRequest(context) {
  // Create a prepared statement with our query
  const ps = context.env.sc-e98d-d1.prepare("SELECT * from items");
  const data = await ps.first();

  return Response.json(data);
  console.log(Respons.json(data));
}
