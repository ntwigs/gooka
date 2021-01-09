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
import { useSelector, useDispatch } from 'react-redux'
import { getFiles } from '../../redux/selectors/files'
import { getStyle } from '../../redux/selectors/style'
import { Button } from '../../components/button'
import { resetFiles } from '../../redux/actions/files'
import { useState, useEffect } from 'react'
import { ipcRenderer } from '../../utils/ipcRender'

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

const useClassnames = () => {
  const [classnames, setClassnames] = useState<any>([])

  useEffect(() => {
    ipcRenderer.on('asynchronous-reply', (_: any, arg: any) => {
      if (Array.isArray(arg) && arg.length > 0) {
        setClassnames(arg)
      }
    })
  }, [])

  return classnames
}

const useCompare = () => {
  const files = useSelector(getFiles).files
  const style = useSelector(getStyle).style

  return () => {
    const hasFiles = Array.isArray(files) && files.length > 0
    const hasStyle = style.name && style.path

    if (hasFiles && hasStyle) {
      ipcRenderer.send('asynchronous-message', { files, style })
    }
  }
}

export const Start = () => {
  const classnames = useClassnames()
  const dispatch = useDispatch()
  const reset = () => dispatch(resetFiles())
  const compare = useCompare()

  return (
    <Section>
      <HeaderSection>
        <Header title="Gooka" subtitle="Remove unnecessary css classes." />
      </HeaderSection>
      <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
        <FileSection>
          <StyleSection />
          <FileRenderSection />
          <Box marginRight={Sizes.m}>
            <Button onClick={compare}>Compare</Button>
          </Box>
          <Button apperance="warning" onClick={reset}>
            Reset
          </Button>
        </FileSection>
      </Box>
      <ResultHeaderSection>
        <Header title="Unnecessary" subtitle="Found some unused classnames." />
      </ResultHeaderSection>
      <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
        <ResultSection>
          <Box marginBottom={Sizes.l} marginTop={Sizes.l}>
            {classnames.map((name: string) => {
              return <UnnecessaryClassname key={name} name={name} />
            })}
          </Box>
        </ResultSection>
      </Box>
    </Section>
  )
}
