import { useState, useEffect } from 'react'
import { CoffeeType } from '../../constants'

import styles from './MenuPage.module.css'
import css from 'classnames'
import { Menu } from '../../components/Menu/Menu'
import { useCartContext } from '../../context/CartContext'

import { CgSearch } from 'react-icons/cg'

import { Select, Input } from 'antd'

import img7 from '../../picture/img7.jpeg'
import img8 from '../../picture/img8.jpeg'
import img9 from '../../picture/img19.jpeg'
import img13 from '../../picture/img13.jpeg'
import img17 from '../../picture/img17.jpeg'
import axios from 'axios'

const { Option } = Select

export function MenuPage() {
  const [menuList, setMenuList] = useState([])
  const [filterMenuList, setFilterMenuList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('recommend')

  const fetchMenus = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_BACKEND + '/menus')
      setMenuList(data)
      setFilterMenuList(data)
    } catch (error) {
      alert('Error')
    }
  }

  const onSearch = () => {
    console.log(menuList)

    const result = menuList
      .filter((menu) => (filterBy ? menu.type === filterBy : true)) //filter type
      .filter((menu) =>
        menu.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        //a-b น้อยไปมาก
        switch (sortBy) {
          case 'recommend':
            return b.is_Recommend - a.is_Recommend
          case 'popular':
            return b.rate - a.rate
          case 'new':
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
          case 'low':
            return a.sale_to - b.sale_to
          case 'high':
            return b.sale_to - a.sale_to
        }
      })
    setFilterMenuList(result)
    console.log(result)
  }

  useEffect(() => {
    onSearch()
  }, [filterBy, sortBy])

  useEffect(() => {
    fetchMenus()
  }, [])

  return (
    <div>
      <div className={styles.coverHeader}>
        <div className={styles.imgHeader}></div>
        <h4 className={styles.textHeader}>MENU</h4>
      </div>
      <div className={styles.bgColor}>
        <div className={styles.container}>
          <div className={styles.coverFunction}>
            <Input
              placeholder="search menu"
              prefix={<CgSearch />}
              className={styles.search}
              // style={{ width: 200 }}
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  onSearch()
                }
              }}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <div className={styles.coverFilterAndSort}>
              <div className={styles.coverInFunction}>
                <span className={styles.text}>Filter by</span>
                <Select
                  className={styles.filterFunction}
                  value={filterBy}
                  onChange={(value) => setFilterBy(value)}
                >
                  <Option value="">All</Option>
                  <Option value={CoffeeType.COFFEE}>Coffee</Option>
                  <Option value={CoffeeType.MILK}>Milk</Option>
                  <Option value={CoffeeType.SODA}>Soda</Option>
                </Select>
              </div>

              <div className={styles.coverInFunction}>
                <span className={styles.text}>Sort by</span>
                <Select
                  className={styles.sortFunction}
                  value={sortBy}
                  onChange={(value) => setSortBy(value)}
                >
                  <Option value="recommend">Recommend</Option>
                  <Option value="low">Price low - high</Option>
                  <Option value="high">Price high - low</Option>
                  <Option value="popular">Popularity</Option>
                  <Option value="new">Newest</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className={styles.menuList}>
            {filterMenuList.map((eachData) => (
              <Menu data={eachData} key={eachData.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
