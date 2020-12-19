import React from 'react'
import '../styles/NotFound.css'
import { FButton, ActionRow } from "../StyledComponents";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <section class="error-container">
        <span>4</span>
        <span><span class="screen-reader-text">0</span></span>
        <span>4</span>
      </section>
      <ActionRow>
        <div className="back">
          <Link to="/">
            <FButton><ArrowBackIcon /><span>Back Home</span></FButton>
          </Link>
        </div>
      </ActionRow>
      

      
    </>
  )
}

export default NotFound