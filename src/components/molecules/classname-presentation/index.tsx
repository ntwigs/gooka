import { useAnimation, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { stagger } from '../../../animations/stagger'
import { ClassnameProps } from '../../../redux/types/files'
import { HeaderSpacer } from '../../atoms/header-spacer'
import { useReloading } from '../../organisms/result-section/use-reloading'
import { Header } from '../header'
import { UnnecessaryClassname } from '../unnecessary-classname'

type ClassnamesProps = {
  classnames: ClassnameProps[]
}

const Classnames = ({ classnames }: ClassnamesProps) => (
  <>
    {classnames.map(({ name, id }: ClassnameProps, index: number) => (
      <UnnecessaryClassname key={index} name={name} />
    ))}
  </>
)

type ClassnamePresentationProps = {
  classnames: ClassnameProps[]
}

export const ClassnamePresentation = ({
  classnames,
}: ClassnamePresentationProps) => {
  const isReloading = useReloading()
  const controls = useAnimation()

  useEffect(() => {
    controls.set('initial')
    controls.start('listIn')
  }, [controls])

  useEffect(() => {
    if (isReloading) {
      controls.start('initial').then(() => {
        controls.start('listIn')
      })
    }
  }, [isReloading, controls])

  return (
    <motion.div key="classes" exit={{ opacity: 0 }}>
      <HeaderSpacer />
      <Header
        title="Unused classnames"
        subtitle="Found some classnames to remove."
      />
      <motion.div
        variants={stagger}
        animate={controls}
        initial="initial"
        exit="initial"
      >
        <Classnames classnames={classnames} />
      </motion.div>
    </motion.div>
  )
}
