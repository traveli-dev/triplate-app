import {ButtonHTMLAttributes} from "react";
import { styles } from '@/styles/components/Buttons/ButtonWithIcon.styles'
import {HiOutlineDuplicate, HiOutlineHeart, HiOutlineLink, HiOutlineShare} from "react-icons/hi";

type ButtonSmallProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
    icon: 'share' | 'heart' | 'copy' | 'link'
}

export const ButtonWithIcon = ({ icon, children, ...props }: ButtonSmallProps) => {
    return (
        <button css={styles.button} {...props}>
            <div css={styles.label_wrapper}>

                {icon == 'link' && <HiOutlineLink size={18} />}
                {icon == 'heart' ? (
                    <span id="bold">{children}</span>
                ) : (
                    <span>{children}</span>
                )}
            </div>
        </button>
    )
}