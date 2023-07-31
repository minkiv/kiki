import React, { FunctionComponent } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { css } from '@emotion/react';

interface DemoCarouselProps {}

const PreviewImg: FunctionComponent<DemoCarouselProps> = () => {
  const images = [
    { src: "https://salt.tikicdn.com/cache/750x750/ts/product/72/5e/2a/06e8f3acccd645f0c8b6f385d74ad441.jpg.webp", alt: "Image 1" },
    { src: "https://salt.tikicdn.com/cache/750x750/ts/product/5f/6a/31/3b52d012b7bb84c948e3f9d36ba9d2a1.jpg.webp", alt: "Image 2" },
    { src: "https://salt.tikicdn.com/cache/750x750/ts/product/61/38/4e/a712d1669503c3c5a98ebc846fe50e86.jpg.webp", alt: "Image 3" },
    { src: "https://salt.tikicdn.com/cache/750x750/ts/product/31/2b/59/a3175d2e9e890509481a3835504dcdde.jpg.webp", alt: "Image 4" },
    { src: "https://salt.tikicdn.com/cache/750x750/ts/product/d4/9b/3d/7ebcd09eb8372a18c8dacddb6d8ae736.jpg.webp", alt: "Image 5" },
    { src: "https://salt.tikicdn.com/cache/750x750/ts/product/63/d2/3d/af68c9cacabbdc31e5046efcdf2caccd.jpg.webp", alt: "Image 6" },
  ];

  const onClickItem = () => {};

  return (
    <div css={cssPreviewImg}>
      <Carousel
        autoPlay={true}
        onClickItem={onClickItem}
        showThumbs={true}
        showArrows={false}
        swipeable={true}
      >
        {images.map((item, index) => (
          <div key={index} className="img">
            <img className='imgchildren' src={item.src} alt={item.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PreviewImg;

const cssPreviewImg = css`
  .img {
    text-align: center;
    width: 90%;
    height: 90%;
  }
  .imgchildren{
    width: 100%;
  }
  
  .carousel-root {
    width: 100%;
  }
  .carousel .slider-wrapper {
    overflow: hidden;
  }
  .carousel .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
