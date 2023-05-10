import {TabDaysWithTriplink} from "@/components/Tabs";
import {styles} from "@/styles/pages/triplink/triplate.styles";
import {Container} from "@/components/Containers";
import {HiDotsVertical, HiOutlineTag} from "react-icons/hi";
import Image from "next/image";
import {background} from "@storybook/theming";
import { ButtonWithIcon } from "@/components/Buttons";

const Triplate = () => {
    const _triplinks = [
        {day: 1, name: 'aaa'},
        {day: 2, name: 'bbb'},
        {day: 3, name: 'ccc'},
        {day: 4, name: 'ddd'},
        {day: 5, name: 'eee'},
        {day: 6, name: 'fff'},
        {day: 7, name: 'ggg'},
        {day: 8, name: 'hhh'},
        {day: 9, name: 'iii'},
        {day: 10, name: 'jjj'}
    ]
    return (
        <>
            <Container bgColor={'white'} isFull>
                {/*TODO: ヘッダー的な*/}
                <div css={styles.headWrapper}>
                    <div>
                        <div css={styles.textHead}>タイトル</div>
                        <div css={styles.textSub}>サブタイトル</div>
                    </div>
                    <button css={styles.menuButton}>
                        <HiDotsVertical size={24}/>
                    </button>

                </div>
                {/*TODO: タブ*/}
                <TabDaysWithTriplink triplinks={_triplinks}/>
                {/*TODO:　TripLinkのサムネイル*/}
                <Image alt="thumbnail_image" css={styles.thumbnail} src={'/images/thumbnail_sample.jpg'} width={329}
                       height={329}/>
                <div css={styles.tag}>
                    <HiOutlineTag size={20}/>
                    <p>タグ</p>
                </div>
                <div css={styles.description}>説明DESCRIPTION</div>
                <div css={styles.linkButton}>
                    {/*TODO:　アイコン付きボタン*/}
                    <ButtonWithIcon icon={'link'}>Google Map</ButtonWithIcon>
                    <ButtonWithIcon icon={'link'}>Instagram</ButtonWithIcon>
                </div>
                {/*TODO:　TripLinks*/}
            </Container>

        </>
    )
}
export default Triplate
