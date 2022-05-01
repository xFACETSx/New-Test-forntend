import { useEffect } from 'react'

import styles from './CartPage.module.css'
import css from 'classnames'
import _ from 'lodash'

// import mocha from '../../picture/mocha.jpeg'

import { Link } from 'react-router-dom'

import { Form, InputNumber, Input, Select, Col, Row } from 'antd'
import { CgClose } from 'react-icons/cg'

import { useCartContext } from '../../context/CartContext'
// import { useUserContext } from '../../context/UserContext'

const sweetOptions = [
  { label: '0%', value: 0 },
  { label: '25%', value: 25 },
  { label: '50%', value: 50 },
  { label: '75%', value: 75 },
  { label: '100%', value: 100 },
]

export function CartPage() {
  // const { user, isLogin } = useUserContext()
  const { cartList, setCartList } = useCartContext()
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ cartList })
  }, [cartList])

  return (
    // <div >
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>CART</h4>
      </div>
      <div className={styles.cover}>
        <Form
          form={form}
          onFieldsChange={() => {
            const formValue = form.getFieldsValue()

            const keepTotalPrice = formValue.cartList.map((cart) => ({
              ...cart,
              totalPrice: cart.price * cart.quantity,
            }))
            setCartList(keepTotalPrice)
            form.setFieldsValue({ cartList: keepTotalPrice })
          }}
        >
          {/* <div className={styles.coverTitle}>
            <Row>
              <Col flex={1}>Product</Col>
              <Col flex={1}>Price</Col>
              <Col flex={1}>Quantity</Col>
              <Col flex={1}>Sweet</Col>
              <Col flex={1}>Total</Col>
              <Col flex={1}>Note</Col>
            </Row>
          </div> */}
          <Form.List name="cartList" initialValue={cartList}>
            {(fields, listAction) => (
              <div className={styles.coverMenuList}>
                {/* {JSON.stringify(fields)} */}
                {fields.map(({ name, ...rest }) => (
                  <div className={styles.coverMenu}>
                    <Form.Item
                      name={[name, 'img']}
                      valuePropName={'src'}
                      noStyle
                    >
                      <img className={styles.img} />
                    </Form.Item>

                    <div className={styles.coverMenuDetail}>
                      <div>
                        <div className={styles.detail}>
                          <div className={styles.title}>name: </div>
                          <Form.Item name={[name, 'name']} {...rest} noStyle>
                            <Input
                              bordered={false}
                              style={{ pointerEvents: 'none', width: '100%' }}
                            />
                          </Form.Item>
                        </div>

                        <div className={styles.detail}>
                          <div className={styles.title}>sweet: </div>
                          <div className={styles.sweet}>
                            <Form.Item name={[name, 'sweet']} {...rest} noStyle>
                              <Select
                                options={sweetOptions}
                                style={{ width: '80px' }}
                              />
                            </Form.Item>
                          </div>
                        </div>
                        <div className={styles.detail}>
                          <div className={styles.title}>quantity: </div>
                          <div className={styles.quantity}>
                            <Form.Item
                              name={[name, 'quantity']}
                              {...rest}
                              noStyle
                            >
                              <InputNumber
                                min={1}
                                max={10}
                                style={{ width: '80px' }}
                              />
                            </Form.Item>
                          </div>
                        </div>
                        <div className={styles.detail}>
                          <div className={styles.title}>totalprice: </div>
                          <div className={styles.totalPrice}>
                            <Form.Item
                              name={[name, 'totalPrice']}
                              {...rest}
                              noStyle
                            >
                              <Input
                                bordered={false}
                                style={{ pointerEvents: 'none', width: '60px' }}
                              />
                            </Form.Item>
                            <div className={styles.textBaht}>Baht</div>
                          </div>
                        </div>
                        <div className={css(styles.detail, styles.note)}>
                          <div className={styles.title}>
                            <i>note: </i>{' '}
                          </div>
                          <Form.Item name={[name, 'note']} {...rest} noStyle>
                            <Input bordered={false} />
                          </Form.Item>
                        </div>
                      </div>

                      <CgClose
                        size={20}
                        onClick={() => listAction.remove(name)}
                        className={styles.closeButton}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Form.List>
          {/* <div className={styles.coverCoupon}>
            <div className={styles.coverInputCoupon}>
              <Input placeholder="Coupon Code" style={{ height: '36px' }} />
              <i>* join us for special offer.</i>
            </div>
            <div className={styles.couponButton}>APPLY COUPON</div>
          </div> */}
          {/* <div>{JSON.stringify(cartList)}</div> */}
          <div>
            <div className={styles.textHeaderCartTotal}>CART TOTAL</div>
            <div className={styles.detailCartTotal}>
              <span>
                SUBTOTAL : &nbsp;&nbsp;&nbsp;&nbsp;
                {_.sumBy(cartList, 'totalPrice')}&nbsp;&nbsp;Baht
              </span>
              {/* <span>
                DISCOUNT : &nbsp;&nbsp;&nbsp;
                {_.sumBy(cartList, (c) => c.price - c.sale_to)}&nbsp;&nbsp;Baht
              </span> */}
              <span>
                SHIPPING : &nbsp;&nbsp;&nbsp;&nbsp;{cartList.length ? 20 : 0}
                &nbsp;&nbsp;Baht
              </span>
              <span>
                TOTAL : &nbsp;&nbsp;&nbsp;&nbsp;
                {_.sumBy(cartList, 'totalPrice') + (cartList.length ? 20 : 0)}
                &nbsp;Baht
              </span>
            </div>
          </div>
          {cartList.length ? (
            <div className={styles.coverCheckoutButton}>
              <Link to="/checkout" className={styles.checkoutButton}>
                CHECK OUT
              </Link>
            </div>
          ) : null}
        </Form>
      </div>
      {/* <button onClick={() => console.log(form.getFieldsValue())}>test</button> */}
    </div>
  )
}
