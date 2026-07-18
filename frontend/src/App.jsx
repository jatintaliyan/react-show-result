import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import RankingBox from "./Components/RankingBox/RankingBox"
import ResultBox from "./Components/ResultBox/ResultBox"
import ResultList from "./Components/ResultList/ResultList"

function App() {
  return(
    <div className="app">
      <Header/>
      <ResultList/>
      <RankingBox/>
      <Footer/>
    </div>
  )
}

export default App
