import * as React from 'react'
import { Box, Sizes } from 'src/atoms/box'
import { Header } from 'src/components/header'
import { ActionSection } from 'src/molecules/action-section'
import { DropSection } from 'src/molecules/drop-section'
import { setFiles, setStyles } from 'src/redux/actions/files'
import { getFiles, getStyles } from 'src/redux/selectors/files'
import { useInfo } from './use-info'

export const FileSection = () => {
  const onFileDrop = useInfo({ setAction: setFiles })
  const onStyleDrop = useInfo({ setAction: setStyles })

  return (
    <Box marginLeft={Sizes.xl} marginRight={Sizes.xl}>
      <Header title="Gooka" subtitle="Remove unnecessary css classes." />
      <Box marginBottom={Sizes.xl}>
        <DropSection
          title="Drop style to check"
          subtitle="Drag style-files from the vscode explorer and drop them here."
          dropTitle="Drop style here"
          onDrop={onStyleDrop}
          selector={getStyles}
          fileType="style"
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
