import { NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET() {
  try {
    const res = await fetch('https://api.applefumi.xyz/openapi.yaml', {
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `API server returned ${res.status}` },
        { status: 502 },
      );
    }

    return new NextResponse(await res.text(), {
      headers: {
        'Content-Type': res.headers.get('content-type') ?? 'text/plain',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch OpenAPI spec from API server' },
      { status: 502 },
    );
  }
}
