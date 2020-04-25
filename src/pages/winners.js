import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../Img/dos.JPG'
import Tip from '../components/tip'
import {Link} from 'react-router-dom'
import Footer from '../components/footer'

export default class Winners extends React.Component{

    state={ 
    
        services:[
           {
               speech: 'DELIVERED',
               name: 'Lossie Donovan',
               
               logo: `${logo}`
           } ,
           {
            speech: 'DELIVERED',
            name: 'Mrs Kathryn',
           
            logo: `${logo}`
        } ,
        {
            speech: 'DELIVERED',
            name: 'Kattie G Moore',
      
            logo: `${logo}`
        },
        {
            speech:'DELIVERED',
            name: 'Devon Richardson',
            
            logo: `${logo}`
        } ,
        {
            speech:'DELIVERED',
            name: 'Vanessa Palter',
            
            logo: `${logo}`
        },
        {
            speech:'DELIVERED',
            name: 'Uma R. Phatak',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'John Halls',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Denver Fish',
           
            logo: `${logo}`
        },
        {
            speech:'DELIVERED',
            name: 'Evlyn Wrights',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Sterlin Curtis',
           
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Bob Smith',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Debby Ruby',
    
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Combs Daniel',
           
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Mary spoon',
           
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Alicia stones',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Taylor Mills',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Timothy Jackson',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Taye Dwayne',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Susan Yale',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Williams Shaun',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Rodrick Shark',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Serena Danny',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Hannah Bush',
            
            logo: `${logo}`
        },
        {
            speech: 'DELIVERED',
            name: 'Carter Ben',
            
            logo: `${logo}`
        },
    ]
  }

    render(){
     
        return(
            <>
            <Navbar /><br/><br/><br/><br/><br/><br/><br/>
            <p style={{color:'gray', fontSize:35, fontWeight:'bold', textAlign: 'center'}}>APPROVED APPLICANT</p><br/><br/><br/><br/>
            <section className='servers'>
                
                <div className='servers-center'>
                
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='servers'>
                            <h3>{item.name} </h3>
                            <p> <img src={item.logo} style={{width: 130, height:130}} /> </p>
                            
                            <h4>{item.speech} </h4>
                         
                    </article>
                    })}
                </div>
                    
            </section><br/><br/><br/>
            <div style={{textAlign: 'center',color: 'rgb(16, 16, 124)'}}>
                <h1>YOU TOO CAN BE APPLY </h1><br/><br/>

                <h4 style={{textAlign: 'center', fontWeight:'bold', fontSize: 23,color: 'rgb(16, 16, 124)'}}>
                    APPLY NOW<br/><br/><br/>
                    <div className='faar'>
                <Link to="/application" className="btn-primary" >
                  Apply
                 </Link>
                 </div> 
                    </h4>
               
            </div><br/><br/><br/>
            <Tip/>
            <Footer/>
            </>
        )
    }
}
