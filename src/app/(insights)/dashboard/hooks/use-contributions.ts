import { useRequest } from '@/hooks'
import type { GithubUserContributionsCollection } from '@/types/github'

const useContributions = (endpoint: string) => {
  const { data, loading, error } = useRequest<
    GithubUserContributionsCollection | undefined
  >(endpoint)

  return { data, loading, error }
}

export default useContributions
