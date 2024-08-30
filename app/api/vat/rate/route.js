// /app/api/vat/rate/route.js
export async function GET(request) {
    const vatRate = process.env.VAT_RATE || 0.07;
    return new Response(JSON.stringify({ rate: parseFloat(vatRate) }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
