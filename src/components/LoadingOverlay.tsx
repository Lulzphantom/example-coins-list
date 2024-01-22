import { motion } from "framer-motion"

const LoadingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="-m-2 absolute inset-0 backdrop-blur-lg rounded-md flex justify-center items-center"
    >
      <span className="animate-bounce text-neutral-700 text-xs">
        Cargando...
      </span>
    </motion.div>
  )
}

export default LoadingOverlay