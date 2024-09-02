import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuLists = ({list,id,section}) => {
    // eslint-disable-next-line react/prop-types
    const url = list.replace(/\s+/g, '-');
    // const scrollHandler = (id) =>{
    //     // window.scrollTo({top: elemRef.current.o, behavior:'smooth'});
    //     id.current.scrollIntoView({
    //         behavior: 'smooth',

    //     })
    // };
    return (
        <>
            <Link id={id} to={`/menu/${url}`} className="list" key={url} onClick={()=>{
                // eslint-disable-next-line react/prop-types
                section.current.scrollIntoView({
                    behavior: 'smooth',
                    top: '0vh', 
                    });
            }}>
                {list}
            </Link>
        </>
    );
};

export default MenuLists;

