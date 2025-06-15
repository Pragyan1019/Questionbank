export async function POST(req) {

    const { password } = await req.json();
    const res = await fetch(process.env.Fetch_Password, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' }
    });

  
}
