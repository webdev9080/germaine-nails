// lib/apiResponse.ts
export function withRevalidation(data: any, revalidateSeconds = 60) {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `s-maxage=${revalidateSeconds}, stale-while-revalidate`,
    },
  })
}