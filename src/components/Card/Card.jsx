import React from "react";
import PropTypes from "prop-types";
import Tag from "../Tag/Tag";
import { Dropdown } from "flowbite-react";

const Card = ({ title, Tags, icon }) => {
  return (
    <div className="p-4 box-border cursor-pointer w-72 max-w-sm mb-2 bg-white rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 ">
      <div className="flex items-center justify-between mb-2 ">
        <h5 className="space-x-4 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          <span className="mr-2">{icon}</span>
          {title}
        </h5>
        <Dropdown
          inline={true}
          label={
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          }
          aria-describedby="dropdown"
          arrowIcon={false}
        >
          <Dropdown.Item>
            <a
              href="#delete"
              className="block py-1 px-1 text-sm text-red-600 hover:text-red-700"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      {Tags.map((tag) => {
        return <Tag text={tag.title} color={tag.color} />;
      })}
    </div>
  );
};

Card.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Card;
