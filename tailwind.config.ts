import typography from '@tailwindcss/typography'
import svgDataUri from 'mini-svg-data-uri'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { PluginAPI } from 'tailwindcss/types/config'

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // change your color schema here
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        code: {
          default: 'hsl(var(--code))',
        },
        input: 'hsl(var(--input))',
        spotify: '#1DB954',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        'fira-code': ['var(--font-fira-code)', ...fontFamily.sans],
      },
      backgroundImage: {
        'rainbow-gradient':
          'linear-gradient(to right, #d25778, #ec585c, #e7d155, #56a8c6)',
        'rainbow-gradient-inverse':
          'linear-gradient(to right, #56a8c6, #e7d155, #ec585c, #d25778)',
      },
      keyframes: {
        equalize: {
          '0%, 100%': {
            height: '0px',
          },
          '50%': {
            height: '0.75rem',
          },
        },
      },
      animation: {
        equalize: 'equalize 0.8s infinite',
      },
      typography: (theme: (value: string) => void) => ({
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            a: {
              textDecoration: 'none',
              color: 'hsl(var(--primary))',
              '&:hover': {
                textDecoration: 'underline',
                color: 'hsl(var(--primary))',
              },
              code: { color: 'hsl(var(--primary))' },
            },
            'h2, h3, h4, h5, h6': {
              position: 'relative',
              color: 'hsl(var(--foreground))',
            },
            img: {
              margin: '0 auto',
            },
            'code, pre code': {
              fontFamily: 'var(--font-fira-code)',
            },
            '[data-rehype-pretty-code-fragment]': {
              position: 'relative',
            },
            '[data-rehype-pretty-code-fragment] > [data-theme="dark"]': {
              display: 'none !important',
            },
            '[data-rehype-pretty-code-fragment] > [data-theme="light"]': {
              display: 'block !important',
            },
            ':not(pre) > code': {
              padding: '0.12em 0.25em',
              borderRadius: '0.375rem',
              display: 'inline-flex',
              lineHeight: '1.2',
              background: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
              border: '1px solid hsl(var(--border))',
              '&::before, &::after': {
                content: 'none',
              },
            },
            pre: {
              background: 'hsl(var(--code))',
              padding: '1.5rem 0',
              lineHeight: 2,
              '[data-line-numbers]': {
                '[data-line]::before': {
                  counterIncrement: 'lineNumber',
                  content: 'counter(lineNumber)',
                  display: 'inline-block',
                  width: '1rem',
                  marginRight: '1rem',
                  textAlign: 'right',
                  color: 'hsl(var(--muted-foreground) / 0.6)',
                },
              },
              '> code': {
                display: 'grid',
                counterReset: 'lineNumber',
                '> [data-line]': {
                  padding: '0 2.5rem 0 1.5rem',
                  borderLeft: '2px solid transparent',
                },
                '> [data-highlighted-line]': {
                  borderLeftColor: theme('colors.red.300'),
                  background: 'hsl(var(--primary) / 0.2)',
                },
              },
            },
            '[data-rehype-pretty-code-title]': {
              backgroundColor: '#f3f3f3',
              color: '#24292e',
              borderTopLeftRadius: '0.5rem',
              borderTopRightRadius: '0.5rem',
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            },
            '[data-rehype-pretty-code-title] ~ pre': {
              marginTop: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderTopWidth: 0,
            },
            '[data-rehype-pretty-code-title] ~ pre ~ button': {
              top: '3.75rem !important',
            },
            blockquote: {
              color: 'hsl(var(--foreground))',
              borderLeftColor: 'hsl(var(--accent))',
            },
            'p strong': {
              color: 'hsl(var(--foreground))',
            },
          },
        },
        dark: {
          css: {
            '[data-rehype-pretty-code-fragment] > [data-theme="light"]': {
              display: 'none !important',
            },
            '[data-rehype-pretty-code-fragment] > [data-theme="dark"]': {
              display: 'block !important',
            },
            pre: {
              border: '1px solid hsl(var(--border))',
              '> code': {
                '> [data-highlighted-line]': {
                  background: 'hsl(var(--primary) / 0.1)',
                },
              },
            },
            '[data-rehype-pretty-code-title]': {
              backgroundColor: '#21252b',
              color: '#d8d9d9',
            },
          },
        },
      }),
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          'grid-pattern': (value) => ({
            backgroundImage: `url("${svgDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="${value}" stroke-dasharray="6 3" transform="scale(1)"><path d="M36 .5H1.5V36"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    },
    typography,
  ],
} satisfies Config
