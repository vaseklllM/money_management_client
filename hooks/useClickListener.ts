import { useRef } from "react"
import { useStateIfMounted } from "use-state-if-mounted"

export default function useClickListener() {
  const [open, setOpen] = useStateIfMounted(false)
  const ref = useRef()

  function onOpen() {
    setOpen((v) => !v)
    document.addEventListener("click", clickOutside)
  }

  function onClose() {
    setOpen(false)
    document.removeEventListener("click", clickOutside)
  }

  function clickOutside(event) {
    const domNode = ref.current
    // @ts-ignore
    if (!domNode || !domNode.contains(event.target)) setOpen(false)
  }

  return {
    ref,
    open,
    onOpen,
    onClose,
  }
}
