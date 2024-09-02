/* eslint-disable react/prop-types */
// import React from 'react'
import Poster from '../assets/web_1440x396px.webp';
import '../css/Home.css';
import Card from '../components/Card';
import CHKZINGER from '../assets/offerImages/CHKZINGER.jpg';
import ADDCHK99 from '../assets/offerImages/ADDCHK99.jpg';
import BigSave from '../assets/offerImages/BIGSAVE.jpg';
import PHP75 from '../assets/offerImages/PHP75.jpg';
import VEGZINGER from '../assets/offerImages/VEGZINGER.jpg';
import FREEROLL from '../assets/offerImages/FREEROLL.jpg';
import intBurgerFest from '../assets/int_burger_fest_CAT289.jpg';
import matchDayCombos from '../assets/match_day_combos.jpg';
import valueLunch from '../assets/value_lunch_specials.jpg';
import boxMeals from '../assets/box_meals.jpg';
import burgers from '../assets/burgers.jpg';
import chickenBuckets from '../assets/chicken_buckets.jpg';
import riceBowlz from '../assets/rice_bowlz.jpg';
import fingerLickin from '../assets/finger_lickin_good.svg';
// import arrow from '../assets/less-than-symbol.png';
import { Link } from 'react-router-dom';
import OfferCard from '../components/OfferCard';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    const categoryAPI = [
        {
            img: intBurgerFest,
            title: "international burger fest"
        },
        {
            img: matchDayCombos,
            title: "match day combos"
        },
        {
            img: valueLunch,
            title: "value lunch specials"
        },
        {
            img: boxMeals,
            title: "box Meals"
        },
        {
            img: burgers,
            title: "burgers"
        },
        {
            img: chickenBuckets,
            title: "chicken buckets"
        },
        {
            img: riceBowlz,
            title: "rice bowlz"
        },
        {
            img: fingerLickin,
            title: "view more"
        }
    ];
    const offerAPI = [
        {
            img: CHKZINGER,
            title: 'Free Chicken...',
            desc: '1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.',
        },
        {
            img: ADDCHK99,
            title: 'Add 2 Pc Hot N...',
            desc: 'Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.',
        },
        {
            img: BigSave,
            title: 'Upto Rs 100 O...',
            desc: 'Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user.',
        },
        {
            img: PHP75,
            title: 'Get flat Rs.75 Of...',
            desc: 'Get flat Rs.75 off on a cart value of Rs.599 or above',
        },
        {
            img: VEGZINGER,
            title: '1 Pc free Veg...',
            desc: '1 Pc free Veg Zinger on a cart value of Rs.499 or above on first order. Only for registered users',
        },
        {
            img: FREEROLL,
            title: 'Free Double...',
            desc: 'Free Double chicken roll on a cart value of 999 or above.',
        },
    ]
    return (
        <>
            <div className="home">
                {/* <StartOrder handleModal = {handleModal} /> */}
                <div className="poster">
                    <img src={Poster} alt="poster" />
                </div>
                <div className="browseCategories">
                    <div className="browseCategoriesHeading">
                        <h2>BROWSE CATEGORIES</h2>
                        <span></span>
                    </div>
                    <div className="browseCategoryCards">
                        {
                            categoryAPI.map((category) =>
                                <Link to={`/menu/${category.title}`} key={category.title}>
                                    <Card img={category.img} title={category.title} key={category.title} />
                                </Link>

                            )
                        }

                    </div>
                </div>
                <div className="offerContainer">
                    <div className="verticalLines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="offerHeading">
                        <span>Exclusive Offers for you</span>
                        <Link to={'/'} style={{ color: '#fff' }}>View All Deals <span>→</span></Link>
                    </div>
                    <div className="offerCards">
                        {/* <div className="leftButton">
                            <button><img src={arrow} alt="arrow" /></button>
                        </div> */}
                        <div className="card">
                            <Slider {...settings}>
                            {
                                offerAPI.map((offer) =>
                                    <Link to={`/menu/${offer.title}`} key={offer.title}>
                                        <OfferCard  img={offer.img} title={offer.title} desc={offer.desc} />
                                    </Link>
                                )
                            }
                            </Slider>
                            
                        </div>
                        {/* <div className="rightButton">
                            <button><img src={arrow} alt="arrow" /></button>
                        </div> */}


                    </div>
                </div>

            </div>
        </>
    )
}

export default Home