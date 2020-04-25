import React from 'react'
import call from '../Img/call.jpg'
import mail from '../Img/mail.jpg'
import addd from '../Img/add.png'
import Navbar from '../components/Navbar'
import Tip from '../components/tip'
import Footer from '../components/footer'

export default class Contact extends React.Component{

    state={ 
    
        services:[
     {
         img: `${mail}`,
         info: 'Support',
         tit: 'homecaregrant01@gmail.com'
        
    },
    {
        img: `${call}`,
        info: 'Phone',
        tit: '+1(917) 936-0739'
       
   },
   {
    img: `${addd}`,
    info: 'Address',
    tit: 'California, United States Of America'
   
}
    ]
  }

    render(){
      
        return(
            <>
            <Navbar/><br/><br/><br/><br/><br/><br/><br/>
            <p style={{color:'gray', fontSize:20, textAlign: 'center'}}>Contact Us</p><br/>
            <section className='servicess'>
                
                <div className='services-centers'>
                
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
                            <p> <img src={item.img} style={{width: 80, height:80}} /> </p>
                            <h3>{item.info} </h3>
                            <p>{item.tit} </p>
                         
                    </article>
                    })}
                </div>
                    
            </section>
            <div className='okk'><br/><br/>
                <h1>
                    <p style={{color: 'white'}}>
                        <img src={call} style={{width: 80, height:80}} />
                        CALL/TEXT US TODAY +1(917) 936-0739 
                    </p>
                </h1>
            </div>
            <Tip/>
            <Footer/>
            </>
        )
    }
}
