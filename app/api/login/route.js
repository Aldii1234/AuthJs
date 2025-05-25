export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  // User dummy (login hardcoded)
  const users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'mhs', password: 'mhs', role: 'mahasiswa' },
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return Response.json({ success: true, user });
  } else {
    return Response.json({ success: false }, { status: 401 });
  }
}
