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
import { FileDropzone } from '../../components/file-dropzone'
import { useSelector } from 'react-redux'
import { getFiles } from '../../redux/selectors/files'
import { getStyle } from '../../redux/selectors/style'

const StyleSection = () => {
  const { style } = useSelector(getStyle)

  const hasNameAndPath = style.name && style.path

  return (
    <Box marginBottom={Sizes.xl}>
      <SectionHeader
        title="Drop style to check"
        subtitle="Drag style-files from the vscode explorer and drop them here."
      />
      {!hasNameAndPath && <StyleDropzone />}
      {hasNameAndPath && (
        <File
          name={style.name}
          path={style.path}
          id={style.id}
          fileType="style"
        />
      )}
    </Box>
  )
}

const FileRenderSection = () => {
  const { files } = useSelector(getFiles)

  const Files = () => (
    <>
      {files.map(({ id, name, path }: any) => (
        <File key={id} id={id} name={name} path={path} fileType="file" />
      ))}
    </>
  )

  return (
    <Box>
      <SectionHeader
        title="Drop files to compare"
        subtitle="Drag files from the vscode explorer and drop them here."
      />
      <Files />
      <FileDropzone />
    </Box>
  )
}

// React.useEffect(() => {
//   console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

//   ipcRenderer.on('asynchronous-reply', (event: any, arg: any) => {
//     console.log(arg) // prints "pong"
//   })

//   ipcRenderer.send('asynchronous-message', 'ping')
// }, [])

export const Start = () => {
  return (
    <Section>
      <HeaderSection>
        <Header title="Gooka" subtitle="Remove unnecessary css classes." />
      </HeaderSection>
      <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
        <FileSection>
          <StyleSection />
          <FileRenderSection />
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
