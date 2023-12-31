import { Container } from '@/components/ui'
import cn from '@/lib/cn'

interface SectionProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <div className={cn('mb-12')}>
      <Container>
        <h2 className={cn('mb-2 font-bold text-primary')}>{title}</h2>
        <p
          className={cn(
            'mb-4 text-xl font-bold text-secondary-foreground',
            'md:text-2xl',
          )}
        >
          {subtitle}
        </p>
        {children}
      </Container>
    </div>
  )
}

export default Section
