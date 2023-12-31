'use client'

import { useSearchParams } from 'next/navigation'
import type { ClientSafeProvider } from 'next-auth/react'
import { signIn } from 'next-auth/react'

import { GitHub, Google } from '@/components/icons'
import { Button } from '@/components/ui'
import cn from '@/lib/cn'

interface StyleGuide {
  logo: JSX.Element
}

const providerStyleGuides: { [key: string]: StyleGuide } = {
  github: {
    logo: <GitHub />,
  },
  google: {
    logo: <Google />,
  },
}

const ProviderButton = ({ provider }: { provider: ClientSafeProvider }) => {
  const { logo } = providerStyleGuides[provider.id]
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl')

  return (
    <div key={provider.name}>
      <Button
        variant="ghost"
        className={cn(
          'flex items-center gap-3 border border-foreground text-sm font-medium',
        )}
        onClick={() =>
          signIn(provider.id, { callbackUrl: callbackUrl as string })
        }
      >
        {logo}
        <span>Sign in with {provider.name}</span>
      </Button>
    </div>
  )
}

export default ProviderButton
