'use client'

import type { Post } from 'contentlayer/generated'
import { m } from 'framer-motion'
import { useMemo, useState } from 'react'

import { ListBullets, Search, SquaresFour } from '@/components/icons'
import { Button, Container, EmptyState, Input } from '@/components/ui'
import cn from '@/lib/cn'

import PostCard from './post-card'

type LayoutOption = 'list' | 'grid'

interface PostsProps {
  posts: Array<Post>
}

const filterPosts = (
  posts: Array<Post> | undefined,
  query: string | undefined | null = null,
): Array<Post> => {
  if (!posts) return []

  const filteredPosts = !query
    ? posts
    : posts?.filter((post) => {
        const searchContent =
          post?.title + post?.excerpt + post?.tags?.join(' ')
        return searchContent.toLocaleLowerCase().includes(query.toLowerCase())
      })

  return filteredPosts
}

const animation = {
  hide: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

const Posts = ({ posts }: PostsProps) => {
  const [search, setSearch] = useState('')
  const [layoutOption, setLayoutOption] = useState<LayoutOption>('list')

  const filteredPosts = useMemo(() => {
    return filterPosts(posts, search)
  }, [posts, search])

  const isListView = layoutOption === 'list'
  const isGridView = layoutOption === 'grid'

  const renderSearchComponent = () => {
    return (
      <div className={cn('relative flex-1')}>
        <Input
          aria-label="Search posts"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts"
          className="pl-12"
        />
        <Search
          className={cn('absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2')}
        />
      </div>
    )
  }

  return (
    <Container>
      <div className={cn('flex items-center justify-between gap-4')}>
        {renderSearchComponent()}
        <div className={cn('hidden gap-2 px-1', 'md:flex')}>
          <Button
            variant="ghost"
            className={cn(
              'text-muted-foreground',
              isListView && 'bg-accent text-accent-foreground',
            )}
            onClick={() => setLayoutOption('list')}
          >
            <ListBullets />
          </Button>
          <Button
            variant="ghost"
            className={cn(
              'text-muted-foreground',
              isGridView && 'bg-accent text-accent-foreground',
            )}
            onClick={() => setLayoutOption('grid')}
          >
            <SquaresFour />
          </Button>
        </div>
      </div>
      {filteredPosts.length ? (
        <div
          className={cn(
            'my-8 gap-8',
            isListView ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2',
            'md:my-12',
          )}
        >
          {filteredPosts.map((post, index) => (
            <m.div
              key={`${post.slug}.${layoutOption}}`}
              initial={animation.hide}
              animate={animation.show}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <PostCard post={post} layout={layoutOption} />
            </m.div>
          ))}
        </div>
      ) : (
        <EmptyState
          message={`No posts for "${search}". Try searching another keyword.`}
        />
      )}
    </Container>
  )
}

export default Posts
