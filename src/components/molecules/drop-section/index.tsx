import * as React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '../../atoms/box'
import { File as FileProps } from '../../../../common/types/file'
import { Dropzone } from '../dropzone'
import { File } from '../file'
import { Header } from '../header'
import { AnimatePresence } from 'framer-motion'
import { variants } from '../../../animations/animation'
import { staggerFiles } from '../../../animations/stagger'
import { hasElements } from '../../../utils/has-elements'
import { Animator } from '../../atoms/animator'

type DropSectionProps = {
  title: string
  subtitle: string
  dropTitle: string
  onDrop: (file: string) => void
  selector: (state: any) => FileProps[]
  fileType: 'file' | 'style'
  maxFiles?: number
  delay?: number
}

export const DropSection = ({
  title,
  subtitle,
  dropTitle,
  onDrop,
  selector,
  fileType,
  maxFiles,
  delay = 0,
}: DropSectionProps) => {
  const files = useSelector(selector)
  const hasMaxFiles = maxFiles ? files.length >= maxFiles : false

  return (
    <Box>
      <Header title={title} subtitle={subtitle} delay={delay} />
      <AnimatePresence>
        {hasElements(files) && (
          <Animator
            variants={staggerFiles}
            animate="listIn"
            initial="initial"
            exit="initial"
          >
            <AnimatePresence>
              {files.map(({ id, name, path }: FileProps) => (
                <File
                  key={id}
                  id={id}
                  name={name}
                  path={path}
                  fileType={fileType}
                />
              ))}
            </AnimatePresence>
          </Animator>
        )}
      </AnimatePresence>
      <Animator
        variants={variants(delay + 0.4)}
        animate="animate"
        initial="initial"
      >
        <AnimatePresence>
          {!hasMaxFiles && <Dropzone title={dropTitle} onDrop={onDrop} />}
        </AnimatePresence>
      </Animator>
    </Box>
  )
}
