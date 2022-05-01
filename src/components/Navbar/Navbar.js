import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import css from 'classnames'

import axios from 'axios'

import {
  Popover,
  Row,
  Col,
  Divider,
  Badge,
  Avatar,
  Modal,
  Tabs,
  Form,
  Input,
  Checkbox,
  Button,
  notification,
} from 'antd'
import { FiUser } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { BiUser } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import logo from '../../picture/logocoffee.png'
import { useNavbarContext } from '../../context/NavbarContext'
import { useCartContext } from '../../context/CartContext'
import { useUserContext } from '../../context/UserContext'

import img17 from '../../picture/img17.jpeg'

export function Navbar() {
  const [loginForm] = Form.useForm()
  const [registerForm] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const location = useLocation()
  const { cartList, setCartList } = useCartContext()
  const { isLogin, login, logout } = useUserContext()

  const { isNavbarOpen, setIsNavbarOpen, isNavbarShowBg, setIsNavbarShowBg } =
    useNavbarContext()

  const showModalAndCloseHamburger = () => {
    setIsNavbarOpen(false)
    showModal()
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const { TabPane } = Tabs

  const handleLogin = async (formValue) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BACKEND + '/login',
        {
          email: formValue.email,
          password: formValue.password,
        }
      )
      notification.success({ message: 'Login success' })
      handleCancel()
      login(data)
    } catch (error) {
      notification.error({ message: 'Login Failed' })
      console.log(error)
    }
  }
  const handleRegister = async (formValue) => {
    try {
      await axios.post(process.env.REACT_APP_BACKEND + '/register', formValue)
      notification.success({ message: 'Create Account success' })
      handleLogin(formValue)
    } catch (error) {
      notification.error({ message: 'Create Account Failed' })
      console.log(error)
    }
  }

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      let prevScrollpos = window.pageYOffset
      let checkScroll = false

      if (isNavbarOpen) {
        window.onscroll = () => {}
        setIsNavbarShowBg(true)
      } else {
        window.onscroll = () => {
          const currentScrollPos = window.pageYOffset
          if (prevScrollpos > currentScrollPos) {
            navbar.style.top = '0'
          } else {
            navbar.style.top = '-70px'
          }
          prevScrollpos = currentScrollPos
          if (currentScrollPos < 70 && !checkScroll) {
            setIsNavbarShowBg(false)
            checkScroll = true
          } else if (currentScrollPos >= 70 && checkScroll) {
            checkScroll = false
            setIsNavbarShowBg(true)
          }
        }
      }
    }
  }, [isNavbarOpen])

  if (location.pathname === '/checkout') return null
  if (location.pathname.includes('/status')) return null

  return (
    <nav
      className={css(styles.navbar, {
        [styles.showBg]: isNavbarShowBg,
      })}
      id="navbar"
    >
      <div className={styles.shopName}>
        <img src={logo} alt="Logocoffee" width={45} />
        <NavLink to="/" className={styles.name}>
          COFFEE SHOP
        </NavLink>
      </div>
      {/* <div className={styles.loginMobile}>
        <li
          className={styles.link}
          // onClick={showModal}
          onClick={showModalAndCloseHamburger}
        >
          <div activeClassName={styles.activeLogin} className={styles.login}>
            LOGIN
          </div>
        </li>
      </div> */}
      <div className={styles.coverUserLoginMobile}>
        {isLogin ? (
          <Popover
            placement="bottomLeft"
            content={
              <div className={styles.profileAndLogout}>
                <Link to="/member" className={styles.profile}>
                  <FiUser style={{ fontSize: '16px', marginRight: '8px' }} />
                  Profile
                </Link>
                <div className={styles.lineInProfileAndLogout} />
                <Link
                  to="/"
                  onClick={() => {
                    logout()
                    setCartList([])
                  }}
                  className={styles.logout}
                >
                  <FiLogOut
                    style={{
                      fontSize: '12px',
                      margin: '-2px 8px 0 -4px',
                    }}
                  />
                  Logout
                </Link>
              </div>
            }
          >
            <div
              // to="/member"
              activeClassName={styles.activeUserLoginMobile}
              className={styles.userLoginMobile}
              // className={styles.navlink}
            >
              <FiUser
                style={{
                  fontSize: '30px',
                  marginBottom: '-1rem',
                }}
              />
            </div>
          </Popover>
        ) : (
          <li
            className={styles.link}
            // onClick={showModal}
            onClick={showModalAndCloseHamburger}
          >
            <div activeClassName={styles.activeLogin} className={styles.login}>
              LOGIN
            </div>
          </li>
        )}
      </div>

      <div className={styles.text}>
        <div className={styles.link}>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            HOME
          </NavLink>
        </div>

        <div className={styles.link}>
          <NavLink
            to="/menu"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            MENU
          </NavLink>
        </div>

        <div className={styles.link}>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            ABOUT
          </NavLink>
        </div>

        <div className={styles.link}>
          <NavLink
            to="/gallery"
            activeClassName={styles.active}
            className={styles.navlink}
          >
            GALLERY
          </NavLink>
        </div>
        <div className={styles.divider} />

        <div className={css(styles.link, styles.cart)}>
          <Popover
            overlayClassName={styles.popover}
            // title={JSON.stringify(cartList)}
            placement="bottomRight"
            content={
              cartList.length > 0 ? (
                <div>
                  {/* <div className={styles.borderTop} /> */}
                  <div className={styles.scroll}>
                    {cartList.map((cart, index) => (
                      <>
                        <Row>
                          <Col span={24}>
                            <Row className={styles.popoverRow1}>
                              {cart.name}
                              <CgClose
                                size={20}
                                onClick={() => {
                                  const filteredList = cartList.filter(
                                    (c) => c.__id !== cart.__id
                                  )
                                  setCartList(filteredList)
                                }}
                              />
                            </Row>
                            <Row className={styles.popoverRow2}>
                              <i className={styles.italic}>
                                <span>Sweet: </span>
                                {cart.sweet}
                              </i>
                              <i>
                                <span>Quantity: </span>
                                {cart.quantity}
                              </i>
                            </Row>
                            <Row className={styles.price}>
                              {cart.price * cart.quantity}
                              <span>&nbsp;Baht</span>
                            </Row>
                            {index != cartList.length - 1 ? (
                              <div className={styles.line} />
                            ) : null}
                          </Col>
                        </Row>
                      </>
                    ))}
                  </div>

                  <div className={styles.line} />

                  <div className={styles.totalPrice}>
                    <i>Total :</i>
                    <div>
                      {cartList.reduce(
                        (sum, cart) => sum + cart.price * cart.quantity,
                        0
                      )}
                      &nbsp;&nbsp;Baht
                    </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.popoverButton}>
                    <NavLink
                      to="/cart"
                      className={styles.button}
                      activeClassName={styles.activeButtonViewCart}
                    >
                      VIEW CART
                    </NavLink>
                    <NavLink
                      to="/AllStatus"
                      className={styles.button}
                      activeClassName={styles.activeButtonViewCart}
                    >
                      VIEW ORDER
                    </NavLink>
                  </div>
                </div>
              ) : (
                <div>
                  No item in the cart.
                  <div className={styles.popoverButton}>
                    <NavLink
                      to="/cart"
                      className={styles.button}
                      activeClassName={styles.activeButtonViewCart}
                    >
                      VIEW CART
                    </NavLink>
                    <NavLink
                      to="/AllStatus"
                      className={styles.button}
                      activeClassName={styles.activeButtonViewCart}
                    >
                      VIEW ORDER
                    </NavLink>
                  </div>
                </div>
              )
            }
            trigger="hover"
            arrowPointAtCenter
          >
            <Badge count={cartList.length} size="small" color="#a1744a">
              <NavLink
                to="/cart"
                activeClassName={styles.active}
                className={styles.navlink}
              >
                <IoCartOutline size={24} />
              </NavLink>
            </Badge>
          </Popover>
        </div>

        {isLogin ? (
          <NavLink
            to="/member"
            activeClassName={styles.active}
            className={styles.navlink}
            style={{ width: '40px' }}
          >
            <FiUser style={{ fontSize: '24px', marginBottom: '-1rem' }} />
          </NavLink>
        ) : (
          // <Popover
          //   placement="bottomLeft"
          //   content={
          //     <div className={styles.profileAndLogout}>
          //       <Link to="/member" className={styles.profile}>
          //         <FiUser style={{ fontSize: '16px', marginRight: '8px' }} />
          //         Profile
          //       </Link>
          //       <div className={styles.lineInProfileAndLogout} />
          //       <Link to="/" onClick={() => logout()} className={styles.logout}>
          //         <FiLogOut
          //           style={{
          //             fontSize: '12px',
          //             margin: '-2px 8px 0 -4px',
          //           }}
          //         />
          //         Logout
          //       </Link>
          //     </div>
          //   }
          // >
          //   <div
          //     // to="/member"
          //     // activeClassName={styles.activeUserLoginMobile}
          //     className={styles.userLogin}
          //     // className={styles.navlink}
          //   >
          //     <FiUser
          //     // style={{
          //     //   fontSize: '24px',
          //     //   marginTop: '1rem',
          //     // }}
          //     />
          //   </div>
          // </Popover>
          <li className={styles.link} onClick={showModal}>
            <div activeClassName={styles.activeLogin} className={styles.login}>
              LOGIN
            </div>
          </li>
        )}
      </div>
      {/* NOTE --------------- hamburger------------------ */}
      <div
        className={css(styles.hamburgerButton, {
          [styles.showX]: isNavbarOpen,
        })}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <div />
        <div />
        <div />
      </div>
      <div
        className={css(styles.menuOverlay, {
          [styles.showNavbar]: isNavbarOpen,
        })}
      >
        <li className={styles.link}>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            HOME
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/menu"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            MENU
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            ABOUT
          </NavLink>
        </li>

        <li className={styles.link}>
          <NavLink
            to="/gallery"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            GALLERY
          </NavLink>
        </li>

        <li className={css(styles.link, styles.cart)}>
          <NavLink
            to="/cart"
            activeClassName={styles.active}
            className={css(styles.navlinkMobile)}
            onClick={() => setIsNavbarOpen(false)}
          >
            CART
            <IoCartOutline size={24} className={styles.cartInOverlay} />
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            to="/AllStatus"
            activeClassName={styles.active}
            className={styles.navlinkMobile}
            onClick={() => setIsNavbarOpen(false)}
          >
            STSTUS
          </NavLink>
        </li>
      </div>

      <Modal
        visible={isModalVisible}
        width={370}
        footer={null}
        closable={false}
        maskClosable={true}
        onCancel={handleCancel}
      >
        <div className={styles.coverLoginModal}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="LOGIN" key="LOGIN">
              <Form form={loginForm} onFinish={(v) => handleLogin(v)}>
                <div className={styles.coverUserNameInput}>
                  <Form.Item
                    name="email"
                    // rules={[
                    //   {
                    //     required: true,
                    //     type: 'email',
                    //     message: 'The input is Invalid E-mail!',
                    //   },
                    // ]}
                  >
                    <Input
                      allowClear
                      placeholder="E-mail"
                      prefix={<BiUser className={styles.iconLogin} />}
                      // bordered={false}
                    />
                  </Form.Item>
                </div>
                <div className={styles.coverPasswordInput}>
                  <Form.Item
                    // noStyle
                    name="password"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: 'please input your password',
                    //   },
                    // ]}
                  >
                    <Input.Password
                      allowClear
                      // className={styles.coverInput}
                      placeholder="Password"
                      prefix={
                        <RiLockPasswordLine className={styles.iconLogin} />
                      }
                      // bordered={false}
                    />
                  </Form.Item>
                </div>

                <Button
                  onClick={loginForm.submit}
                  type="primary"
                  className={styles.loginAndRegisButton}
                >
                  Login
                </Button>
              </Form>
            </TabPane>
            <TabPane tab="REGISTER" key="REGISTER">
              <Form form={registerForm} onFinish={(v) => handleRegister(v)}>
                <div className={styles.coverFnameLastname}>
                  <Form.Item
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: 'please input your First name',
                      },
                    ]}
                  >
                    <Input placeholder="First name" allowClear />
                  </Form.Item>
                  <Form.Item
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: 'please input your Last name',
                      },
                    ]}
                  >
                    <Input placeholder="Last name" allowClear />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="email"
                    // rules={[
                    //   {
                    //     required: true,
                    //     type: 'email',
                    //     message: 'The input is Invalid E-mail!',
                    //   },
                    // ]}
                  >
                    <Input placeholder="E-mail" allowClear />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="phone_no"
                    rules={[
                      {
                        required: true,
                        message: 'please input your Phone number',
                      },
                      {
                        max: 10,
                        message: 'Enter no more than 10 ',
                      },
                    ]}
                  >
                    <Input
                      placeholder="Phone number"
                      type="number"
                      allowClear
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="password"
                    rules={[
                      // {
                      //   required: true,
                      //   message: 'please input your Password',
                      // },
                      // {
                      //   pattern: new RegExp(
                      //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
                      //   ),
                      //   message: 'please input strong password ',
                      // },
                      {
                        /* Note */
                      },
                      // (?=.*\d)          // should contain at least one digit
                      // (?=.*[a-z])       // should contain at least one lower case
                      // (?=.*[A-Z])       // should contain at least one upper case
                      // [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
                    ]}
                  >
                    <Input.Password placeholder="Password" allowClear />
                  </Form.Item>
                </div>
                <Button
                  onClick={registerForm.submit}
                  type="primary"
                  className={styles.loginAndRegisButton}
                >
                  Create Account
                </Button>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </nav>
  )
}
