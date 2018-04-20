import React from "react";

export const ListContainer = ({ children }) => {
  return (
    <div className="list-overflow-container">
     
        {children}
      
    </div>
  );
};

export default ListContainer;