import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import { CircularProgress, Container, Grid, Pagination } from '@mui/material';

function App() {
  const[products, setProducts] = useState([]);
  const[total, setTotal] = useState(0);
  const[page, setPage] = useState(0);
  const limit = 12;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1)*limit}`);
      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total)
      console.log(data.products);
    };

    fetchData();
  }, [page])
  const handleChange = (_, value)=> {
    setPage(value);
  };
  return (
  <>
    <NavBar />
    <Container sx={{mt:4}}>
    {!products.length?<CircularProgress/>:
    (
    <>
    <Grid container spacing={0}>
      {products.map((product) => (
        <Grid
         item key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    <Pagination 
    count={Math.ceil(total / limit)}
    page={page}
    onChange={handleChange}
    color="primary"
    sx={{ mt: 4, display: 'flex', justifycontent: 'center'}}
    />
    </>
    )
    }
    </Container>
  </>
);

}

export default App;
