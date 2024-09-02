// import React from 'react'
import '../../css/CategorySection.css'
import CategoryItem from './CategoryItem';
import img1 from '../../assets/int-burger-fest/01.jpg';
import img2 from '../../assets/int-burger-fest/02.jpg';
import img3 from '../../assets/int-burger-fest/03.jpg';
import img4 from '../../assets/int-burger-fest/04.jpg';
import img5 from '../../assets/int-burger-fest/05.jpg';
import img6 from '../../assets/int-burger-fest/06.jpg';
import img7 from '../../assets/int-burger-fest/07.jpg';
import img8 from '../../assets/int-burger-fest/08.jpg';
import img9 from '../../assets/int-burger-fest/09.jpg';
import img10 from '../../assets/int-burger-fest/10.jpg';
import img11 from '../../assets/int-burger-fest/11.jpg';

// import section1 from './Api';

// eslint-disable-next-line react/prop-types
const CategorySection = ({ section, title, startOrder, handleModal }) => {
    const section1 = [
        {
            id: '1',
            img: img1,
            title: 'Caribbean Spicy Zinger Burger',
            category: 'Non veg',
            price: '219.05',
            desc: 'Relish the Caribbean spicy zinger',
            handleModal: handleModal
        },
        {
            id: '2',
            img: img2,
            title: 'Caribbean Spicy Zinger Burger & Chicken Meal',
            category: 'Non veg',
            price: '379.05',
            desc: 'New Caribbean Spicy Zinger Burger with 1 Pc Hot & Crispy and Pepsi PET 475ml at a deal price',
            handleModal: handleModal
        },
        {
            id: '3',
            img: img3,
            title: 'Caribbean Spicy Zinger Burger & Popcorn Meal',
            category: 'Non veg',
            price: '439.05',
            desc: 'Caribbean Spicy Zinger Burger with Medium Popcorn and Pepsi PET 475ml at a deal price',
            handleModal: handleModal
        },
        {
            id: '4',
            img: img4,
            title: 'Mexican Zinger Pro Burger',
            category: 'Non veg',
            price: '239.05',
            desc: 'Premium burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion',
            handleModal: handleModal
        },
        {
            id: '5',
            img: img5,
            title: 'Mexican Zinger Pro Burger & Chicken Meal',
            category: 'Non veg',
            price: '399.05',
            desc: 'New Zinger Pro burger with 1 Hot & Crispy chicken & Pepsi 475ml at a deal price',
            handleModal: handleModal
        },
        {
            id: '6',
            img: img6,
            title: 'Mexican Zinger Pro Burger & Popcorn Meal',
            category: 'Non veg',
            price: '459.05',
            desc: 'New Zinger Pro burger with Medium Popcorn & Pepsi 475ml at a deal price',
            handleModal: handleModal
        },
        {
            id: '7',
            img: img7,
            title: 'American Classic Zinger',
            category: 'Non veg',
            price: '199.05',
            desc: 'Relish the KFC Classic Zinger-lettuce, mayo & Zinger patty filled between',
            handleModal: handleModal
        },
        {
            id: '8',
            img: img8,
            title: 'American Classic Zinger-with Cheese',
            category: 'Non veg',
            price: '224.05',
            desc: 'Signature burger with a crunchy chicken fillet, cheese slice, veggies & a delicious mayo sauce',
            handleModal: handleModal
        },
        {
            id: '9',
            img: img9,
            title: 'Indian Tandoori Zinger Burger',
            category: 'Non veg',
            price: '208.57',
            desc: 'Grab Tandoori Zinger Burger with Onions & Tangy sauce',
            handleModal: handleModal
        },
        {
            id: '10',
            img: img10,
            title: 'Indian Tandoori Zinger Burger -with Cheese',
            category: 'Non veg',
            price: '233.57',
            desc: 'Chicken zinger with aádelicious tandoori sauce & cheese slice',
            handleModal: handleModal
        },
        {
            id: '11',
            img: img11,
            title: 'Indian Paneer Zinger Burger',
            category: 'veg',
            price: '208.57',
            desc: 'Relish the Indian paneer zinger',
            handleModal: handleModal
        }
    ];
    return (
        <>
            <h2 id='categorySectionHeading' ref={section}>{title}</h2>
            <section>
                <div className="cards">

                    {
                        // eslint-disable-next-line react/prop-types
                        section1.map((card) =>
                            <CategoryItem startOrder={startOrder} handleModal={card.handleModal} img={card.img} title={card.title} category={card.category} price={card.price} desc={card.desc} key={card.id} />
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default CategorySection;