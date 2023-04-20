import { styles } from "@/styles/components/Buttons/ButtonIconRound.styles"
import { HiOutlineChevronLeft, HiOutlineDotsHorizontal } from "react-icons/hi"

type ButtonIconRoundProps = {
    icon:'back'|'menu'
}

export const ButtonIconRound = ({icon,...props}: ButtonIconRoundProps) => {
    return(
        <button css={styles.button}>
            {icon == 'back' && <HiOutlineChevronLeft size={24}/>}
            {icon == 'menu' && <HiOutlineDotsHorizontal size={24}/>}
        </button>
    )
}