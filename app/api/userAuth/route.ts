import { NextRequest } from 'next/server';

export async function GET({}: NextRequest) {
  return Response.json({ message: 'GET ok!' });
}

export async function POST(request: NextRequest) {
  const reqData = await request.json();
  console.log('POST api/userAuth:', reqData);
  return Response.json(reqData);
}
