import * as React from 'react'
import { FileSection } from 'src/organisms/file-section'
import { ResultSection } from 'src/organisms/result-section'
import { Layout } from 'src/atoms/layout'

export const Start = () => {
  return (
    <Layout>
      <FileSection />
      <ResultSection />
    </Layout>
  )
}
