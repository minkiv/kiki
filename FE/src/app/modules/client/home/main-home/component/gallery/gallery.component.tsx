import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperGalleryList from '~/app/component/stack/swiper-list/swiper-gallery-list.component'

interface GalleryProps {
    props?: any
}

const Gallery: FunctionComponent<GalleryProps> = () => {
    const arrayImage = [

        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
        'https://pubcdn.ivymoda.com/files/news/2023/09/13/ae127ae6fac3c5963f1a20b0459833af.jpg',
    ]
    return (
        <div className='mt-4'>
            <h3 className='text-center font-semibold text-[38px] pb-6'>GALLERY</h3>
            <SwiperGalleryList >
                {arrayImage?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img css={cssImg} src={item} alt='' className='w-full h-full rou' />
                    </SwiperSlide>
                ))}
            </SwiperGalleryList>
        </div>
    )
}

export default Gallery

const cssImg = css`
width:246px;
height:246px;
`

