import Search from '../Components/Search'
import Card from '../Components/Card';
import Layout from '../Views/Layout';
import { useState } from 'react';
import axios, { BASE_URL } from "./api"
import Pagination from './pagination';

const Home = () => {

  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  const [pages, setPages] = useState(0)

  const handleSearch = (page) => {
    axios.get(`${BASE_URL}s=${query}&page=${page}`).then((resp) => {
      setData(resp.data.Search)
      setPages(Math.ceil(+resp.data.totalResults / 10));
    })
  }

  return (
    <div className="App"><br />
      <Layout>

        <div className="row">
        <Search
          query={query}
          setQuery={setQuery}
          handleSearch={() => handleSearch(1)}

        />
        </div>

          {
             data ? 
            <div className="row ">
            {
              data.map((item) => {
  
                return <div className='col-3 mt-4'>
                  <Card {...item} />
  
                </div>
  
              })
            }
          </div>
          :
          <h1 className='mt-5'>No Match Found</h1> 
          }
        <div className='mt-4 right-pagination'>
          {pages > 0 &&
            <Pagination pages={pages} setPage={handleSearch} />}
        </div>

      </Layout>

    </div>
  );
}

export default Home;
