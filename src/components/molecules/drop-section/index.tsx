import * as React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '../../atoms/box'
import { File as FileProps } from '../../../../common/types/file'
import { Dropzone } from '../dropzone'
import { File } from '../file'
import { Header } from '../header'
import { AnimatePresence, motion } from 'framer-motion'

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

  return (
    <Box>
      <Header title={title} subtitle={subtitle} />
      <AnimatePresence>
        {files.map(({ id, name, path }: FileProps) => (
          <File key={id} id={id} name={name} path={path} fileType={fileType} />
        ))}
      </AnimatePresence>
      <Dropzone title={dropTitle} onDrop={onDrop} hasMaxFiles={hasMaxFiles} />
    </Box>
  )
}
