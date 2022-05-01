import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import _ from 'lodash'

import styles from './MenuDetailPage.module.css'
import { Menu } from '../../components/Menu/Menu'
import { CoffeeType } from '../../constants'
import { nanoid } from 'nanoid'

import { useParams } from 'react-router-dom'
import css from 'classnames'
import { useCartContext } from '../../context/CartContext'

import { FiMinus } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'

import moment from 'moment'

import {
  Carousel,
  Divider,
  Rate,
  Avatar,
  InputNumber,
  Form,
  Radio,
  Input,
  Drawer,
  Comment,
} from 'antd'
import { UserOutlined } from '@ant-design/icons'

import img1 from '../../picture/img1.jpeg'
import img2 from '../../picture/img2.jpg'
import img3 from '../../picture/img3.jpeg'
import img4 from '../../picture/img4.jpeg'
import img7 from '../../picture/img7.jpeg'
import img8 from '../../picture/img8.jpeg'
import img9 from '../../picture/img9.jpeg'
import img13 from '../../picture/img13.jpeg'

const dataList = [
  // {
  //   id: 1,
  //   picture: img7,
  //   name: 'Latte',
  //   rate: 3,
  //   price: 50,
  //   salePrice: 40,
  //   review: 20,
  //   type: CoffeeType.COFFEE,
  //   isRecommend: true,
  //   createdAt: '2021-12-14T11:32:40.495Z',
  // },
  // {
  //   id: 2,
  //   picture: img8,
  //   name: 'Cappuccino',
  //   rate: 2,
  //   price: 65,
  //   salePrice: null,
  //   review: 10,
  //   type: CoffeeType.COFFEE,
  //   isRecommend: false,
  //   createdAt: '2021-12-14T11:32:40.495Z',
  // },
  // {
  //   id: 3,
  //   picture: img9,
  //   name: 'Mocha',
  //   rate: 5,
  //   price: 55,
  //   salePrice: 40,
  //   review: 30,
  //   type: CoffeeType.COFFEE,
  //   isRecommend: true,
  //   createdAt: '2021-12-14T11:32:40.495Z',
  // },
  // {
  //   id: 4,
  //   picture: img13,
  //   name: 'Americano',
  //   rate: 4,
  //   price: 55,
  //   salePrice: null,
  //   review: 40,
  //   type: CoffeeType.MILK,
  //   isRecommend: true,
  //   createdAt: '2021-12-14T11:32:40.495Z',
  // },
]

