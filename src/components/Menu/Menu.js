import styles from './Menu.module.css'
import { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { Rate, Drawer, Radio, Form, InputNumber, Input } from 'antd'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { useCartContext } from '../../context/CartContext'
// import { GrCart } from 'react-icons/gr'
// import { CgShoppingCart } from 'react-icons/cg'

import img17 from '../../picture/img17.jpeg'

export function Menu({ data }) {
  // move to next page
  const history = useHistory()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(data.sale_to)
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
    <>
      <div
        className={styles.container}
        onClick={() => history.push(`/menu/${data.name}`)}
      >
        <div>
          {/* <img src={data.img} className={styles.img} /> */}
          <img src={data.img} className={styles.img} />
        </div>
        {data.sale_to !== data.price && <div className={styles.sale}>sale</div>}

        <div className={styles.coverDetail}>
          <div className={styles.coverPriceAndName}>
            <span className={styles.name}>
              {data.name}
              {console.log(data)}
            </span>
            {/* <div className={styles.rateCustom}>
              <Rate disabled defaultValue={data.star} className={styles.star} />
            </div> */}

            {data.sale_to !== data.price ? (
              <div className={styles.coverPriceSaleTo}>
                <span className={styles.priceSaleTo}>
                  {data.price}&nbsp;Baht
                </span>
                <span className={styles.price}>{data.sale_to}&nbsp;Baht</span>
              </div>
            ) : (
              <span className={styles.price}>{data.price}&nbsp;Baht</span>
            )}
          </div>
          <div
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation()
              setIsDrawerOpen(true)
            }}
          >
            <div className={styles.icon}>
              <IoCartOutline />
            </div>
            <span className={styles.textButton}>ADD TO CART</span>
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
        {/* {console.log(
          form.getFieldsValue().quantity,
          data.price,
          data.price * form.getFieldsValue().quantity
        )} */}

        <Form
          onFieldsChange={() => {
            setTotalPrice(data.sale_to * form.getFieldsValue().quantity)
          }}
          form={form}
          onFinish={(value) => {
            setCartList((oldCartList) => [
              ...oldCartList,
              { ...data, ...value, totalPrice, __id: nanoid(10) },
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

          <div className={styles.titleDrawer}>{data.name}</div>
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
    </>
  )
}
