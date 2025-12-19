import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Home = () => {

  const params = useParams();
  return (
    <div className='h-full w-5/6 px-15 py-7 flex flex-wrap gap-12'>

      <Link to="/details/1" className='relative h-78 w-60 px-5 py-5 border shadow-xl border-black overflow-hidden flex flex-col items-center gap-3'>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          className='h-[77%] w-full bg-cover hover:scale-110 transition-all duration-150'
          alt="product" />
          <div className='w-full flex flex-col px-3 py-1 bg-zinc-100'>
            <h1 className='text-xl font-bold font-[montserrat]'>Product1</h1>
            <h2>RS : 350</h2>
          </div>
      </Link>

    </div>
  )
}

export default Home