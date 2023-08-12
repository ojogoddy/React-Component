import Myname from "./components/Myname"
import Header from "./components/header"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Searchlocation from "./components/searchLocation"
import Sharethis from "./components/sharethis"
import Key2 from "./components/key2"
import Testimonytext from "./components/testimonytext"
import Discover from "./components/discover"
import Topmusic from "./components/topmusic"
import Reply from "./components/reply"
import Bookauthor from "./components/booksale"
import Tutorcard from "./components/tutorcard"
import Frequent from "./components/frequent"




const App = () => {
  return (
    <div className="App">
      <Myname/>
      <Header/>
      <Hero/>
      <Searchlocation/>
      <Key2/>
      <Bookauthor/>
      <Sharethis/>
      <Testimonytext/>
      <Frequent/>
      <Discover/>
      <Tutorcard/>
      <Reply/>
      <Topmusic/>
      <Footer/>
      
    </div>
  )
}

export default App