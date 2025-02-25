import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from the MCP Fun API!',
    time: new Date().toISOString(),
  });
}
