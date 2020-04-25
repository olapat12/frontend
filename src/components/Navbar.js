import React from 'react'
import logo from '../Img/dos.JPG'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import call from '../Img/call.jpg'

class Navbar extends React.Component{

    state={
        isOpen: false,
        user: undefined,
        isLoadig: true,
        check: true
    }

    

    handleToggle = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
   

    render(){
       
        return(
            <div className='navbar'>
                <h4 className='tye'>
                <img src={call} style={{width: 60, height:60, borderRadius: 17}} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   +1(917) 936-0739 
                </h4>
                 <div className='faars'><br/>
                <Link to="/application" className="btn-primary" >
                  Apply
                 </Link>
                 </div>
                <div className='nav-center'>
               
                    <div className='nav-header'>
                    
                        <Link to='/homecaregrant'>
                            <img  src={logo} alt='Beach Resort' style={{width: 150, height:150, marginTop: -18}} />
                        </Link>
                        <button type='submit' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to='/homecaregrant'>Home</Link>
                        </li>
                        <li>
                            <Link to='/application'>Apply For Grant</Link>
                        </li>
                        <li>
                            <Link to='/approved'>Winners List</Link>
                        </li>
                        <li>
                            <Link to='/testimony'>Testimony</Link>
                        </li>
                       
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
   
}
}

export default Navbar