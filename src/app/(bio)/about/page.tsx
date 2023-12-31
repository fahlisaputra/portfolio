import type { Metadata } from 'next'
import Image from 'next/image'

import { GitHub, LinkedIn, Mail } from '@/components/icons'
import PageHeader from '@/components/page-header'
import { Container, Link } from '@/components/ui'
import { ROUTES, siteConfig } from '@/data/app'
import { seo } from '@/data/meta'
import cn from '@/lib/cn'

export const metadata: Metadata = seo({
  title: 'About',
  description: 'Learn a bit about me, careers, and more',
  keywords: ['bio', 'biography', 'information', 'about'],
  url: ROUTES.about,
})

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About" description="A short story of me" />
      <div id="content">
        <Container>
          <div
            className={cn(
              'items-start space-y-2',
              'xl:grid xl:grid-cols-4 xl:gap-x-6 xl:space-y-0',
            )}
          >
            <div
              className={cn(
                'flex flex-col items-center',
                'xl:sticky xl:top-24',
              )}
            >
              <div className={cn('relative h-52 w-52', 'xl:h-64 xl:w-64')}>
                <Image
                  src={siteConfig.author.avatar}
                  alt={siteConfig.author.name}
                  className={cn('rounded-full object-cover', 'xl:rounded-xl')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className={cn('flex flex-col items-center py-4')}>
                <h3 className={cn('text-xl font-bold')}>
                  {siteConfig.author.name}
                </h3>
                <h4
                  className={cn('text-base font-medium text-muted-foreground')}
                >
                  Full-stack Engineer
                </h4>
                <div
                  className={cn('my-2 flex items-center justify-center gap-4')}
                >
                  <Link
                    href={siteConfig.author.github}
                    showExternalLinkIcon={false}
                    className={cn(
                      'text-muted-foreground transition-all ease-in-out hover:text-foreground',
                    )}
                  >
                    <GitHub className={cn('h-6 w-6')} />
                  </Link>
                  <Link
                    href={siteConfig.author.linkedIn}
                    showExternalLinkIcon={false}
                    className={cn(
                      'text-muted-foreground transition-all ease-in-out hover:text-foreground',
                    )}
                  >
                    <LinkedIn className={cn('h-6 w-6')} />
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.author.email}`}
                    showExternalLinkIcon={false}
                    className={cn(
                      'text-muted-foreground transition-all ease-in-out hover:text-foreground',
                    )}
                  >
                    <Mail className={cn('h-6 w-6')} />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={cn(
                'prose max-w-none text-justify',
                'xl:col-span-3',
                'dark:prose-dark',
              )}
            >
              <p>
                Hello! I am Bona Brian Siagian, a Full-Stack Engineer with a
                focus on delivering innovative digital solutions that drive
                business value. I am currently working at{' '}
                <Link href="https://investree.id">Investree</Link>, a
                well-regarded company located in{' '}
                <Link href="https://www.google.com/maps/place/Jakarta,+Daerah+Khusus+Ibukota+Jakarta/@-6.2293866,106.6890864,11z">
                  Jakarta, Indonesia
                </Link>
                , where I have the opportunity to put my skills to work on a
                daily basis.
              </p>
              <p>
                I have a wealth of experience in crafting scalable software
                systems that meet both technical and business requirements,
                utilizing a range of programming languages such as{' '}
                <Link href="https://kotlinlang.org/">Kotlin</Link>,{' '}
                <Link href="https://www.php.net/">PHP</Link>,{' '}
                <Link href="https://www.javascript.com/">JavaScript</Link>, and{' '}
                <Link href="https://www.typescriptlang.org/">TypeScript</Link>.
                My expertise in backend frameworks such as{' '}
                <Link href="https://spring.io/">Spring</Link> and{' '}
                <Link href="https://laravel.com/">Laravel</Link>, and frontend
                frameworks such as{' '}
                <Link href="https://reactjs.org/">React</Link> and{' '}
                <Link href="https://vuejs.org/">Vue</Link>, allows me to deliver
                efficient and effective software solutions that meet the needs
                of organizations.
              </p>
              <p>
                As a Full-Stack Engineer, I am responsible for designing,
                developing, and maintaining software that meets both technical
                specifications and business requirements. I understand the
                importance of delivering high-quality products that not only
                meet technical requirements, but also provide tangible business
                value. To achieve this, I work closely with organizations to
                understand their unique needs and requirements, and I utilize my
                technical expertise to deliver customized solutions that drive
                business outcomes.
              </p>
              <p>
                I consider myself a curious and inquisitive person, always eager
                to learn and improve my skills. In my free time, I enjoy working
                on personal side projects, as it provides me with an opportunity
                to explore new technologies and further my knowledge and
                expertise. I am also a continuous learner, and I actively seek
                out new learning opportunities in order to stay up-to-date with
                the latest industry advancements.
              </p>
              <p>
                Besides hacking, I also have a strong appreciation for video
                games and music. I find that these activities provide an
                important balance to my professional life, allowing me to relax
                and recharge after a long day at work. I believe that
                maintaining a healthy work-life balance is essential for both
                personal and professional well-being.
              </p>
              <p>
                If you're interested in learning more about my professional
                background and qualifications, I encourage you to review{' '}
                <Link href={ROUTES.resume}>my resume.</Link>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default AboutPage
