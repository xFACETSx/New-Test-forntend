import styles from './Footer.module.css'
import css from 'classnames'

import { FiMail } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

export function Footer() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgCover} /> */}
      <div className={styles.footerContainer}>
        <div className={styles.openHour}>
          <div className={styles.header}>OPENING HOURS</div>
          <div className={styles.inOpenHour}>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>MONDAY</span>
              <div className={styles.lineHorizon} />
              <span className={styles.time}>06:00-20:00</span>
            </div>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>TUESDAY</span>
              <div className={styles.lineHorizon} />
              <span className={styles.time}>06:00-20:00</span>
            </div>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>WEDNESDAY</span>
              <div className={styles.lineHorizon} />
              <span className={styles.time}>06:00-20:00</span>
            </div>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>THURSDAY</span>
              <div className={styles.lineHorizon} />
              <span className={styles.time}>06:00-20:00</span>
            </div>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>FRIDAY</span>
              <div className={styles.lineHorizon} />
              <span className={styles.time}>06:00-20:00</span>
            </div>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>SATURDAY</span>
              <div className={styles.lineHorizon} />
              <span className={styles.time}>06:00-20:00</span>
            </div>
            <div className={styles.coverInOpenHour}>
              <span className={styles.textInOpenHour}>SUNDAY</span>
              <div className={styles.lineHorizon} />
              <span className={css(styles.time, styles.close)}>CLOSE</span>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.header}>CONTACT US</div>
          <div className={styles.inContact}>
            <div className={styles.coverInContact}>
              <FiMail className={styles.icon} />
              <span className={styles.detail}>Coffeeshop@gmail.com</span>
            </div>
            <div className={styles.coverInContact}>
              <FiPhone className={styles.icon} />
              <span className={styles.detail}>123-456-7890</span>
            </div>
            <div className={styles.coverInContact}>
              <FiInstagram className={styles.icon} />
              <span className={styles.detail}>CoffeeShop</span>
            </div>
            <div className={styles.coverInContact}>
              <FiFacebook className={styles.icon} />
              <span className={styles.detail}>CoffeeShop</span>
            </div>
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.header}>SHOP LOCATION</div>
          <div className={styles.coverInLocation}>
            <div className={styles.coverInLocation}>
              <GoLocation className={styles.iconLocation} />
              <span>1 Chalong Krung 1 Alley, Lat Krabang, Bangkok 10520</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
