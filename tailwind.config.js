tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: '#0a0a0c',
                card: '#16161a',
                accent: '#6366f1',
                secondary: '#a855f7',
                success: '#22c55e',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['JetBrains+Mono', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
}
