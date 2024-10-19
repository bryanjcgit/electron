import { useCallback, useContext } from "react"
import { FormContext } from "./FormCard"
import styles from '../../pages/styles/styles.module.css'
import useDebugLog from "../../hooks/useDebugLog"


export interface Props {
  className?: string
  style?: React.CSSProperties
}

export const FormButtons = ({ className, style }: Props) => {

  const { increaseBy, counter, maxCount } = useContext(FormContext)

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )
  useDebugLog({maxCount, counter})
  

  return (

    <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}    
    >

      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}> - </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}> + </button>

    </div>
  )
}
