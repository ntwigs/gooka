import React from 'react'
import { Layout } from '../../atoms/layout'
import { FileSection } from '../../organisms/file-section'
import { ResultSection } from '../../organisms/result-section'

export const Start = () => {
  return (
    <Layout>
      <FileSection />
      <ResultSection />
    </Layout>
  )
}
