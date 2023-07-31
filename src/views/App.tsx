import './App.scss'
import Header from '../components/header/header'
import ImageGallery from '../components/imageGallery/imageGallery'
import ProductDetails from '../components/productDetails/productDetails'
import { productProps } from '../helpers/enums'

function App() {

  return (
    <>
      <Header />
      <main className='app-main-section'>
        <ImageGallery images={productProps.images}/>
        <ProductDetails product={productProps} />
      </main>
    </>
  )
}

export default App


/* //* App Content

  0
  Add to cart
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>

*/