import * as React from 'react'
import { useSelector } from 'react-redux'
import { Box } from 'src/atoms/box'
import { SectionHeader } from 'src/molecules/section-header'
import { File } from 'src/molecules/file'
import { Dropzone } from '../dropzone'
import { FileProps } from 'src/redux/types/files'

type DropSectionProps = {
  title: string
  subtitle: string
  dropTitle: string
  onDrop: (file: string) => void
  selector: (state: any) => FileProps[]
  fileType: 'file' | 'style'
  maxFiles?: number
}

export const DropSection = ({
  title,
  subtitle,
  dropTitle,
  onDrop,
  selector,
  fileType,
  maxFiles,
}: DropSectionProps) => {
  const files = useSelector(selector)
  const hasMaxFiles = maxFiles ? files.length >= maxFiles : false

  const Files = () => (
    <>
      {files.map(({ id, name, path }: FileProps) => (
        <File key={id} id={id} name={name} path={path} fileType={fileType} />
      ))}
    </>
  )

  return (
    <Box>
      <SectionHeader title={title} subtitle={subtitle} />
      <Files />
      <Dropzone title={dropTitle} onDrop={onDrop} hasMaxFiles={hasMaxFiles} />
    </Box>
  )
}
