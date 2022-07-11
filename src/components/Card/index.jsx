import PropTypes from "prop-types";

const Card = ({id,title,description,onClick}) => {



    return (
        <div onClick={onClick} key={id} className="rounded-lg text-ellipsis bg-white  p-8 mt-5  hover:bg-[#e0e0e0]/100 cursor-pointer">
            <h2 className={"text-xl font-medium text-gray-800 mb-2"}>{title}</h2>
            <div className={"flex justify-between font-medium"}>
                <p className={"text-gray-400 truncate w-80"}>{description}</p>
                <p className={"text-gray-400"}>35min ago</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Card;
