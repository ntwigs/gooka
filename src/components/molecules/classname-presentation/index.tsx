import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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

    const timeout = setTimeout(() => {
      setClassnames(classnames)
    }, 450)

    return () => clearTimeout(timeout)
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
          {_classnames.map(({ name }: ClassnameProps) => (
            <UnnecessaryClassname key={name} name={name} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const ClassnamePresentation = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <HeaderSpacer />
      <Header
        title="Unused classnames"
        subtitle="Found some classnames to remove."
      />
      <Classnames />
    </motion.div>
  )
}