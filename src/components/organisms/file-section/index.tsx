import React from 'react'
import { Box, Sizes } from '../../atoms/box'
import { DropSection } from '../../molecules/drop-section'
import { Header } from '../../molecules/header'
import { setFiles, setStyles } from '../../../redux/actions/files'
import { getStyles, getFiles } from '../../../redux/selectors/files'
import { ActionSection } from '../action-section'
import { useInfo } from './use-info'

export const FileSection = () => {
  const onFileDrop = useInfo({ setAction: setFiles })
  const onStyleDrop = useInfo({ setAction: setStyles })

  return (
    <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
      <Header title="Gooka" subtitle="Remove unnecessary css classes." />
      <Box marginBottom={Sizes.s}>
        <DropSection
          title="Drop style to check"
          subtitle="Drag style-files from the vscode explorer and drop them here."
          dropTitle="Drop style here"
          onDrop={onStyleDrop}
          selector={getStyles}
          fileType="style"
          maxFiles={1}
        />
      </Box>
      <DropSection
        title="Drop files to compare"
        subtitle="Drag files from the vscode explorer and drop them here."
        dropTitle="Drop files here"
        onDrop={onFileDrop}
        selector={getFiles}
        fileType="file"
      />
      <ActionSection />
    </Box>
  )
}
