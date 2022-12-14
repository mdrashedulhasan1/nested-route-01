import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetail></PostDetail>} />
        </Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/country/:countryName" element={<CountryDetail></CountryDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
