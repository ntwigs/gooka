import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { stagger } from '../../../animations/stagger'
import { getSelectors } from '../../../redux/selectors/files'
import { SelectorProps } from '../../../redux/types/files'
import { hasElements } from '../../../utils/has-elements'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { Header } from '../header'
import { UnnecessarySelector } from '../unnecessary-selector'

const Selectors = () => {
  const Selectors = useSelector(getSelectors)
  const [_Selectors, setSelectors] = useState(Selectors)

  useEffect(() => {
    if (!hasElements(Selectors)) {
      setSelectors([])
    }

    const timeout = hasElements(Selectors)
      ? setTimeout(() => setSelectors(Selectors), 450)
      : undefined

    return () => timeout && clearTimeout(timeout)
  }, [Selectors])

  return (
    <AnimatePresence exitBeforeEnter>
      {hasElements(_Selectors) && (
        <motion.div
          variants={stagger}
          animate="listIn"
          initial="initial"
          exit="initial"
        >
          {_Selectors.map(({ name, id }: SelectorProps) => (
            <UnnecessarySelector key={id} name={name} />
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

export const SelectorPresentation = () => {
  return (
    <Padding>
      <motion.div exit={{ opacity: 0 }}>
        <HeaderSpacer />
        <Header
          title="Unused selectors"
          subtitle="Found some selectors to remove."
        />
        <Selectors />
      </motion.div>
    </Padding>
  )
}
