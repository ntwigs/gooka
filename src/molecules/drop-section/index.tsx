import * as React from 'react'
import { useSelector } from 'react-redux'
import { Box } from 'src/components/box'
import { SectionHeader } from 'src/components/section-header'
import { File } from 'src/components/file'
import { Dropzone } from '../dropzone'
import { FileProps } from 'src/redux/types/files'

type DropSectionProps = {
  title: string
  subtitle: string
  dropTitle: string
  onDrop: (file: string) => void
  selector: (state: any) => FileProps[]
}

export const DropSection = ({
  title,
  subtitle,
  dropTitle,
  onDrop,
  selector,
}: DropSectionProps) => {
  const files = useSelector(selector)

  const Files = () => (
    <>
      {files.map(({ id, name, path }: FileProps) => (
        <File key={id} id={id} name={name} path={path} fileType="file" />
      ))}
    </>
  )

  return (
    <Box>
      <SectionHeader title={title} subtitle={subtitle} />
      <Files />
      <Dropzone title={dropTitle} onDrop={onDrop} />
    </Box>
  )
}
