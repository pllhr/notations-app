'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useFormStatus } from 'react-dom';
import { registerUser, authenticate } from '../../app/actions';
import { Loader2, ArrowRight, User, Shield, Mail, Lock, Zap, Hexagon, Check, X } from 'lucide-react';

export const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [role, setRole] = useState<'USER' | 'ADMIN'>('USER');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Form State for controlled inputs & validation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleSubmit = async (formData: FormData) => {
        setError(null);
        setSuccess(null);

        if (!isLogin) {
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
            if (password.length < 6) {
                setError("Password must be at least 6 characters.");
                return;
            }
        }

        if (isLogin) {
            const result = await authenticate(undefined, formData);
            if (result) setError(result);
        } else {
            formData.append('role', role);
            const result = await registerUser(formData);
            if (result.error) {
                setError(result.error);
            } else {
                setSuccess('Identity verified. Access granted.');
                setIsLogin(true);
                setPassword('');
                setConfirmPassword('');
            }
        }
    };

    const isAdmin = role === 'ADMIN';

    return (
        <div
            className={`min-h-screen w-full flex items-center justify-center p-4 overflow-hidden relative transition-colors duration-1000 ${isAdmin ? 'bg-[#0a0000]' : 'bg-[#050505]'}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <BackgroundGrid isAdmin={isAdmin} />

                {/* Ambient Orbs */}
                <motion.div
                    animate={{
                        x: mouseX.get() * 50,
                        y: mouseY.get() * 50,
                        opacity: isAdmin ? 0.4 : 0.6
                    }}
                    className={`absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen transition-colors duration-1000 ${isAdmin ? 'bg-red-900/20' : 'bg-blue-900/10'}`}
                />
                <motion.div
                    animate={{
                        x: mouseX.get() * -50,
                        y: mouseY.get() * -50,
                        opacity: isAdmin ? 0.3 : 0.5
                    }}
                    className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-screen transition-colors duration-1000 ${isAdmin ? 'bg-orange-900/10' : 'bg-purple-900/10'}`}
                />
            </div>

            {/* 3D Card Container */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full max-w-[480px] relative z-10 perspective-1000"
            >
                <motion.div
                    layout
                    className={`backdrop-blur-2xl border rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden transition-all duration-500 relative ${isAdmin
                        ? 'bg-black/80 border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.2)]'
                        : 'bg-white/5 border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]'
                        }`}
                >
                    {/* Holographic Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Decorative Top Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 transition-colors duration-500 ${isAdmin ? 'bg-gradient-to-r from-red-600 via-orange-500 to-red-600' : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400'}`} />

                    {/* Header */}
                    <div className="text-center mb-10 relative transform-style-3d translate-z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center justify-center gap-2 mb-4"
                        >
                            <div className={`p-2 rounded-lg transition-colors duration-500 ${isAdmin ? 'bg-red-500/10 text-red-500' : 'bg-white/10 text-white'}`}>
                                <Hexagon size={24} className={isAdmin ? "animate-pulse" : ""} />
                            </div>
                            <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isAdmin ? 'text-red-500' : 'text-gray-400'}`}>
                                Notations System
                            </span>
                        </motion.div>

                        <GlitchText text={isLogin ? 'WELCOME' : 'INITIATE'} isAdmin={isAdmin} />

                        <p className={`text-sm font-medium transition-colors duration-500 mt-2 ${isAdmin ? 'text-red-400/60' : 'text-gray-400'}`}>
                            {isLogin ? 'Authenticate to access the neural grid.' : 'Begin your journey into the system.'}
                        </p>
                    </div>

                    {/* Role Selector */}
                    <AnimatePresence mode="wait">
                        {!isLogin && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mb-8 transform-style-3d translate-z-5"
                            >
                                <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
                                    <button
                                        type="button"
                                        onClick={() => setRole('USER')}
                                        className={`relative flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 overflow-hidden group ${role === 'USER' ? 'text-black' : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {role === 'USER' && (
                                            <motion.div
                                                layoutId="role-bg"
                                                className="absolute inset-0 bg-white shadow-lg"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <User size={16} /> USER
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setRole('ADMIN')}
                                        className={`relative flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 overflow-hidden group ${role === 'ADMIN' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {role === 'ADMIN' && (
                                            <motion.div
                                                layoutId="role-bg"
                                                className="absolute inset-0 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Shield size={16} /> ADMIN
                                        </span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Form */}
                    <form action={handleSubmit} className="space-y-5 relative transform-style-3d translate-z-5">
                        <InputGroup
                            name="email"
                            type="email"
                            label="Email Address"
                            icon={Mail}
                            value={email}
                            onChange={setEmail}
                            isAdmin={isAdmin}
                        />

                        <InputGroup
                            name="password"
                            type="password"
                            label="Password"
                            icon={Lock}
                            value={password}
                            onChange={setPassword}
                            isAdmin={isAdmin}
                        />

                        <AnimatePresence>
                            {!isLogin && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="space-y-5 overflow-hidden"
                                >
                                    <PasswordStrength password={password} isAdmin={isAdmin} />

                                    <InputGroup
                                        name="confirmPassword"
                                        type="password"
                                        label="Confirm Password"
                                        icon={Lock}
                                        value={confirmPassword}
                                        onChange={setConfirmPassword}
                                        isAdmin={isAdmin}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-medium flex items-center gap-2">
                                        <X size={14} /> {error}
                                    </div>
                                </motion.div>
                            )}

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs font-medium flex items-center gap-2">
                                        <Check size={14} /> {success}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <SubmitButton isLogin={isLogin} isAdmin={isAdmin} />
                    </form>

                    {/* Footer Toggle */}
                    <div className="mt-8 text-center transform-style-3d translate-z-10">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className={`text-xs transition-colors duration-300 hover:underline ${isAdmin ? 'text-red-500/60 hover:text-red-400' : 'text-gray-500 hover:text-white'}`}
                        >
                            {isLogin ? "New to the system? " : "Already have credentials? "}
                            <span className="font-bold">{isLogin ? 'Initialize Protocol' : 'Access Terminal'}</span>
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// --- Subcomponents ---

const InputGroup = ({ name, type, label, icon: Icon, value, onChange, isAdmin }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;

    return (
        <div className="relative group">
            <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isAdmin
                ? (isFocused ? 'text-red-500' : 'text-red-500/50')
                : (isFocused ? 'text-white' : 'text-gray-500')
                }`} size={20} />

            <input
                name={name}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full bg-black/20 border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none transition-all duration-300 ${isAdmin
                    ? 'border-red-900/30 focus:border-red-500 focus:shadow-[0_0_15px_rgba(220,38,38,0.1)]'
                    : 'border-white/10 focus:border-white/50 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    }`}
            />

            <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${isFocused || hasValue
                ? `top-2 text-xs font-bold ${isAdmin ? 'text-red-500' : 'text-white'}`
                : 'top-4 text-base text-gray-500'
                }`}>
                {label}
            </label>
        </div>
    );
};

const PasswordStrength = ({ password, isAdmin }: { password: string, isAdmin: boolean }) => {
    const strength = Math.min(password.length * 10, 100);
    const color = strength < 30 ? 'bg-red-500' : strength < 70 ? 'bg-yellow-500' : 'bg-green-500';

    return (
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${strength}%` }}
                className={`h-full transition-colors duration-300 ${isAdmin ? 'bg-red-600' : color}`}
            />
        </div>
    );
};

