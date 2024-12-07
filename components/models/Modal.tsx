import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react"

interface ModalProps {
  body: React.ReactElement,
  trigger: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({ body, trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center">
        {body}
      </DialogContent>
    </Dialog>
  )
}

export default Modal;