import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../Img/dos.JPG'
import Tip from '../components/tip'
import Footer from '../components/footer'

export default class Testimony extends React.Component{

    state={ 
    
        services:[
           {
               speech: 'Thank you so much WHR i still can’t believe this is happening to me',
               name: 'Lossie Donovan',
               tt: '04 Oct 2019',
               logo: `${logo}`
           } ,
           {
            speech: 'I am very grateful for the support of the Federal Government Grant through Dr. Miller John which has helped fund two years of my business research',
            name: 'Mrs Kathryn',
            tt: '23 Oct 2019',
            logo: `${logo}`
        } ,
        {
            speech: 'Without funding from the home care grant, my college degree would not have been possible. God bless you guys',
            name: 'Kattie G Moore',
            tt: '15 Nov 2019',
            logo: `${logo}`
        },
        {
            speech: 'Thank you home care grant and thank you USA ,God bless America…',
            name: 'Devon Richardson',
            tt: '14 Nov 2019',
            logo: `${logo}`
        } ,
        {
            speech: 'Thank you so much WHR i still can’t believe this is happening to me',
            name: 'Vanessa Palter',
            tt: '30 Nov 2019',
            logo: `${logo}`
        },
        {
            speech: 'I am very grateful for the great opportunity the Federal Goverment Grant offered me.',
            name: 'Uma R. Phatak',
            tt: '30 Nov 2019',
            logo: `${logo}`
        },
        {
            speech: 'I still cant believe i got the grant money. How come this isnt allover the US. I really appreciate you guys',
            name: 'John Halls',
            tt: '30 Nov 2019',
            logo: `${logo}`
        },
        {
            speech: 'WHR GRANTS USA has allowed me to integrate my work into a sustainability science framework and to participate in Future Earth’s Knowledge-Actions Networks.',
            name: 'DenverFish',
            tt: '20 Dec 2019',
            logo: `${logo}`
        },
        {
            speech: 'Gail, A one year anniversary is approaching that somewhat changed my life and I wanted to thank you and your Founders for helping me win.',
            name: 'Evlyn Wrights',
            tt: '05 Dec 2019',
            logo: `${logo}`
        },
        {
            speech: 'Thank God for you, because you are truly a miracle worker. Thanks to you I am almost half a million dollars richer from the business grant',
            name: 'Sterlin Curtis',
            tt: '07 Dec 2019',
            logo: `${logo}`
        },
        {
            speech: 'I just knew when I got your email that this was it. I got $65,000.00. I am deeply appreciative to WHR GRANTS USA. I am convinced that it was all planned by God Almighty.',
            name: 'Bob Smith',
            tt: '18 Aug 2019',
            logo: `${logo}`
        },
        {
            speech: 'God Bless Home care grant,The money I got from this scheme changed my life.',
            name: 'Debby R',
            tt: '09 July 2019',
            logo: `${logo}`
        },
        {
            speech: 'I am speechless and amazed that I got the money, thank you so much home care grant.',
            name: 'Combs d',
            tt: '27 Dec 2019',
            logo: `${logo}`
        },
        {
            speech: 'You guys are doing good job.',
            name: 'Mary spoon',
            tt: '06 Jan 2020',
            logo: `${logo}`
        },
        {
            speech: 'You guys are changing life, my life has changed ever since i was awarded the grant.',
            name: 'Alicia stones',
            tt: '19 Jan 2020',
            logo: `${logo}`
        },
        {
            speech: 'Thank you so much home care grant, i was able to pay off all my bills with the money.',
            name: 'Taylor',
            tt: '11 Jan 2020',
            logo: `${logo}`
        },
        {
            speech: 'I was able to pay off my college debts with the help of home care grant, thank you so much home care grant.',
            name: 'Timothy',
            tt: '19 Feb 2020',
            logo: `${logo}`
        },
    ]
  }

    render(){
     
        return(
            <>
            <Navbar /><br/><br/><br/><br/><br/><br/><br/>
            <h1 style={{color:'gray', textAlign: 'center'}}>TESTIMONIES</h1><br/><br/><br/>
            <section className='servers'>
                <div className='servers-center'>
                
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='servers'>
            
                            <h3>{item.speech} </h3>
                           <p> <img src={item.logo} /> {item.name} </p>
                            <p>{item.tt} </p> 
                            
                        </article>
                    })}
                </div>
                    
            </section>
            <Tip/>
            <Footer/>
            </>
        )
    }
}
