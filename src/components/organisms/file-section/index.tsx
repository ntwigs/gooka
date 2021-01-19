import React, { RefObject, useEffect, useRef, useState } from 'react'
import { Box, Sizes } from '../../atoms/box'
import { DropSection } from '../../molecules/drop-section'
import { setFiles, setStyles } from '../../../redux/actions/files'
import { getStyles, getFiles } from '../../../redux/selectors/files'
import { ActionSection } from '../action-section'
import { useInfo } from './use-info'
import { Drawer } from '../../atoms/drawer'
import { LogoHeader } from '../../molecules/logo-header'
import { Scroll } from '../../atoms/scroll'
import { motion } from 'framer-motion'

export const FileSection = () => {
  const onFileDrop = useInfo({ setAction: setFiles })
  const onStyleDrop = useInfo({ setAction: setStyles })

  return (
    <Drawer>
      <LogoHeader />
      <Scroll>
        <Box marginBottom={Sizes.s}>
          <motion.div
            transition={{
              delay: 1,
              mass: 10,
              damping: 100,
              ease: 'easeInOut',
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <DropSection
              title="Files"
              subtitle="Drop files to compare with here."
              dropTitle="Drop style here"
              onDrop={onStyleDrop}
              selector={getStyles}
              fileType="style"
              maxFiles={1}
            />
          </motion.div>
        </Box>
        <motion.div
          transition={{
            delay: 1.25,
            mass: 10,
            damping: 100,
            ease: 'easeInOut',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <DropSection
            title="Styles"
            subtitle="Drop styles to compare with here."
            dropTitle="Drop files here"
            onDrop={onFileDrop}
            selector={getFiles}
            fileType="file"
          />
        </motion.div>
      </Scroll>
      <ActionSection />
    </Drawer>
  )
}
