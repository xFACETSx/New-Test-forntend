import styles from './AboutPage.module.css'
import css from 'classnames'

import { Divider } from 'antd'

import { FiFacebook } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'

import imgProfile from '../../picture/imgprofile.jpeg'
import imgShop from '../../picture/img2.jpg'

export function AboutPage() {
  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>ABOUT US</h4>
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.topBox}>
            <img src={imgProfile} className={styles.imgProfile} />
            <div className={styles.topBoxContainer}>
              <div className={styles.coverHeadText}>
                <span className={styles.headText}>MR. Nicole Fitzgerald</span>
              </div>
              <div className={styles.coverParagraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas id ligula at lacus suscipit lacinia. Aliquam commodo
                  orci sed bibendum rutrum. Ut magna magna, efficitur at gravida
                  non, scelerisque in ante. Maecenas volutpat orci erat, sed
                  rutrum ex consequat at. Integer mattis, diam nec egestas
                  commodo, felis ipsum varius est, et sollicitudin purus sapien
                  ac enim.
                </p>
              </div>
              <div className={styles.coverCaption}>
                <span>Coffee knows how to heal my loneliness.</span>
              </div>
              <div className={styles.coverParagraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className={styles.contactContainer}>
                {/* <FiFacebook className={styles.icon} />
                <FiInstagram className={styles.icon} /> */}
                <FiMail className={styles.icon} />
                <span className={styles.textInContact}>
                  Coffeeshop@gmail.com
                </span>
                <FiPhone className={styles.icon} />
                <span className={styles.textInContact}>123-456-7890</span>
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles.bottomBox}>
            <div className={styles.bottomBoxContainer}>
              <div className={styles.coverHeadTextOurShop}>
                <span className={styles.headText}>OUR SHOP</span>
              </div>
              <div className={styles.coverParagraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <img src={imgShop} className={styles.imgShop} />
          </div>
        </div>
      </div>
    </div>
  )
}
