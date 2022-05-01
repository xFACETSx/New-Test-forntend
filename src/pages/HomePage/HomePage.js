import styles from './HomePage.module.css'
import css from 'classnames'
import { Carousel } from 'antd'

import img1 from '../../picture/img1.jpeg'
import img2 from '../../picture/img2.jpg'
import img3 from '../../picture/img3.jpeg'
import img4 from '../../picture/img4.jpeg'
import img8 from '../../picture/img8.jpeg'
import img12 from '../../picture/img12.jpeg'
import img13 from '../../picture/img13.jpeg'
import img14 from '../../picture/img14.jpeg'
import img16 from '../../picture/img16.jpeg'
import img17 from '../../picture/img17.jpeg'

import { SiBuymeacoffee } from 'react-icons/si'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { useNavbarContext } from '../../context/NavbarContext'

export function HomePage() {
  const { isNavbarOpen } = useNavbarContext()
  return (
    <div>
      {!isNavbarOpen && (
        <Carousel autoplay autoplaySpeed={5000} draggable>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img1} className={styles.img1} />
              <div className={styles.textIncarousel}>
                <h3>WELCOME TO OUR SHOP</h3>
                <p>
                  Praesent consectetur consectetur arcu, consectetur cursus nisi
                  blandit sit amet. Integer condimentum urna sed justo gravida
                  maximus. Morbi feugiat ex eget tortor tempus accumsan.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img2} className={styles.img2} />
              <div className={styles.textIncarousel}>
                <h3>IT'S JUST BEFORE THE COFFEE SHOP</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img3} className={styles.img3} />
              <div className={styles.textIncarousel}>
                <h3>AMAZING TASTE & BEAUTIFUL PLACE</h3>
                <p>
                  The placeholder text, beginning with the line “Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit”. looks like Latin
                  because in its youth, centuries ago, it was Latin.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <div className={styles.coverTextIncarousel}>
              <img src={img4} className={styles.img4} />
              <div className={styles.textIncarousel}>
                <h3>ELITE COFFEE BRANDS</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      )}

      <div className={styles.part2}>
        <div>OUR PRODUCT</div>
        <div className={styles.coverBox}>
          <div className={styles.leftBox}>
            <h4>Coffee</h4>
            <p className={styles.textInBox}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <SiBuymeacoffee size={200} className={styles.ourProductIcon} />
          <div className={styles.rightBox}>
            <h4>Soda</h4>
            <p className={styles.textInBox}>
              Praesent consectetur consectetur arcu, consectetur cursus nisi
              blandit sit amet.
            </p>
            <br />
            <h4>Milk</h4>
            <p className={styles.textInBox}>
              The placeholder text, beginning with the line “Lorem ipsum dolor
              sit amet, consectetur adipiscing elit”.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.part3}>
        <h4 className={styles.headP3}>SIGNATURE MENU</h4>
        <div className={styles.containerImg}>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Latte">
              <img src={img8} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Cappuccino">
              <img src={img12} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Americano">
              <img src={img13} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Espresso">
              <img src={img14} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Mocha">
              <img src={img16} className={styles.img} />
            </div>
          </div>
          <div className={styles.coverImg}>
            <div className={styles.imgBox1} title="Long Black ">
              <img src={img17} className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.coverCarouselMobile}>
          {!isNavbarOpen && (
            <Carousel autoplaySpeed={5000} draggable arrows>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Latte">
                  <img src={img8} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Cappuccino">
                  <img src={img12} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Americano">
                  <img src={img13} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Espresso">
                  <img src={img14} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Mocha">
                  <img src={img16} className={styles.imgMoboile} />
                </div>
              </div>
              <div className={styles.coverImgMobile}>
                <div className={styles.imgBox1} title="Long Black ">
                  <img src={img17} className={styles.imgMoboile} />
                </div>
              </div>
            </Carousel>
          )}
        </div>
      </div>

      <div className={styles.coverCarousel}>
        {!isNavbarOpen && (
          <Carousel autoplay autoplaySpeed={5000} draggable>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>Life happen, coffee helps.</h4>
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>Coffee knows how to heal my loneliness.</h4>
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>The road to success is pabed in Coffee.</h4>
              </div>
            </div>
            <div className={styles.caption}>
              <div className={styles.textCaption}>
                <RiDoubleQuotesR className={styles.imgCaption} />
                <h4>Coffee is like a hug in a mug.</h4>
              </div>
            </div>
          </Carousel>
        )}
      </div>
    </div>
  )
}
