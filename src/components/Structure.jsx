import Nav1 from './Nav1'
import Nav2 from './Nav2'
import Home from './Home'
import Footer from '../../pages/Footer'

const Structure = () => {
    return (
        <div className='min-h-screen w-full flex flex-col'>
            <div className='h-full w-full flex'>
                <Nav2 />
                <Home />
            </div>
            <Footer/>
        </div>
    )
}

export default Structure