const GlitchText = ({ text, isAdmin }: { text: string, isAdmin: boolean }) => {
    return (
        <div className="relative inline-block">
            <motion.h1
                key={text}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                className="text-4xl md:text-5xl font-black text-white tracking-tighter relative z-10"
            >
                {text}
            </motion.h1>

            {isAdmin && (
                <>
                    <motion.h1
                        className="absolute top-0 left-0 text-4xl md:text-5xl font-black text-red-600 tracking-tighter opacity-50 z-0"
                        animate={{ x: [-2, 2, -2], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    >
                        {text}
                    </motion.h1>
                    <motion.h1
                        className="absolute top-0 left-0 text-4xl md:text-5xl font-black text-blue-600 tracking-tighter opacity-50 z-0"
                        animate={{ x: [2, -2, 2], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ repeat: Infinity, duration: 0.3 }}
                    >
                        {text}
                    </motion.h1>
                </>
            )}
        </div>
    );
};

function SubmitButton({ isLogin, isAdmin }: { isLogin: boolean; isAdmin: boolean }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full font-black py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden ${isAdmin
                ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500'
                : 'bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                }`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            {pending ? (
                <Loader2 className="animate-spin" size={20} />
            ) : (
                <>
                    {isLogin ? 'ACCESS SYSTEM' : 'CREATE IDENTITY'}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
            )}
        </button>
    );
}

const BackgroundGrid = ({ isAdmin }: { isAdmin: boolean }) => {
    return (
        <div className="absolute inset-0 z-0">
            <div
                className={`absolute inset-0 opacity-[0.03] transition-colors duration-1000 ${isAdmin ? 'bg-[linear-gradient(to_right,#ff0000_1px,transparent_1px),linear-gradient(to_bottom,#ff0000_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]'}`}
                style={{ backgroundSize: '40px 40px' }}
            />
        </div>
    );
};
