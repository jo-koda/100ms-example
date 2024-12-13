import { ReactNode } from 'react'
import ModalContainer from './_sections/modal-container'

export default function Layout({ children }: { children: ReactNode }) {
  return <ModalContainer>{children}</ModalContainer>
}
