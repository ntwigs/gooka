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

export const FileSection = () => {
  const onFileDrop = useInfo({ setAction: setFiles })
  const onStyleDrop = useInfo({ setAction: setStyles })

  return (
    <Drawer>
      <LogoHeader />
      <Scroll>
        <Box marginBottom={Sizes.s}>
          <DropSection
            title="Styles"
            subtitle="Drop style to compare with here."
            dropTitle="Drop style here"
            onDrop={onStyleDrop}
            selector={getStyles}
            fileType="style"
            maxFiles={1}
            delay={1.5}
          />
        </Box>
        <DropSection
          title="Files"
          subtitle="Drop files to compare with here."
          dropTitle="Drop files here"
          onDrop={onFileDrop}
          selector={getFiles}
          fileType="file"
          delay={2}
        />
      </Scroll>
      <ActionSection />
    </Drawer>
  )
}
