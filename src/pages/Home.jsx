import AboutHome from '../components/Home/AboutHome'
import Categories from '../components/Home/Categories'
import GallerySlider from '../components/Home/GallerySlider'
import HeroSlider from '../components/Home/HeroSlider'
import Projects from '../components/Home/Projects'

const Home = () => {
  return (
    <>
    <HeroSlider/>
    <Categories/>
    <AboutHome/>
    <Projects/>
    <GallerySlider/>
    </>
  )
}

export default Home