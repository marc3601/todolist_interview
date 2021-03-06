import React from "react";
import "./BtnDel.css";
const BtnDel = ({ deleteEntry, delID, isSmall, isMinus = true }) => {
  return (
    <button
      onClick={() => deleteEntry(delID)}
      className={
        !isSmall
          ? "buttonSecContainer__button minusContainer"
          : "buttonSecContainer__button minusContainer smallBtn"
      }
    >
      <div className={`buttonSec__iconContainer ${isMinus ? "minus" : "plus"}`}>
        {isMinus ? (
          <svg
            className="minus__sign"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M0 10h24v4h-24z" />
          </svg>
        ) : (
          <svg
            className="plus__sign"
            height="12"
            viewBox="0 0 430 450"
            width="20"
            fill="#fff"
          >
            <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"></path>
          </svg>
        )}
      </div>
    </button>
  );
};

export default BtnDel;
