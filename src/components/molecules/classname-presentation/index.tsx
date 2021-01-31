import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { stagger } from '../../../animations/stagger'
import { getClassnames } from '../../../redux/selectors/files'
import { ClassnameProps } from '../../../redux/types/files'
import { hasElements } from '../../../utils/has-elements'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { Header } from '../header'
import { UnnecessaryClassname } from '../unnecessary-classname'

const Classnames = () => {
  const classnames = useSelector(getClassnames)
  const [_classnames, setClassnames] = useState(classnames)

  useEffect(() => {
    if (!hasElements(classnames)) {
      setClassnames([])
    }

    const timeout = hasElements(classnames)
      ? setTimeout(() => setClassnames(classnames), 450)
      : undefined

    return () => timeout && clearTimeout(timeout)
  }, [classnames])

  return (
    <AnimatePresence exitBeforeEnter>
      {hasElements(_classnames) && (
        <motion.div
          variants={stagger}
          animate="listIn"
          initial="initial"
          exit="initial"
        >
          {_classnames.map(({ name, id }: ClassnameProps) => (
            <UnnecessaryClassname key={id} name={name} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Padding = styled.div`
  @media (max-width: 800px) {
    padding: 40px 0;
  }
`

export const ClassnamePresentation = () => {
  return (
    <Padding>
      <motion.div exit={{ opacity: 0 }}>
        <HeaderSpacer />
        <Header
          title="Unused classnames"
          subtitle="Found some classnames to remove."
        />
        <Classnames />
      </motion.div>
    </Padding>
  )
}
