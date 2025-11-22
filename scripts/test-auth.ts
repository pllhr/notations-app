
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

// Manually load .env.local
try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                const cleanKey = key.trim();
                // Skip comments
                if (cleanKey.startsWith('#')) return;

                let cleanValue = valueParts.join('=').trim();
                // Remove inline comments
                if (cleanValue.includes(' #')) {
                    cleanValue = cleanValue.split(' #')[0].trim();
                }

                // Remove quotes
                if ((cleanValue.startsWith("'") && cleanValue.endsWith("'")) ||
                    (cleanValue.startsWith('"') && cleanValue.endsWith('"'))) {
                    cleanValue = cleanValue.slice(1, -1);
                }

                process.env[cleanKey] = cleanValue;
            }
        });
        console.log('Loaded .env.local');
    } else {
        console.log('.env.local not found');
    }
} catch (e) {
    console.error('Failed to load .env.local', e);
}

async function testAuth() {
    // Dynamic import to ensure env vars are loaded first
    const { default: pool } = await import('../lib/db');

    const testEmail = 'test@example.com';
    const testPassword = 'password123';

    console.log('--- Starting Auth Test ---');

    try {
        // 1. Cleanup
        await pool.query('DELETE FROM users WHERE email = $1', [testEmail]);
        console.log('Cleaned up old test user.');

        // 2. Register
        const hashedPassword = await bcrypt.hash(testPassword, 10);
        const id = 'test-user-id';
        await pool.query(
            `INSERT INTO users (id, email, password_hash, role, created_at, name) VALUES ($1, $2, $3, $4, $5, $6)`,
            [id, testEmail, hashedPassword, 'USER', Date.now(), 'Test User']
        );
        console.log('Registered test user.');

        // 3. Fetch
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [testEmail]);
        const user = result.rows[0];

        if (!user) {
            console.error('User not found after insertion!');
            return;
        }
        console.log('Fetched user:', user.email);

        // 4. Compare
        const match = await bcrypt.compare(testPassword, user.password_hash);
        console.log('Password match result:', match);

        if (match) {
            console.log('SUCCESS: Auth logic is sound.');
        } else {
            console.error('FAILURE: Password mismatch.');
        }

        // 5. List all users with hashes
        const allUsers = await pool.query('SELECT email, role, password_hash FROM users');
        console.log('--- Existing Users ---');
        allUsers.rows.forEach(u => console.log(`${u.email} (${u.role}) - Hash: ${u.password_hash.substring(0, 10)}...`));

    } catch (error) {
        console.error('Test failed with error:', error);
    } finally {
        // Cleanup
        await pool.query('DELETE FROM users WHERE email = $1', [testEmail]);
        process.exit(0);
    }
}

testAuth();
