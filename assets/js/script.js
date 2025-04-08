async function handleRequest(request) {
  try {
    // Query the D1 database
    const result = await DB.prepare("SELECT * FROM your_table_name").all();

    // Respond with the data as JSON
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors
    return new Response("Error accessing database: " + error.message, {
      status: 500,
    });
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
      // Fetch data from the Cloudflare Worker
      
