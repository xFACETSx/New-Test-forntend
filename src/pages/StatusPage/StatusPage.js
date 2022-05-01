import styles from './StatusPage.module.css'
import { Fragment, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import _ from 'lodash'
import axios from 'axios'

import mocha from '../../picture/mocha.jpeg'

import { Form, Steps, Input, Divider, Row, Col } from 'antd'
import { FaHome } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

export function StatusPage() {
  const [cartList, setCartList] = useState([])
  const [orderId, setOrderId] = useState()
  const [orderStatus, setOrderStatus] = useState()

  const [form] = Form.useForm()

  const { Step } = Steps

  const history = useHistory()
  const { order_id } = useParams()

  const fetchOrder = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_BACKEND + `/order/${order_id}`
      )
      console.log(data)
      setCartList(data[0].menu_array)
      setOrderId(data[0].id)
      setOrderStatus(data[0].status)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchOrder()
  }, [])

  return (
    <div style={{ minHeight: '69vh' }}>
      <div className={styles.coverHeader}>
        <div className={styles.coverArrowBack}>
          <FaHome
            className={styles.arrowBack}
            onClick={() => {
              history.push('/AllStatus')
            }}
          />
        </div>
        <div className={styles.textHeader}>STATUS </div>
      </div>
      <div className={styles.cover}>
        <Form form={form}>
          <div className={styles.step}>
            <Steps size="small" current={orderStatus - 1}>
              <Step title="Order Placed" />
              <Step title="Processing" />
              <Step title="Shipping" />
              <Step title="deliverd" />
            </Steps>
          </div>

          <div className={styles.dividerMobile} />
          {/* <Divider
            className={styles.divider}
            style={{ borderWidth: 1, borderColor: '#e0e0e0' }}
          /> */}
          <div className={styles.coverRow1}>
            <div className={styles.totalPrice}>
              <div>Purchased Items {_.sumBy(cartList, 'quantity')}</div>
              <div className={styles.price}>
                {_.sumBy(cartList, (c) => parseFloat(c.sale_to) * c.quantity)}
                &nbsp;&nbsp; Baht
              </div>
            </div>
            <div className={styles.orderIDAndDetail}>
              <div className={styles.orderID}>order # {orderId}</div>
              {/* <div className={styles.drawerDetail}>Detail</div> */}
            </div>
          </div>
          <div className={styles.coverMenuList}>
            {cartList.map((cart, index) => (
              <Fragment key={index}>
                <div className={styles.menuCard}>
                  <img src={cart.img} className={styles.img} />
                  <div className={styles.menuDetail}>
                    <Col>
                      <Row>
                        <Col>
                          {cart.name}
                          &nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;
                        </Col>
                        <Col>{cart.quantity}</Col>
                      </Row>
                      {/* <Row className={styles.sweet}>
                        <Col>sweet&nbsp;&nbsp;</Col>
                        <Col>{cart.sweet}</Col>
                      </Row> */}
                      <Row className={styles.priceMenuList}>
                        <Col>
                          {parseFloat(cart.sale_to) * cart.quantity}&nbsp;&nbsp;
                        </Col>
                        <Col>Baht</Col>
                      </Row>
                      <Row className={styles.note}>
                        <Col>
                          <i>note: &nbsp;</i>
                        </Col>
                        <Col>{cart.note === 'null' ? '-' : cart.note}</Col>
                        {/* <Col>ไม่เอาหลอด ใช้นมอัลมอล</Col> */}
                      </Row>
                    </Col>
                    {/* <Row>
                      <Col className={styles.product}>
                        <Row>
                          <div className={styles.name}>
                            {cart.name}&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                          x&nbsp;&nbsp;&nbsp;&nbsp;
                          {cart.quantity}
                        </Row>
                      </Col>
                      <Col className={styles.subTotal}>
                        {cart.totalPrice}&nbsp; Baht
                      </Col>
                    </Row>
                    <Row className={styles.sweet}>sweet&nbsp;{cart.sweet}%</Row>
                    <Row>
                      <div className={styles.note}>Note:</div> &nbsp;&nbsp;
                      {cart.note}
                    </Row> */}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className={styles.reviewButton}></div>
        </Form>
      </div>
    </div>
  )
}
