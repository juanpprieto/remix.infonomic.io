import * as React from 'react'

import type { LoaderArgs, V2_MetaFunction, V2_HtmlMetaDescriptor } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

// import { requireUserId } from '~/session.server'
import { mergeMeta } from '~/utils/utils'

import { Button } from '~/ui/components/button'
import { Card } from '~/ui/components/card'
import { Container } from '~/ui/components/container'
// import { Checkbox } from '~/ui/components/input'
import { Alert } from '~/ui/components/notifications'
import { RouterPager, EventPager } from '~/ui/components/pager'
import { Section } from '~/ui/components/section'
import PublicLayout from '~/ui/layouts/public-layout'

/**
 * meta
 * @returns {V2_MetaFunction}
 */
export const meta: V2_MetaFunction = ({ matches }): V2_HtmlMetaDescriptor[] => {
  const title = 'Theme - Infonomic Remix Workbench'
  return mergeMeta(matches, [{ title }, { property: 'og:title', content: title }])
}

/**
 * loader
 * @param param0
 * @returns
 */
export async function loader({ request }: LoaderArgs) {
  // await requireUserId(request) // Make public for the moment

  const url = new URL(request.url)

  // TODO: zod validator for query string params
  const pageString = url.searchParams.get('page') || '1'
  const page = parseInt(pageString, 10) || 1

  const count = 232
  const pageSize = 10

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const meta: {
    total: number
    pageSize: number
    pageTotal: number
    currentPage: number
  } = {
    total: count,
    pageSize,
    pageTotal: Math.ceil(count / pageSize),
    currentPage: page,
  }

  const users: { name: string; age: number }[] = []

  return json({ users, meta })
}

/**
 * Theme
 * @returns
 */
export default function Theme() {
  const data = useLoaderData<typeof loader>()

  const [page, setPage] = React.useState(1)

  const handlePageChange = (event: any, number: number) => {
    setPage(number)
  }

  return (
    <PublicLayout>
      <Section className="py-4">
        <Container>
          <p className="prose dark:prose-invert">Stateful Pagers: Current page: {page}</p>
          <EventPager
            page={page}
            count={24}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
            componentName="pager1"
          />
          <EventPager page={page} count={24} onChange={handlePageChange} componentName="pager2" />
          <EventPager
            page={page}
            count={24}
            onChange={handlePageChange}
            componentName="pager3"
            hideNextButton
            hidePrevButton
          />

          <p className="prose dark:prose-invert">
            Stateless Pager: Current page: {data?.meta?.currentPage}
          </p>

          <RouterPager
            page={data?.meta?.currentPage}
            count={data?.meta?.pageTotal}
            showFirstButton
            showLastButton
            componentName="pager4"
          />
        </Container>
      </Section>
      <Section className="flex-1 py-4">
        <Container className="text-black">
          <div className="grid-cols-2 mx-auto max-w-[420px] gap-4 lg:grid lg:max-w-none">
            <div className="primary">
              <div className="prose dark:prose-invert">
                <span>Primary - Filled</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>

              <div className="prose dark:prose-invert">
                <span>Primary - Gradient</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button variant="gradient" size="sm">
                  Small
                </Button>
                <Button variant="gradient" size="md">
                  Medium
                </Button>
                <Button variant="gradient" size="lg">
                  Large
                </Button>
                <Button variant="gradient" disabled>
                  Disabled
                </Button>
              </div>

              <div className="prose dark:prose-invert">
                <span>Primary - Outline</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button variant="outlined" size="sm">
                  Small
                </Button>
                <Button variant="outlined" size="md">
                  Medium
                </Button>
                <Button variant="outlined" size="lg">
                  Large
                </Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
              </div>

              <div className="prose dark:prose-invert">
                <span>Primary - Text</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button variant="text" size="sm">
                  Small
                </Button>
                <Button variant="text" size="md">
                  Medium
                </Button>
                <Button variant="text" size="lg">
                  Large
                </Button>
                <Button variant="text" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <div className="secondary">
              <div className="prose dark:prose-invert">
                <span>Secondary - Filled</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button intent="secondary" size="sm">
                  Small
                </Button>
                <Button intent="secondary" size="md">
                  Medium
                </Button>
                <Button intent="secondary" size="lg">
                  Large
                </Button>
                <Button intent="secondary" disabled>
                  Disabled
                </Button>
              </div>

              <div className="prose dark:prose-invert">
                <span>Secondary - Gradient</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button variant="gradient" intent="secondary" size="sm">
                  Small
                </Button>
                <Button variant="gradient" intent="secondary" size="md">
                  Medium
                </Button>
                <Button variant="gradient" intent="secondary" size="lg">
                  Large
                </Button>
                <Button variant="gradient" intent="secondary" disabled>
                  Disabled
                </Button>
              </div>

              <div className="prose dark:prose-invert">
                <span>Secondary - Outline</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button variant="outlined" intent="secondary" size="sm">
                  Small
                </Button>
                <Button variant="outlined" intent="secondary" size="md">
                  Medium
                </Button>
                <Button variant="outlined" intent="secondary" size="lg">
                  Large
                </Button>
                <Button variant="outlined" intent="secondary" disabled>
                  Disabled
                </Button>
              </div>

              <div className="prose dark:prose-invert">
                <span>Secondary - Text</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Button variant="text" intent="secondary" size="sm">
                  Small
                </Button>
                <Button variant="text" intent="secondary" size="md">
                  Medium
                </Button>
                <Button variant="text" intent="secondary" size="lg">
                  Large
                </Button>
                <Button variant="text" intent="secondary" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="py-4">
        <Container>
          <Card>This is a card</Card>
        </Container>
      </Section>
      <Section className="py-4">
        <Container>
          <Alert intent="primary">This is a primary alert - with some additional text here.</Alert>
          <Alert intent="secondary">
            This is a secondary alert - with some additional text here.
          </Alert>
          <Alert intent="success">This is a success alert - with some additional text here.</Alert>
          <Alert intent="info">This is a info alert - with some additional text here.</Alert>
          <Alert intent="warning">This is a warning alert - with some additional text here.</Alert>
          <Alert intent="danger">This is a danger alert - with some additional text here.</Alert>
        </Container>
      </Section>
    </PublicLayout>
  )
}
