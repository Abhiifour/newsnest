import React from 'react'
import News from '../News-box/News';
import './Wrapper.scss';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Wrapper() {
  const[dataSet,setData] = useState([]);
  const[category,setCategory] = useState('SPORTS')
  
  const cat = useSelector((state)=>state?.categorySlice?.category)
  

  const fetchInfo = () => { 
    return fetch('https://linesnews.onrender.com/api/news-datas') 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
  const fetchCatInfo = () => { 
      return fetch(`https://linesnews.onrender.com/api/news-datas?category=${category}`) 
              .then((res) => res.json()) 
              .then((d) => setData(d)) 
      }
      
  const news = dataSet.data;
  const filteredData = news?.filter((item) => item?.attributes?.category=== `${category}`)
  console.log(filteredData)

 


    useEffect(() => {
      
      setCategory(cat)
      
      if(category ===''){
        fetchInfo();
      }
      else{
        fetchCatInfo();
      }
     
    },[cat])
    
   
  return (
   <div className="Wrapper">

    { category?
      filteredData?.map((item)=>(
        <News headline={item?.attributes?.headline} source={item?.attributes?.newsSource} icon={item?.attributes?.newsIcon} hashtags={item?.attributes?.hashtags}/>
      ))
      :news?.map((item)=>(
        <News headline={item?.attributes?.headline} source={item?.attributes?.newsSource} icon={item?.attributes?.newsIcon} hashtags={item?.attributes?.hashtags}/>
      ))
    }
   </div>
  )
}

export default Wrapper