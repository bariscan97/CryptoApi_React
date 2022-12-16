import React,{useEffect,useState} from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'



import './Coins.css'

const Coins = (props) => {
    const [query,Setquery]=useState("")
    
    const[isload,setisload]=useState(false)
    const[newdata,Setnewdata]=useState([])
    
    
    
    useEffect(()=>{
        let arr=[]
      
        for (let i=0;i<props.coins.length;i++){
                if(props.coins[i].id.includes(query.trim())){
                    arr.push(props.coins[i])
                    setisload(true)
                }
            }
            
        Setnewdata(arr)
        
            
    },[query])
    


   
    
    


    return (
        <div className='container'>
        <Link to='/'>
            <div className='navbarCont'>
            <div className='navbar'>
                <img src='https://cdn-icons-png.flaticon.com/512/169/169519.png' />
                <h1> Coin <span className='purple'>Search</span></h1>
            </div>
            <form className='Form'>
                <input onChange={(e)=> Setquery(e.target.value.trim())} type="text"  placeholder="search"/>
                <button type="reset"><i className="fas fa-search"></i></button>
            </form>
            </div>
        </Link>
            
            
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {isload ? newdata.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })
                :
                props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })
            
            
            
            }

            </div>
        </div>
    )
}

export default Coins