export function MenuDetailPage() {
  const { menu_name } = useParams()
  const [menu, setMenu] = useState({})

  const fetchMenu = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/menus/${menu_name}`
      )
      const imgList = data.map((d) => d.img)
      setMenu({ ...data[0], img: imgList })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMenu()
  }, [])

  // move to next page
  const history = useHistory()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(menu.sale_to)
  const [form] = Form.useForm()

  const { setCartList } = useCartContext()

  const { TextArea } = Input

  const sweet = [
    { label: '0%', value: '0%' },
    { label: '25%', value: '25%' },
    { label: '50%', value: '50%' },
    { label: '75%', value: '75%' },
    { label: '100%', value: '100%' },
  ]

  function handleClose() {
    setIsDrawerOpen(false)
    form.resetFields()
  }

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader} />
        <h4 className={styles.textHeader}>DETAIL</h4>
      </div>
      {/* <div>test {id}</div> */}
      {/* NOTE ยิงไปที่ back เพื่อเอาข้อมูลของ id นั้นๆมาเเสดง */}

      <div className={styles.container}>
        <div className={styles.coverDetail}>
          <div className={styles.carouselContainer}>
            <Carousel autoplay autoplaySpeed={5000} draggable>
              {_.get(menu, 'img', []).map((m) => (
                <div>
                  <img src={m} className={styles.img} />
                </div>
              ))}
              {/* <div>
                <img src={img1} className={styles.img} />
              </div>
              <div>
                <img src={img2} className={styles.img} />
              </div>
              <div>
                <img src={img3} className={styles.img} />
              </div>
              <div>
                <img src={img4} className={styles.img} />
              </div>
              <div>
                <img src={img8} className={styles.img} />
              </div> */}
            </Carousel>
          </div>
          <div className={styles.detail}>
            <span className={styles.name}>{menu.name}</span>
            <div className={styles.coverStars}>
              <div className={styles.rateCustom}>
                <Rate disabled defaultValue={4} className={styles.star} />
              </div>
              <span className={styles.review}>(10 review)</span>
            </div>
            <div className={styles.price}>{menu.sale_to} Baht</div>
            <p className={styles.text}>{menu.description}</p>
            <Divider />
            <div className={styles.coverCountAndAdd}>
              {/* <div className={styles.coverCount}>
                <FiMinus size={20} />
                <div className={styles.count}>
                  <span>1</span>
                </div>
                <FiPlus size={20} />
              </div> */}
              <div className={styles.button}>
                <div className={styles.iconCart}>
                  <IoCartOutline />
                </div>
                <span
                  className={styles.textButton}
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsDrawerOpen(true)
                  }}
                >
                  ADD TO CART
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <Divider />
        </div>
        <div className={styles.coverReview}>
          <div className={styles.coverHeadText}>
            <span>Review</span>
          </div>
          <div className={styles.inReview}>
            <div className={styles.containerUserReview}>
              <Comment
                author={<a>Han Solo</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                }
                content={
                  <p className={styles.commentText}>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                  </p>
                }
                datetime={
                  moment().format('YYYY-MM-DD HH:mm:ss')
                  // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  //   <span>{moment().fromNow()}</span>
                  // </Tooltip>
                }
              />
            </div>
            <Divider />
          </div>
          <div className={styles.coverHeadText}>
            <span>RECOMMEND MENU</span>
          </div>
          <div className={styles.coverMenuList}>
            <div className={styles.menuList}>
              {dataList.map((eachData) => (
                <Menu data={eachData} key={eachData.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        visible={isDrawerOpen}
        closable={false}
        className={styles.drawerSweet}
        maskClosable={false}
        keyboard={false}
      >
        <Form
          onFieldsChange={() => {
            setTotalPrice(menu.sale_to * form.getFieldsValue().quantity)
          }}
          form={form}
          onFinish={(value) => {
            setCartList((oldCartList) => [
              ...oldCartList,
              { ...menu, ...value, totalPrice, __id: nanoid(10) },
            ])
            handleClose()
            console.log(value)
          }}
        >
          <div
            className={styles.closeButton}
            onClick={() => {
              handleClose()
            }}
          >
            <CgClose size={20} />
          </div>

          <div className={styles.titleDrawer}>{menu.name}</div>
          <div className={styles.sweet}>
            <div className={styles.header}>Sweet</div>

            <Form.Item
              name="sweet"
              rules={[{ required: true, message: 'please select Sweet' }]}
            >
              <Radio.Group
                options={sweet}
                // onChange={this.onChange4}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
          </div>
          <div className={styles.line} />
          <div className={styles.coverQuantityPrice}>
            <div className={styles.coverInQuanPri}>
              <div className={styles.inputNumberText}>Quantity</div>

              <Form.Item name="quantity" initialValue={1} noStyle>
                <InputNumber min={1} max={20} style={{ width: '70px' }} />
              </Form.Item>
            </div>

            <div className={styles.coverInQuanPri}>
              <div className={styles.inputNumberText}>Price</div>
              <div className={styles.countPrice}>
                {totalPrice}
                <div>฿</div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.header}>Note</div>
            <Form.Item name="note">
              <TextArea showCount maxLength={100} style={{ height: 120 }} />
            </Form.Item>
          </div>

          <div
            onClick={() => {
              form.submit()
            }}
            className={styles.addToCartButtonDrawer}
          >
            ADD TO CART
          </div>
        </Form>
      </Drawer>
    </div>
  )
}
