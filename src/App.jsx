import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import './Font.css'
import { Routes, Route } from 'react-router-dom'

// 페이지 주입
import AppLayout from './layout/AppLayout'
import HomePage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


// 웹 사이트 구성
// 홈페이지 : /
// 영화 전체 보여주는 페이지 (서치) : /movies
// 영화 디테일 페이지 : /movies/:id
// 추천 영화 페이지 : /movies/:id/recommandation
// 리뷰 페이지 : /movies/:id/reviews
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/> {/* index : 부모의 path를 사용할때 쓰는 속성 => 홈페이지의 path는 '/'가 됨 */}
          <Route path="movies"> {/* 동일 path는 하위에 subRoute를 둠으로써 중복코드 줄일 수 있음  */}
            <Route index element={<MoviePage/>}/>
            <Route path=":id" element={<MovieDetailPage/>}/> 
          </Route> 
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
        {/* <Route path="/admin" element={<AdminLAyout/>}/>이런식으로 화면 별 nav바 다르게 하기 위해 실제로는 이렇게 사용 */}
      </Routes>
    </div>
  )
}

export default App
