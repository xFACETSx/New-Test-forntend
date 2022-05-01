import { Image } from 'antd'

import styles from './GalleryPage.module.css'
import css from 'classnames'
import img1 from '../../picture/img1.jpeg'
import img2 from '../../picture/img2.jpg'
import img3 from '../../picture/img3.jpeg'
import img4 from '../../picture/img4.jpeg'
import img5 from '../../picture/img5.jpeg'
import img6 from '../../picture/img6.jpeg'
import img8 from '../../picture/img8.jpeg'
import img9 from '../../picture/img9.jpeg'
import img10 from '../../picture/img10.jpeg'
import img11 from '../../picture/img11.jpeg'
import img12 from '../../picture/img12.jpeg'
import img13 from '../../picture/img13.jpeg'
import img14 from '../../picture/img14.jpeg'
import img15 from '../../picture/img15.jpeg'

export function GalleryPage() {
  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>GALLERY</h4>
      </div>
      <div className={styles.body}>
        <div className={styles.galleryContainer}>
          <div className={styles.gallery}>
            <Image src={img1} />
            <Image src={img2} />
            <Image src={img3} />
            <Image src={img4} />
            <Image src={img5} />
            <Image src={img6} />
            <Image src={img8} />
            <Image src={img9} />
            <Image src={img10} />
            <Image src={img11} />
            <Image src={img12} />
            <Image src={img13} />
            <Image src={img14} />
            <Image src={img15} />
          </div>
        </div>
      </div>
    </div>
  )
}
