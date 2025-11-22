// app/api/sieve/route.ts
import { NextResponse } from 'next/server';

const SIEVE_API_URL = 'https://mango.sievedata.com/v2';

export async function POST(request: Request) {
    try {
        const { functionName, inputs } = await request.json();

        // 1. Enviar tarefa para a Sieve
        const response = await fetch(`${SIEVE_API_URL}/push`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': process.env.SIEVE_API_KEY!, // Pega do servidor, seguro
            },
            body: JSON.stringify({
                function: functionName, // Ex: "sieve/stable-diffusion-xl"
                inputs: inputs,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json(error, { status: response.status });
        }

        const data = await response.json();
        // A Sieve retorna um ID do trabalho (job id)
        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// Rota para checar o status (Polling)
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('jobId');

    if (!jobId) return NextResponse.json({ error: 'Job ID required' }, { status: 400 });

    const response = await fetch(`${SIEVE_API_URL}/jobs/${jobId}`, {
        method: 'GET',
        headers: {
            'X-API-Key': process.env.SIEVE_API_KEY!,
        },
    });

    const data = await response.json();
    return NextResponse.json(data);
}