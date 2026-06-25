type MaterialIconProps = {
  name: string
  className?: string
  outlined?: boolean
}

export default function MaterialIcon({ name, className = '', outlined = false }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`${outlined ? 'material-icons-outlined' : 'material-icons'} notranslate ${className}`.trim()}
      translate="no"
    >
      {name}
    </span>
  )
}
