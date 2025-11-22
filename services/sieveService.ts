export interface SieveJob {
    id: string;
    status: 'processing' | 'finished' | 'error';
    output?: any;
    error?: string;
}

export async function pushSieveJob(functionName: string, inputs: any): Promise<SieveJob | null> {
    try {
        const response = await fetch('/api/sieve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ functionName, inputs }),
        });

        if (!response.ok) {
            console.error('Failed to push job');
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error pushing job:', error);
        return null;
    }
}

export async function getSieveJob(jobId: string): Promise<SieveJob | null> {
    try {
        const response = await fetch(`/api/sieve?jobId=${jobId}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('Error fetching job:', error);
        return null;
    }
}
