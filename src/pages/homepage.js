 import React from 'react'
 import Hero from '../components/Hero'
 import Banner from '../components/banner'
 import cop from '../Img/cop.jpg'
 import cops from '../Img/cop5.jpg'
 import copp from '../Img/cop3.jpg'
  import Stand from '../components/stand'
  import Tip from '../components/tip'
  import Reward from '../components/reward'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
 import Services from '../components/Services'
 import Why from '../components/why'
 import Vevo from '../components/vevo'
 import Pay from '../components/pay'
import Header from '../components/header'
import {BrowserRouter as Router, Route, Link, Swtich} from 'react-router-dom'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
// import axios from 'axios'
import '../index.css';

let styles = { 
  backgroundImage: `url(${cop})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 800,
  marginTop: -100
  
}
let tit ="Are you in debt?"



export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      counselors: [],
      currentCount: 2,
      icon:<FaHiking/>
    }
  }
  timer() {
    
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount == 1){
      styles = { 
        backgroundImage: `url(${cops})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 800,
        marginTop: -100
      }
      tit="Are you umeployed"
      }
    else if(this.state.currentCount == 0){
      styles = { 
        backgroundImage: `url(${copp})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 800,
        marginTop: -100
      }
      tit = "Do you have a low credit score?"
    }
    else{
      this.setState({
        currentCount: 2
      })
      styles = { 
        backgroundImage: `url(${cop})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 800,
        marginTop: -80
      }
      tit = "Are you in Debt"
    }
  }
 
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3500);
  }
  componentWillUnmount(){
   // clearInterval(this.intervalId);
  }

    render(){
       

      return(
        
        <>
        <Navbar />
        <Hero hero={styles}>
        <Banner title={tit} 
                subtitle="Take Action Now"
                click="Click on apply to qualify for a grant!!!" >
          <Link to="/application" className="btn-primaryyy" >
            Apply
          </Link>
        </Banner>
        </Hero><br/><br/>
        <div classname='yok'>
          <nav className='yoro'>
              <nav className='goo'>
                <nav className='gira'>

                </nav>
              </nav>
              <h2 className='hiss'>
                  What we stand for !!! <br/><br/>
                  <h6>
                    Honesty and Intengrity
              </h6>
              </h2>
              
              <nav className='den'>
                  <h2 className='duro'>Our Missions !!!</h2>
                  <ul className='amy'>
                    <li>Poverty</li>
                    <li>Anti-Homeless</li>
                    <li>College Debts</li>
                    <li>Umeployment</li>
                    <li>Hunger</li>
                  </ul>
             </nav>
              
          </nav>
          
        </div><br/><br/><vbr/>
       <Services/>
       <div className='divide'></div>
       <Why/>
       <Stand/>
       <Reward/><br/><br/><b/>
       <Vevo/>
       <div className='ety'>
         <br/><br/>
       <p>
         <h2> 98k &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 36 </h2>
        <h3>REQUEST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;STATES</h3>
      </p> 
      <br/><br/><br/>
       <p>
         <h2> 8k &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20 </h2>
        <h3>WINNERS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;PENDING</h3>
      </p>
       </div>
       <Tip/>
        <Footer/>
        </>
        
        
      )
    }
  
}


