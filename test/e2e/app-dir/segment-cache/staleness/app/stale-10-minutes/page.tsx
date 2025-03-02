import { Suspense } from 'react'
import { unstable_cacheLife as cacheLife } from 'next/cache'

async function Content() {
  'use cache'
  await new Promise((resolve) => setTimeout(resolve, 0))
  cacheLife({ stale: 10 * 60 })
  return 'Content with stale time of 10 minutes'
}

export default function Page() {
  return (
    <Suspense fallback="Loading...">
      <Content />
    </Suspense>
  )
}
