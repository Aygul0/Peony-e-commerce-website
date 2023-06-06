import './App.css';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Blog from './components/Blog/Blog'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs';
import BestSellers from './components/BestSellers/BestSellers';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Cart from './components/Cart/Cart';
import Favorite from './components/Favorite/Favorite';
import Checkout from './components/Checkout/Checkout';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import ScrollToTop from './components/ScrollToTop';
import Discount from './components/Discount/Discount';
import NavBlog from './components/NavBlog/NavBlog';
import Information from './components/Information/Information';
export const Globalcontext = createContext()








function App() {
  const [page, setPage] = useState({ start: 0, finish: 4 })
  const [categorycheck, setcategorycheck] = useState("allitems")
  const [select, setSelect] = useState(null)
  const [featurepage, setFeaturepage] = useState({ start: 4, finish: 8 })
  const [quantity, setQuantity] = useState(1)
  const [constant, setConstant] = useState([])
  const [main, setMain] = useState(null)
  const [products, setProducts] = useState(null)
  const [productsId, setProductsId] = useState([])
  const [favorite,setFavorite]=useState([])
  const [Searchbar, setSearchbar] = useState(false)
  const [SearchbarAnimation, setSearchbarAnimation] = useState("open")
  const[blogs,setBlogs]=useState(null)
  const [cardcount, setCartcount] = useState(constant.filter(item => item.count > 0).reduce((total) =>  total = total + 1 , 0 ))






  const getinfo = async () => {
    let res = await axios.get("http://localhost:1337/products")
    let resp = await axios.get("http://localhost:1337/blogs")
    setMain(res.data)
    setProducts(res.data)
    setConstant(res.data)
    setBlogs(resp.data)

  }


  useEffect(() => {
    getinfo()
  }, [])

  // const basket = (id) => {

  //   products && products.map((num) => {
    
  //     if (num.id === id) {
  //       if (num.count) { num.count++
  //         console.log(num.count);      
  //        }
  //       else {

  //         num.count = 1
  //         setProductsId(productsId.concat(num))
  //         // console.log(productsId);

  //       }
  //     }
  //   })
  //   setCart(constant.filter(item => item.count > 0))
  //   setCartcount(constant.filter(item => item.count > 0).reduce((total) =>  total = total + 1 , 0 ))
  // }
  
  const basket = (id) => {
    products && products.map((number) => {
       if (number.id === id) {
         if (number.count && number.count<99) { number.count++ }
         else if (number.count==99){}
         else {
           number.count = 1
         }
       }
       setProductsId(constant.filter(item => item.count > 0))
       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
       console.log(productsId);
     })
   }
   const basketminus = (id) => {
    products && products.map((number) => {
       if (number.id === id) {
         if (number.count>1) { number.count--}
       }
       setProductsId(constant.filter(item => item.count > 0))
       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
     })
   }
   const basketremove = (id) => {
    products && products.map((number) => {
      if (number.id === id) {
        number.count = false
      }
      setProductsId(constant.filter(item => item.count > 0))
      setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
    })
  }
  function changesort(e) {
    setSelect(e)
    window.scrollTo(0,0)
  }
   const pageChange = (e) => {
    var first = page.start
    var second = page.finish
    console.log(e.target.className)
    if (e.target.className == "fa-solid fa-chevron-left") {
      console.log(first)
      if (first == 0) {
      }
      else if(second==products.length) { setPage({ start: first - 4, finish:first }) }
      else { setPage({ start: first - 4, finish: second - 4 }) }
    }
    else if (e.target.className == "fa-solid fa-chevron-right") {
      if (second + 4 < products.length) {
        setPage({ start: first + 4, finish: second + 4 })
      }
      else if (first + 4 >= products.length) { }
      else if (second + 4 >= products.length) {
        setPage({ start: first + 4, finish: products.length })
      }
    }
   console.log(page);
  }
  function changelist(e) {
    setProducts(e.concat("nese"))
    setTimeout(()=>{
      setProducts(e)
    },10)
  }
  const catalogchange = (e) => {
    SearchbarClose()
    var arr = []
    constant && constant.map((number) => {
      console.log(e.target.id)
      if (e.target.id !== "all" ){
        if (number.category == e.target.id) { arr.push(number); console.log(e.target.id);}
      }
    })
    setcategorycheck(e.target.id)
    if (select==="AtoZ"){changelist(arr.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1))}
     else if (select==="ZtoA"){changelist(arr.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? -1 : 1))}
    else  if (select==="low"){changelist(arr.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1))}
    else if (select==="high"){changelist(arr.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1));}
    else {changelist(arr)};
    // setlist(arr)
    // changelist(arr)
    setMain(arr)
    // if (8 <= arr.length || e.target.id == "all") { setPage({ start: 0, finish: 8 }) }
    // else if (8 > arr.length) { setPage({ start: 0, finish: arr.length }) }
    if (e.target.id == "allitems" || e.target.id == "") {
      console.log(e.target.id)
      // changelist(constant)
      setMain(constant);
      if (select==="AtoZ"){changelist(constant.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1))}
      else if (select==="ZtoA"){changelist(constant.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? -1 : 1))}
      else if (select==="low"){changelist(constant.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1))}
      else if (select==="high"){changelist(constant.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1));}
      else {changelist(constant)};
    }
    window.scrollTo(0,0)
  }
  const pageFeatureChange = (e) => {
    var first = featurepage.start
    var second = featurepage.finish
    console.log(e.target.className)
    if (e.target.className == "fa-solid fa-chevron-left") {
      console.log(first)
      if (first == 0) {
      }
      else if(second==products.length) { setFeaturepage({ start: first - 4, finish:first }) }
      else { setFeaturepage({ start: first - 4, finish: second - 4 }) }
    }
    else if (e.target.className == "fa-solid fa-chevron-right") {
      if (second + 4 < products.length) {
        setFeaturepage({ start: first + 4, finish: second + 4 })
      }
      else if (first + 4 >= products.length) { }
      else if (second + 4 >= products.length) {
        setFeaturepage({ start: first + 4, finish: products.length })
      }
    }
   console.log(page);
  }

  
  const favoritebutton = (id) => {
    main && main.map((number) => {    
      if (number.id === id) {
        if (number.fave) {
          number.fave = false
        }
        else {
          number.fave = true
        }
      }
      setFavorite(constant.filter(item => item.fave == true))
    })
  }
  function inputvalue(e) {
    console.log(e.target.value)
    var arr = []
    main && main.map((number) => {
      var tester = number.caption
      if (tester.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
        arr.push(number)
      }
      else {
        setProducts([])
      }
    })
    setProducts(arr)
    if (e.target.value === "") { setProducts(main) }
 
  }
  const SearchbarOpen = () => {
    setSearchbar(true)
    setSearchbarAnimation("open")
  }
  const SearchbarClose = () => {
    setSearchbarAnimation("close")
    setTimeout(function () { setSearchbar(false) }
      , 700
    )
  }
  const quantitychange = (e) => {
    if (e.target.value>99 ){}
    else {setQuantity(e.target.value) }
   }
   const basketproductchange = (id) => {
    main && main.map((number) => {
       if (number.id === id) {
         number.count=quantity
       }
       setProductsId(constant.filter(item => item.count > 0))
       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
     })
     setQuantity(1)
   }
  

 


  return (
    <Globalcontext.Provider value={{products,blogs,main,basket,productsId,favorite,favoritebutton,cardcount,SearchbarOpen,SearchbarClose,Searchbar,SearchbarAnimation,inputvalue,basketminus,quantity,quantitychange,
    basketproductchange,page,pageChange,basketremove,pageFeatureChange,featurepage,catalogchange,changelist,changesort}}>
    <BrowserRouter>
      <div className='container' >
        <Navigation />
        <ScrollToTop/>

        <Switch>
        <Route path='/' exact>
            <Home />
            <BestSellers/>
            <FeaturedProducts/>
            <Blog/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/home'>
            <Home />
            <BestSellers/>
            <FeaturedProducts/>
            <Blog/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/shop' exact>
            <Shop />
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/navblog' exact>
           <NavBlog/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/aboutus'>
            <AboutUs/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/contactus'>
            <ContactUs />
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/cart'>
            <Cart/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/favorite'>
            <Favorite/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/navblog/:id'>
            <Information/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/shop/:id'>
            <Product/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/login'>
            <Login/>
            <Discount/>
            <Footer/>
          </Route>
        </Switch>

        

      </div>
    </BrowserRouter>
    </Globalcontext.Provider>
  );
}

export default App;
