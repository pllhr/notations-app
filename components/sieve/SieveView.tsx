'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Loader2, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { pushSieveJob, getSieveJob, SieveJob } from '../../services/sieveService';

export const SieveView = () => {
    const [functionName, setFunctionName] = useState('sieve/stable-diffusion-xl');
    const [inputs, setInputs] = useState('{\n  "prompt": "A futuristic city with neon lights, cyberpunk style"\n}');
    const [activeJob, setActiveJob] = useState<SieveJob | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);

    const handleRun = async () => {
        try {
            const parsedInputs = JSON.parse(inputs);
            setIsLoading(true);
            addLog(`Pushing job to ${functionName}...`);

            const job = await pushSieveJob(functionName, parsedInputs);

            if (job && job.id) {
                setActiveJob(job);
                addLog(`Job started: ${job.id}`);
            } else {
                addLog('Failed to start job.');
                setIsLoading(false);
            }
        } catch (e) {
            addLog('Invalid JSON inputs.');
            alert('Invalid JSON in inputs field');
        }
    };

    // Polling
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (activeJob && activeJob.status !== 'finished' && activeJob.status !== 'error') {
            interval = setInterval(async () => {
                const updatedJob = await getSieveJob(activeJob.id);
                if (updatedJob) {
                    setActiveJob(updatedJob);
                    if (updatedJob.status === 'finished') {
                        addLog('Job finished successfully!');
                        setIsLoading(false);
                    } else if (updatedJob.status === 'error') {
                        addLog(`Job failed: ${updatedJob.error}`);
                        setIsLoading(false);
                    }
                }
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [activeJob]);

    return (
        <div className="h-full w-full p-8 bg-gray-50 dark:bg-[#0a0a0a] text-black dark:text-white overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Terminal className="text-white" size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">Sieve Console</h1>
                        <p className="text-gray-500 dark:text-gray-400">Run AI models directly from your workspace.</p>
                    </div>
                </div>

                {/* Input Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Function Name</label>
                            <input
                                value={functionName}
                                onChange={(e) => setFunctionName(e.target.value)}
                                className="w-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg px-4 py-3 font-mono text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                placeholder="e.g. sieve/stable-diffusion-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Inputs (JSON)</label>
                            <textarea
                                value={inputs}
                                onChange={(e) => setInputs(e.target.value)}
                                className="w-full h-64 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg px-4 py-3 font-mono text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
                                placeholder="{}"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleRun}
                            disabled={isLoading}
                            className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black dark:bg-white dark:text-black hover:shadow-purple-500/25'}`}
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : <Play size={18} fill="currentColor" />}
                            {isLoading ? 'Running...' : 'Run Function'}
                        </motion.button>
                    </div>

                    {/* Output Section */}
                    <div className="space-y-4 flex flex-col h-full">
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-bold uppercase text-gray-500">Output & Logs</label>
                            {activeJob && (
                                <span className={`text-xs px-2 py-1 rounded font-bold uppercase ${activeJob.status === 'finished' ? 'bg-green-100 text-green-600' :
                                        activeJob.status === 'error' ? 'bg-red-100 text-red-600' :
                                            'bg-blue-100 text-blue-600 animate-pulse'
                                    }`}>
                                    {activeJob.status}
                                </span>
                            )}
                        </div>

                        <div className="flex-1 bg-black rounded-xl p-4 font-mono text-xs text-green-400 overflow-y-auto custom-scrollbar border border-gray-800 shadow-inner min-h-[300px]">
                            {logs.length === 0 && <span className="text-gray-600 opacity-50">Waiting for jobs...</span>}
                            {logs.map((log, i) => (
                                <div key={i} className="mb-1 opacity-80">{log}</div>
                            ))}

                            {activeJob?.status === 'finished' && activeJob.output && (
                                <div className="mt-4 pt-4 border-t border-gray-800">
                                    <div className="text-white font-bold mb-2">RESULT:</div>
                                    <pre className="whitespace-pre-wrap text-gray-300">
                                        {JSON.stringify(activeJob.output, null, 2)}
                                    </pre>
                                    {/* Try to render image if output looks like a URL */}
                                    {typeof activeJob.output === 'object' && activeJob.output.data && (
                                        <img src={activeJob.output.data} alt="Result" className="mt-4 rounded-lg border border-gray-700 max-w-full" />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
