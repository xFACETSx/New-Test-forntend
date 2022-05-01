import { useEffect } from 'react'

import styles from './MemberPage.module.css'
import css from 'classnames'
import _ from 'lodash'

import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Form, Tabs, Input, Avatar, Row, Col, Divider } from 'antd'
import { FaRegUserCircle } from 'react-icons/fa'

import { useUserContext } from '../../context/UserContext'
import { useCartContext } from '../../context/CartContext'

export function MemberPage() {
  const { user, logout } = useUserContext()
  const { setCartList } = useCartContext()
  const [form] = Form.useForm()

  const { TabPane } = Tabs

  useEffect(() => {
    form.setFieldsValue(user)
  }, [user])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>Member</h4>
      </div>
      <div className={styles.cover}>
        <Form form={form}>
          <Tabs defaultActiveKey="1" type="line" size={'large'}>
            <TabPane tab="Account Setting" key="Account Setting">
              <div className={styles.coverLogOut}>
                <Link
                  to="/"
                  onClick={() => {
                    logout()
                    setCartList([])
                  }}
                  className={styles.buttonLogout}
                >
                  <div className={styles.iconLogout}>
                    <FiLogOut />
                  </div>
                  logout
                </Link>
              </div>
              <div className={styles.profile}>
                <div className={styles.coverBlockProfile}>
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                    size={100}
                  />
                  {/* <Link
                    to="/"
                    onClick={() => {
                      logout()
                      setCartList([])
                    }}
                  >
                    logout
                  </Link> */}
                </div>
                <div className={styles.coverProfileDetail}>
                  <Form.Item name="firstname" label="First name">
                    <Input />
                  </Form.Item>
                  <Form.Item name="lastname" label="Last name">
                    <Input />
                  </Form.Item>
                  <Form.Item name="email" label="E-mail">
                    <Input />
                  </Form.Item>
                  <Form.Item name="phone_no" label="Phone number">
                    <Input />
                  </Form.Item>
                </div>
              </div>
            </TabPane>
            // NOTE - mapAddress
            <TabPane tab="Address" key="Address">
              <div className={styles.address}>
                <Row style={{ width: '100%' }}>
                  <Col span={12}>
                    <Row justify="start">First name</Row>
                  </Col>
                  <Col span={12} style={{ marginTop: '-2px ' }}>
                    <Row justify="start">
                      <Form.Item name="firstname" noStyle>
                        <Input
                          bordered={false}
                          style={{ pointerEvents: 'none' }}
                        />
                      </Form.Item>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ width: '100%' }}>
                  <Col span={12}>
                    <Row justify="start">Last name</Row>
                  </Col>
                  <Col span={12} style={{ marginTop: '-2px ' }}>
                    <Row justify="start">
                      <Form.Item name="lastname" noStyle>
                        <Input
                          bordered={false}
                          style={{ pointerEvents: 'none' }}
                        />
                      </Form.Item>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ width: '100%' }}>
                  <Col span={12}>
                    <Row justify="start">Phone number</Row>
                  </Col>
                  <Col span={12} style={{ marginTop: '-2px ' }}>
                    <Row justify="start">
                      <Form.Item name="phone_no" noStyle>
                        <Input
                          bordered={false}
                          style={{ pointerEvents: 'none' }}
                        />
                      </Form.Item>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ width: '100%' }}>
                  <Col span={12}>
                    <Row justify="start">Address</Row>
                  </Col>
                  <Col span={12} style={{ marginTop: '-2px ' }}>
                    <Row justify="start">
                      <Form.Item name="address" noStyle>
                        <Input
                          bordered={false}
                          style={{ pointerEvents: 'none' }}
                        />
                      </Form.Item>
                    </Row>
                  </Col>
                </Row>
                <Divider />
              </div>
            </TabPane>
            <TabPane tab="Billing" key="Billing">
              test4
            </TabPane>
          </Tabs>
        </Form>
      </div>
    </div>
  )
}
