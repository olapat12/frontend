import React from 'react'
import Title from '../components/Title'
import off from '../Img/off.jpg'
import mm from '../Img/m2.jpg'
import fam from '../Img/fam.jpg'
import stud from '../Img/stud.jpg'
import sick from '../Img/sick.jpeg'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends React.Component{

    state={ 
    
        services:[
     {
         icon:'Capital',
        img: `${off}`,
        info:'Business Grants If you are thinking of starting or expanding a business, this is it. '
    },
    {
        icon:'College Grants',
        img:`${stud}`,
        info:'Access Educational Grants and Financial Aid You can. '
    },
    {
        icon: 'Health Issues',
        img:`${sick}`,
        info:'Do you have any health issue? you can apply for a grant now '
    },
    {
        icon:'Home Care',
        img: `${mm}`,
        info:'If you are in need, out of work, working part time and income doesn’t cover basic needs, apply now. '
    },
   
    ]
  }

    render(){
     
        return(
            <section className='services'>
                <Title title='Who can apply ?' />
                <div className='services-center'>
                
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
            
                           <h3>{item.icon} </h3>
                           <p> <img src={item.img} /> </p>
                            <p>{item.info} </p>
                            
                        </article>
                    })}
                </div>
                    
            </section>
        )
    }
}
