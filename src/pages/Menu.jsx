// import React from 'react'
// import { Link } from 'react-router-dom';
// import StartOrder from '../components/StartOrder';
import '../css/Menu.css';
import MenuLists from '../components/MenuLists';
// import IntBurgerFest from '../components/Menu-Category-Items/IntBurgerFest';
import searchIcon from '../assets/searchIcon.svg';
import threeLines from '../assets/Stripes_Small_OffersIcon.svg';
import { useRef } from 'react';
import CategorySection from '../components/Menu-Category-Items/CategorySection';
// import StartOrderPopUp from '../components/StartOrderPopUp';
// import { Link } from 'react-router-dom';

// import { useRef } from 'react';
// eslint-disable-next-line react/prop-types
const Menu = ({startOrder,handleModal}) => {
  // const intBurgerRef = useRef <HTMLDivElement | null>(null);
  // const {section1,section2,section3,section4,section5,section6,section7,section8,section9,section10,section11} = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
  const section8 = useRef();
  const section9 = useRef();
  const section10 = useRef();
  const section11 = useRef();
  // console.log(handleModal);

  const Lists = [
    {id:'section1', list : 'international burger fest', section: section1},
    {id:'section2', list : 'match day combos', section: section2},
    {id:'section3', list : 'value lunch specials', section: section3},
    {id:'section4', list : 'box meals', section: section4},
    {id:'section5', list : 'burgers', section: section5},
    {id:'section6', list : 'chicken buckets', section: section6},
    {id:'section7', list : 'rice bowlz', section: section7},
    {id:'section8', list : 'value snackers', section: section8},
    {id:'section9', list : 'chicken rolls', section: section9},
    {id:'section10', list : 'snacks', section: section10},
    {id:'section11', list : 'beverages', section: section11}
  ];
  
  return (
    <>
        {/* {
            startOrder ? <StartOrderPopUp handleClick = {handleClick}/> : ''
        } */}
      <div className="menu">
        
        
        <div className="leftSide">
          <div className="verticalLines">
            <img src={threeLines} alt="-three-vertical-lines" />
          </div>
          <div className="heading">
            <span>KFC Menu</span>
          </div>
          <div className="lists">
            {Lists.map((List) => (
                <MenuLists className="list" section={List.section}  id={List.id} list={List.list} key={List.list}/>
            ))}
          </div>
        </div>
        <div className="rightSide">
          <div className="searchBar">
                <img src={searchIcon} alt="search" />
                <input type="text" placeholder='Search our menu'/>
          </div>
          <div style={{height:'5px',width:'55vw',marginTop:'1vh',marginBottom:'5vh', borderBottom: '2px solid #494949'}}></div>
          {/* <div className="categories">
            <section ref={section1} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>1</section>
            <section ref={section2} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>2</section>
            <section ref={section3} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>3</section>
            <section ref={section4} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>4</section>
            <section ref={section5} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>5</section>
            <section ref={section6} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>6</section>
            <section ref={section7} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>7</section>
            <section ref={section8} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>8</section>
            <section ref={section9} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>9</section>
            <section ref={section10} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>10</section>
            <section ref={section11} style={{height:'10vh', width:'100%',marginBottom:'2vh',backgroundColor:`${getRandomColor()}`}}>11</section>
          </div> */}
          {/* <IntBurgerFest/> */}
          <div className="sections">
            <div className="section">
              {
                Lists.map((list)=>
                  <CategorySection startOrder={startOrder} handleModal={handleModal} section={list.section} title={list.list} key={list.id} id={list.id}/>
                )
              }
            
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Menu

// KFC Menu
// INTERNATIONAL BURGER FEST
// MATCH DAY COMBOS
// VALUE LUNCH SPECIALS
// BOX MEALS
// BURGERS
// CHICKEN BUCKETS
// RICE BOWLZ
// VALUE SNACKERS
// CHICKEN ROLLS
// SNACKS
// BEVERAGES

// style={{color:'#494949', width:'100%', height:'5vh',textAlign:'left',lineHeight:'5vh'}}