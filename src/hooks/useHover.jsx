import { useState, useRef, useEffect } from "react"

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)

  const enter = () => {
    setIsHovered(true)
  }

  const leave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter)
    ref.current.addEventListener("mouseleave", leave)

    return () => {
      ref.current.removeEventListener("mouseenter", enter)
      ref.current.removeEventListener("mouseleave", leave)
    }
  }, [])

  return [isHovered, ref]
}

export default useHover
