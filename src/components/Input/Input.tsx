import styles from './Input.module.css'
import cn from 'classnames'
import {InputProps} from "./Input.props.ts";
import {ForwardedRef, forwardRef} from "react";

const Input = forwardRef(({error, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {

    return(
        <div className={styles.inputWrapper}>
            <input className={cn(styles.input, className, {
                [styles.error]: error
            })} ref={ref} {...props} />
            { error && <div className={styles.errorMessage}>{error.message}</div> }
        </div>
    )
})

export default Input