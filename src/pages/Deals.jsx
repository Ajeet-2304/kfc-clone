import React from 'react'
import '../css/Deals.css';
import banner from '../assets/offer_deals_banner.777f20e1.svg';
import strips from '../assets/Strips.svg';
import deal1 from '../assets/deals/CHKZINGER.jpg';
import deal2 from '../assets/deals/D-PR00002162.jpg';
import deal3 from '../assets/deals/BIGSAVE.jpg';
import deal4 from '../assets/deals/PHP75.jpg';
import deal5 from '../assets/deals/VEGZINGER.jpg';
import deal6 from '../assets/deals/FREEROLL.jpg';
const Deals = () => {

    const dealCards = [
        {
            image: deal1,
            title: "Free Classic Zinger",
            text: "Min. Order Value 499",
            viewDetails: "View Details",
            buttonText: "Apply Offer",  
        },
        {
            image: deal2,
            title: "2 pc Hot & Cripy Chicken @ Rs 99",
            text: "Min. Order Value 499",
            viewDetails: "View Details",
            buttonText: "Apply Offer",  
        },
        {
            image: deal3,
            title: "Upto Rs 100 off",
            text: "Min. Order Value 699",
            viewDetails: "View Details",
            buttonText: "Apply Offer",  
        },
        {
            image: deal4,
            title: "Rs 75 Off",
            text: "Min. Order Value 599",
            viewDetails: "View Details",
            buttonText: "Apply Offer",  
        },  
        {
            image: deal5,
            title: "Free Veg Zinger",
            text: "Min. Order Value 499",
            viewDetails: "View Details",
            buttonText: "Apply Offer",  
        },
        {
            image: deal6,
            title: "",
            text: "",
            viewDetails: "",
            buttonText: "Apply Offer",  
        }
    ]

    return (
        <>
            <div className="deals">
                <div className="deals-banner">
                    <img src={banner} alt='deals-banner' />
                    <span>Save More as you order</span>
                </div>
                <div className="card-list">
                    <div className="4strips">
                        <img src={strips} alt="4 strips" />
                    </div>
                    <div className="deal-card-heading">
                            <h2>Save More as you order</h2>
                    </div>
                    <div className="deal-card-list">
                    {
                        dealCards.map((card, index) => (
                        <div class="deal-card" key={index}>
                            <div class="deal-card-image">
                                <img loading="lazy" src={card.image}/>
                            </div>
                            <div class="deal-card-content">
                                <div class="deal-card-title">
                                    <span class="promosCard-ellipsis-text" data-testid="promos-card-text">{card.title}</span>
                                </div>
                                <div class="deal-card-text">
                                    <span class="promosCard-ellipsis-text">{card.text}</span>
                                </div>
                                <div class="view-all-text">
                                    <div class="offersViewAll-link" data-testid="view-all-deals-handler">
                                        <u data-testid="view-details-link">{card.viewDetails}</u>
                                    </div>
                                </div>
                                <div class="deal-card-button">
                                    <button type="button">{card.buttonText}</button>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                    <div className="load-more">
                        <button>Load More</button>
                        <span className='curPage'>Viewing 1 of 1</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Deals