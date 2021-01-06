import * as React from 'react'
import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { FileSection } from '../../components/file-section'
import { ResultSection } from '../../components/result-section'
import { HeaderSection } from '../../components/header-section'
import { SectionHeader } from '../../components/section-header'
import { File } from '../../components/file'
import { Box, Sizes } from '../../components/box'
import { ResultHeaderSection } from '../../components/result-header-section'
import { UnnecessaryClassname } from '../../components/unnecessary-classname'
import { StyleDropzone } from '../../components/style-dropzone'
const { ipcRenderer } = window.require('electron')

export const Start = () => {
  React.useEffect(() => {
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

    ipcRenderer.on('asynchronous-reply', (event: any, arg: any) => {
      console.log(arg) // prints "pong"
    })

    ipcRenderer.send('asynchronous-message', 'ping')
  }, [])

  return (
    <Section>
      <HeaderSection>
        <Header title="Gooka" subtitle="Remove unnecessary css classes." />
      </HeaderSection>
      <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
        <FileSection>
          <Box marginBottom={Sizes.xl}>
            <SectionHeader
              title="Drop style to check"
              subtitle="Drag style-files from the vscode explorer and drop them here."
            />
            <StyleDropzone />
            <File name="card.scss" path="components/shared/card" />
          </Box>
          <SectionHeader
            title="Drop files to compare"
            subtitle="Drag files from the vscode explorer and drop them here."
          />
          <File name="cardTag.tsx" path="components/shared/card" />
          <File name="cardTitle.tsx" path="components/shared/card" />
          <File name="cardImage.tsx" path="components/shared/card" />
        </FileSection>
      </Box>
      <ResultHeaderSection>
        <Header title="Unnecessary" subtitle="Found some unused classnames." />
      </ResultHeaderSection>
      <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
        <ResultSection>
          <Box marginBottom={Sizes.l} marginTop={Sizes.l}>
            <UnnecessaryClassname name=".murderRed" />
            <UnnecessaryClassname name=".greenHavoc" />
            <UnnecessaryClassname name=".marginTest" />
            <UnnecessaryClassname name=".tubeIt" />
          </Box>
        </ResultSection>
      </Box>
    </Section>
  )
}
