import React from 'react'
import styled, { css, keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';

// @import './variables';
export const questionList = [
  {
    questionText: "__________ is a general term referring to actual objects related to the human body?",
    answerOptions: [
      { answerText: 'Costume', isCorrect: false },
      { answerText: 'Wardrobe', isCorrect: false },
      { answerText: 'Clothing', isCorrect: true },
      { answerText: 'Wear Ability', isCorrect: false },
    ],
  },
  {
    questionText: 'Ritu Kumar was one of the earliest pioneers of fashion with extensive research in to block prints and innovative application of the technique of ________',
    answerOptions: [
      { answerText: 'Phulkari', isCorrect: false },
      { answerText: 'Mirror Work', isCorrect: false },
      { answerText: 'Zardosiembroidery', isCorrect: true },
      { answerText: 'Dye-Prints', isCorrect: false },
    ],
  },
  {
    questionText: '__________ is more than just clothing ?',
    answerOptions: [
      { answerText: 'Apparel', isCorrect: false },
      { answerText: 'Garment', isCorrect: false },
      { answerText: 'Clothing', isCorrect: false },
      { answerText: 'Fashion', isCorrect: true },
    ],
  },
  {
    questionText: "Historians have propounded 4 different explanations regarding factors affecting clothing ?",
    answerOptions: [
      { answerText: 'Protection', isCorrect: false },
      { answerText: 'Rituals', isCorrect: false },
      { answerText: 'Identification', isCorrect: false },
      { answerText: 'All Of The Above', isCorrect: true },
    ]
  },
  {
    questionText: "________ and _________ are also indicating of the social and marital status of women ?",
    answerOptions: [
      { answerText: 'Dress and Ornaments', isCorrect: true },
      { answerText: 'Sindoor', isCorrect: false },
      { answerText: 'Black Scarf', isCorrect: false },
      { answerText: 'Mangalsutra', isCorrect: false },
    ]
  },
  {
    questionText: "In India, the coloured powder put in the hair parting is called _______ is a visual indicator of married status of women ?",
    answerOptions: [
      { answerText: 'Sandal Powder', isCorrect: false },
      { answerText: 'Sindoor Powder', isCorrect: true },
      { answerText: 'Perfume', isCorrect: false },
      { answerText: 'Tumeric', isCorrect: false },
    ]
  },
  {
    questionText: "From the late 19th century a dust coloured light weight cotton fabric is called _______ was used by the Indian Army during the British Raj ?",
    answerOptions: [
      { answerText: 'Poplin', isCorrect: false },
      { answerText: 'Khaki', isCorrect: true },
      { answerText: 'Silk', isCorrect: false },
      { answerText: 'Polyester', isCorrect: false },
    ]
  },
  {
    questionText: "_________ waist belted, tucked or slashed to give excessive looseness to give comfort to the wearer ?",
    answerOptions: [
      { answerText: 'Phyjama', isCorrect: false },
      { answerText: 'Flat Front', isCorrect: false },
      { answerText: 'Churida', isCorrect: false },
      { answerText: 'Patiala Salwar', isCorrect: true },
    ]
  },
  {
    questionText: "__________ draped lower garment for men and women ?",
    answerOptions: [
      { answerText: 'Angarkha', isCorrect: false },
      { answerText: 'Flat-front', isCorrect: false },
      { answerText: 'Antariya', isCorrect: true },
      { answerText: 'Patiala Salwar', isCorrect: false },
    ]
  },
  {
    questionText: "__________ French term for exclusive one-of-kind high fashion ?",
    answerOptions: [
      { answerText: 'Bespoke-shop', isCorrect: false },
      { answerText: 'Haute Coutre\'s', isCorrect: true },
      { answerText: 'Boutique', isCorrect: false },
      { answerText: 'Showroom', isCorrect: false },
    ]
  },
  {
    questionText: "_______ is the process of transforming a design into its constituent flat pattern pieces and then drafting them out ?",
    answerOptions: [
      { answerText: 'Pattern Making', isCorrect: true },
      { answerText: 'Draping', isCorrect: false },
      { answerText: 'Template', isCorrect: false },
      { answerText: 'Blocks', isCorrect: false },
    ]
  },
  {
    questionText: "The highest point on the bust is __________ ?",
    answerOptions: [
      { answerText: 'Gorge-point', isCorrect: false },
      { answerText: 'Pleat', isCorrect: false },
      { answerText: 'Dart', isCorrect: false },
      { answerText: 'Apex', isCorrect: true },
    ]
  },
  {
    questionText: "_______ refers to the amount of roominess in a garment ?",
    answerOptions: [
      { answerText: 'Grain line', isCorrect: false },
      { answerText: 'Dart', isCorrect: false },
      { answerText: 'Ease', isCorrect: true },
      { answerText: 'Tuck', isCorrect: false },
    ]
  },
  {
    questionText: "One of the first ________ that is done on muslin at the time when the pattern is made ?",
    answerOptions: [
      { answerText: 'Fullness', isCorrect: false },
      { answerText: 'Test-fit', isCorrect: true },
      { answerText: 'Final', isCorrect: false },
      { answerText: 'Finishing', isCorrect: false },
    ]
  },
  {
    questionText: "Dart manipulation of the front bodice consists of _____ types ?",
    answerOptions: [
      { answerText: '13', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '8', isCorrect: false },
    ]
  },
  {
    questionText: "________ is the dress fitted through the bodice, waist, and hips, and flaring out from the knees ?",
    answerOptions: [
      { answerText: 'Empire', isCorrect: false },
      { answerText: 'Mermaid', isCorrect: true },
      { answerText: 'Ball Gown', isCorrect: false },
      { answerText: 'A-line', isCorrect: false },
    ]
  },
  {
    questionText: "A straight, form fitting silhouette is _______ ?",
    answerOptions: [
      { answerText: 'Trumpet', isCorrect: false },
      { answerText: 'Mermaid', isCorrect: false },
      { answerText: 'Sheath', isCorrect: true },
      { answerText: 'Tulip', isCorrect: false },
    ]
  },
  {
    questionText: "__________ is a high neck line that cuts straight across the collar bone ?",
    answerOptions: [
      { answerText: 'Jewel', isCorrect: false },
      { answerText: 'Cowl Neck', isCorrect: false },
      { answerText: 'Scoop', isCorrect: false },
      { answerText: 'Boat Neck', isCorrect: true },
    ]
  },
  {
    questionText: "A sleeve cut wide at the armhole and tapering to the wrist is _________ ?",
    answerOptions: [
      { answerText: 'Dolman sleeve', isCorrect: true },
      { answerText: 'Puff sleeve', isCorrect: false },
      { answerText: 'Plain sleeve', isCorrect: false },
      { answerText: 'Tulip sleeve', isCorrect: false },
    ]
  },
  {
    questionText: " _______ hugs tight against the body with hook, snap or laced back securing ?",
    answerOptions: [
      { answerText: 'Midriff', isCorrect: false },
      { answerText: 'Empire', isCorrect: false },
      { answerText: 'Surplice', isCorrect: false },
      { answerText: 'Corset', isCorrect: true },
    ]
  },
  {
    questionText: "A sheer soft knit fabric, most often 100% cotton as an informal fabric at weddings ?",
    answerOptions: [
      { answerText: 'Moire', isCorrect: false },
      { answerText: 'Organdie', isCorrect: false },
      { answerText: 'Jersey', isCorrect: true },
      { answerText: 'Organza', isCorrect: false },
    ]
  },
  {
    questionText: "_______ is the thicker fabric ribbing in the weave ?",
    answerOptions: [
      { answerText: 'Taffeta', isCorrect: true },
      { answerText: 'Tulle', isCorrect: false },
      { answerText: 'Laces', isCorrect: false },
      { answerText: 'Velvet', isCorrect: false },
    ]
  },
  {
    questionText: "The hem falls right above the ankles ?",
    answerOptions: [
      { answerText: 'Mini', isCorrect: false },
      { answerText: 'Floor', isCorrect: false },
      { answerText: 'Ballerina', isCorrect: true },
      { answerText: 'Street', isCorrect: false },
    ]
  },
  {
    questionText: "________ is smooth, heavy and shin, long honoured bridal fibre ?",
    answerOptions: [
      { answerText: 'Satin', isCorrect: true },
      { answerText: 'Chantily', isCorrect: false },
      { answerText: 'Trulle', isCorrect: false },
      { answerText: 'Crepe', isCorrect: false },
    ]
  },
  {
    questionText: "What date was Check Adigs website launched ?",
    answerOptions: [
      { answerText: '7th of August 2020', isCorrect: false },
      { answerText: '5th of June 2020', isCorrect: false },
      { answerText: '10th of August 2020', isCorrect: true },
      { answerText: '21st November 2020', isCorrect: false },
    ]
  },
  {
    questionText: "Check Adigs – Elegeance is not standing out but being ______ ?",
    answerOptions: [
      { answerText: 'Remembered', isCorrect: true },
      { answerText: 'Unique', isCorrect: false },
      { answerText: 'Exempted', isCorrect: false },
      { answerText: 'Gallant', isCorrect: false },
    ]
  },
  {
    questionText: "Style is more about being _______ ?",
    answerOptions: [
      { answerText: 'Beautiful', isCorrect: false },
      { answerText: 'Cute', isCorrect: false },
      { answerText: 'Yourself', isCorrect: true },
      { answerText: 'Generous', isCorrect: false },
    ]
  },
  {
    questionText: "What is the call line for Check Adigs ?",
    answerOptions: [
      { answerText: '08130267643', isCorrect: true },
      { answerText: '08065843658', isCorrect: false },
      { answerText: '0815243019', isCorrect: false },
      { answerText: '09044577875', isCorrect: false },
    ]
  },
  {
    questionText: "What is the name of a long piece of cloth worn by women over the shoulder ?",
    answerOptions: [
      { answerText: 'Laid', isCorrect: true },
      { answerText: 'Granville', isCorrect: false },
      { answerText: 'Plaid', isCorrect: false },
      { answerText: 'Sooth', isCorrect: false },
    ]
  },
  {
    questionText: "What do you mean by Camlet also commonly known as Camelot or camblet in the fashion industry ?",
    answerOptions: [
      { answerText: 'The helmet on the king’s head', isCorrect: false },
      { answerText: 'The material in making the king’s cloth', isCorrect: false },
      { answerText: 'The waterproof cloth of camel’s hair', isCorrect: true },
      { answerText: 'The material in making the slave’s cloth', isCorrect: false },
    ]
  },
  {
    questionText: "Who drafts the shapes and sizes of a garment’s pieces with paper and measuring tools ?",
    answerOptions: [
      { answerText: 'Stylist', isCorrect: false },
      { answerText: 'Textile Designer', isCorrect: false },
      { answerText: 'Pattern Maker', isCorrect: true },
      { answerText: 'Tailor', isCorrect: false },
    ]
  },
  {
  questionText: "What is the name of strong shiny cotton ?",
  answerOptions: [
    { answerText: 'Poplin', isCorrect: true },
    { answerText: 'Violin', isCorrect: false },
    { answerText: 'Foflin', isCorrect: false },
    { answerText: 'Shint', isCorrect: false },
  ]
  },
  {
  questionText: "What is the colour of aquamarine, a precious stone ?",
  answerOptions: [
    { answerText: 'Bluish Green', isCorrect: true },
    { answerText: 'Pinkish', isCorrect: false },
    { answerText: 'Greenish', isCorrect: false },
    { answerText: 'Greenish Blue', isCorrect: false },
  ]
  },
  {
  questionText: "What is the name of the garment having a front opening ?",
  answerOptions: [
    { answerText: 'Polero', isCorrect: false },
    { answerText: 'Folero', isCorrect: false },
    { answerText: 'Bolero', isCorrect: true },
    { answerText: 'Dolero', isCorrect: false },
  ]
  },
  {
  questionText: "Fedora lies in which category of accessories ?",
  answerOptions: [
    { answerText: 'A kind of cap', isCorrect: true },
    { answerText: 'A kind of feather', isCorrect: false },
    { answerText: 'A kind of clothing material', isCorrect: false },
    { answerText: 'A kind of weather', isCorrect: false },
  ]
  },
  {
  questionText: "Which of the following is suitable for making evening gown ?",
  answerOptions: [
    { answerText: 'Satin', isCorrect: true },
    { answerText: 'Flannel', isCorrect: false },
    { answerText: 'Garbadine', isCorrect: false },
    { answerText: 'Silk tweet', isCorrect: false },
  ]
  },
  {
  questionText: "A celebrity fashion designer from Florida born in Italy ?",
  answerOptions: [
    { answerText: 'Christian Dior', isCorrect: false },
    { answerText: 'Gianni Versace', isCorrect: true },
    { answerText: 'Giuseppi Zanotti', isCorrect: false },
    { answerText: 'Kanye West', isCorrect: false },
  ]
  }
];

const FadeIn = keyframes`
  0% {
    box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3);
  }

  100% {
      box-shadow: none;
  }
`



const HoverObj = keyframes`
0% {
  transform: translateY(5px);
} 

50% {
  transform: translateY(-5px)
}

100% {
  transform: translateY(5px);
}
`

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2em;
  font-family: Helvetica;
  border-radius: .2rem; 
  transition: background-color 150ms ease-in;
  border: none;
  margin: .5rem 0;
  &:hover {
    cursor: pointer;
    /* background-color: #43a047; */
    background-color: #000;
    color: #fff;
  }

  &:active, &:focus  {
    outline: 0;
  }
  ${({ primary }) =>
    primary &&
    css`
        color: #fff;
        /* background-color: ${({ bgColor }) => bgColor}; */
        background-color: #F36B2B;
        transition: box-shadow 250ms ease-out, background-color 200ms ease-in;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          ${'' /* background-color: #333; */}
          /* background-color: #fff; */
          background-color: #43a047;

          color: #fff;
          // use the shadow to add a pulse animation.
          /* box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3); */
        }
      `
  }
`

export const Title = styled.h1`
  color: #fff;
  padding: 0;
  font-size: 2.2rem;
`

export const SubTitle = styled.h2`
  color: #ddd;
  font-size: 1.1rem;
  /* margin-top: 1rem; */

  ${({ uppercase }) =>
    uppercase && css`
      text-transform: uppercase;
    `
  }

  .order_number {
      background-color: #F36BEE;
      padding: .3em;
      font-size: .8em;
      border-radius: 5px;
      color: #fff;
    }

    @media (max-width: 473px) {
      .order_number {
        margin: 1em 0;
        background-color: #F36BEE;

      }
    }
`

export const Paragraph = styled.p`
  color: #ddd;
  font-size: 1.1rem;
  margin: .6em 0;

  .order_number {
    background-color: #F36BEE;
    padding: .3em;
    font-size: .8em;
    border-radius: 5px;
    color: #fff;
  }

  @media (max-width: 473px) {
    .order_number {
      margin: 1em 0;
      background-color: #F36BEE;

    }
  }
`

export const SpanText = styled.span`
  color: #fff; 
  font-size: 1em;
`


export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  background-color: #fff;
  border-radius: .2rem; 
  transition: background-color 150ms ease-in;
  border: none;
  margin: .5rem 0;
  color: #333;
  &:hover {
    cursor: pointer;
    /* background-color: #43a047; */
    background-color: #000;
    color: #fff;
  }

  &:active, &:focus  {
    outline: 0;
  }
  ${({ primary }) =>
    primary &&
    css`
        color: #fff;
        /* background-color: ${({ bgColor }) => bgColor}; */
        background-color: #F36B2B;
        transition: box-shadow 250ms ease-out, background-color 200ms ease-in;

        &:hover {
          box-shadow: none;
          animation: 500ms ${FadeIn} ease-in infinite;
          ${'' /* background-color: #333; */}
          /* background-color: #fff; */
          background-color: #43a047;

          color: #fff;
          // use the shadow to add a pulse animation.
          /* box-shadow: 0 0 .5rem .4rem rgba(0, 0, 0, .3); */
        }
      `
  }

  span {
    margin: 0 .5em;
  }
`

export const Button = ({ primary, children, bgColor }) => {
  return (
    <StyledButton
      primary={primary}
      bgColor={bgColor}
    >
      { children}
    </StyledButton>
  )
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 0;
  height: 100%;
  text-align: center;
  padding: 0 1rem;
`
export const SummaryHeader = styled.div`
  margin: 1.5rem 1rem;
  width: 60%;

  p {
    margin: 0 1rem;
  }

  h1 {
    text-align: left;
  }


/* 
  p {
    width: 80vw;
  } */

 

  @media (max-width: 586px) {    
    width: 100%;

    h1 {
      font-size: 1.5rem;
      margin: .5rem 0;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const SummaryCard = styled.div`
  height: 40%;
  /* height: 100%; */
  padding: 1rem;
  /* width: 40%; */
  width: 50%;
  /* text-align: center; */
  /* margin: 1rem 0; */
  border-radius: .2rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* background-color: #F36B2B; */
  background-color: #f36b2b;
  background-image: linear-gradient(163deg, #f36b2b 0%, #F7CE68 100%);
  box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2);
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  .totalPrice {
    font-size: 45px;
    display: flex;
    /* background-color: thistle; */
    /* padding: 0; */

    span {
      font-size: 1.1rem;
      margin-top: .5rem;
      font-weight: 800;
    }
  }

  @media (max-width: 582px) {
    width: 100%;
    box-shadow: none;
  }
  
`

export const CardStyle = styled.div`
  /* height: 35rem; */
  height: 100%;  
  padding: 3rem 0;
  width: 40%;
  /* width: 100%; */
  text-align: center;
  margin: 1rem 0;
  border-radius: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F36B2B;
  /* box-shadow: 0px 2px 16px 6px rgba(243, 107, 43, .2); */
  transition: transform 200ms ease-in, box-shadow 300ms ease-in;

  @media (min-width: 318px) and (max-width: 707px) {
    height: 25rem;
    width: 100%;
  }

  svg {
    height: 1.5rem;
    margin-left: .5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    box-shadow: none;
  }

  img {
    height: auto;
    width: 60%;
  }
`

export const LinkButton = styled.button`
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  padding: .5rem 1.5rem;
  font-size: 1rem;
  border-radius: .3rem;
  display: flex; 
  align-items: center;
  border: 3px solid transparent;
  text-decoration: none;
  transition: color 300ms ease-out, background-color 150ms ease-out;
  margin: 1rem 0;

  &:active {
    outline: 0;
    border: 3px solid transparent;
    transform: translateY(3px);
  }

  &:hover {
    background-color: #000;
    color: #ddd;

    svg {
      transform: translateX(5px);
    }
  }

  &:disabled {
    background-color: #333;
    color: #ddd;
    pointer-events: none;
  }

  svg {
    height: 1.5rem;
    margin-left: .5rem;
    width: 1.5rem;
    transition: transform 300ms ease-in-out;
  }

`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #400; */
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;

  .price {
    font-size: 2rem;
  }
`

// export const LinkStyled = styled(Link)`

// `

export const IconStyle = styled.div`
  display: inline;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const ShopCartContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: #ff0; */
  /* text-align: center; */
  display: flex;
  justify-content: center;
  color: #fff;
  min-height: 100vh;
`

export const CartItemStyle = styled.div`
  height: 100%;
  /* display: grid;
  grid-template-columns: 1.5fr .7fr;
  grid-gap: 2.5rem; */
  display: flex;
  flex-direction: column-reverse;

  width: 100%;
  /* width: 100%; */
  justify-content: space-between;
  padding: 3rem;
  /* background: #ff0; */

  @media (max-width: 512px) {
    padding: 0;
  }
`

export const BasicCard = styled.div`
  height: 100%;
  display: flex;
  /* width: 100%; */
  justify-content: center;
  /* padding: 3rem; */
  /* background: rgb(33, 33, 33); */

  ${({ shadow, bgColor }) =>
    shadow &&
    css`
      box-shadow: 2px 3px 19px 0px rgba(0,0,0,0.75);
      transition: box-shadow 300ms ease-in-out;
      background-color: ${bgColor};
      &:hover {
        box-shadow: none;
      }
    `
  } 

  @media (min-width: 315px) and (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;  
  }
`

export const CartCard = styled.div`
  background-color: #212121;
  /* background-color: #F36B2B; */
  color: #fff;
  /* line that added the 3d look to cart card */
  margin: 2rem 1rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-radius: .2rem;
  align-items: center;
  padding: 1rem;
  position: relative;
  transition: box-shadow 300ms ease-in-out;
  /* width: 50%; */

  .item-actions {
    display: flex;
    align-items: center;
  }

  .qty {
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 600;
}


  .card-info {
    display: flex;
    /* background: #fff; */
    align-items: center;
    justify-content: space-between;
    
  }

  input {
    padding: 1rem .3rem;
    width: 50%;
    font-size: 1rem;
    color: #fff;
    border-bottom: solid 3px #444;
    background-color: transparent;
    margin: 0 1rem;
    transition: border-bottom 200ms ease-in-out;
    z-index: 500;

    &:focus {
      outline: 0;
      border-bottom: solid 3px #F36B2B;

    }
  }

  /* add a slight animation to clothing */
  .cart-image {
    border: 5px solid #ff9c59;
    border-radius: 100%;
    background-color: #F36B2B;
    /* padding: .5em; */
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  
  img {
    height: auto;
    width: 80%;
  }

  &:hover {
    /* box-shadow: 0 0 3px 10px #ff9c59; */
    box-shadow: 0 0 3px 10px #2c2c2c;
    img {
      animation: ${HoverObj} 600ms ease-in-out infinite;
    }

  }

  @media (min-width: 315px) and (max-width: 779px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    width: 80%;
    margin: 2rem auto;

    .name {
      margin: 1rem 0;
    }

    p {
      font-size: 1.3rem;
    }

    /* .card-info {
      margin: .5rem 0;
    } */
    
    
    input {
      text-align: center;
    }
    
    .remove {
      display: none;
    }
    
    
    
    &:hover {
      box-shadow: none;
      .remove {
        display: block;
        position: absolute;
        top: 3rem;
      }
      img {
        filter: blur(5px);
        --webkit-filter: blur(5px);
      }
    }
  }

  @media (max-width: 388px) {
    /* margin: 0; */
    .item-actions {
      display: flex;
      flex-direction: column;
    }
  }
`
export const FormGroup = styled.div`
  width: 100%;
  /* background-color: #fff; */
`

export const Form = styled.form`
  height: 100%;
  display: flex;
  padding: 3rem 2rem;
  flex-direction: column;
  margin: 0 1rem;
  border-radius: .2rem;
  width: 70%;
  /* width: 100%; */
  justify-content: space-between;
  /* padding: 3rem; */
  background: #1a1a1a;

  @media (min-width: 315px) and (max-width: 900px) {
    margin: 1rem 0;
    width: 100%;
  }

  @media (max-width: 368px) {
    margin: 0;
  }

`

export const Input = styled.input`  
    padding: 1rem .5rem;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    border-bottom: solid 3px #444;
    background-color: #000;
    margin: 1rem 0;
    transition: background-color 700ms ease-in;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
    transition: border-bottom 200ms ease-in-out;
    /* z-index: 1000; */

    &:focus {
      outline: 0;
      border-bottom: solid 3px #F36B2B;
      box-shadow: 10px 10px 22px -12px rgba(0,0,0,0.75);
      background-color: transparent;
    }
/* 
    .push-left {
      margin-left: 5rem;
      font-size: 50px;
      background-color: #F36B2B;
    } */
  `

export const CheckoutCard = styled.div`
  /* Return the gray background on mobile ... MAYBE?  */
  /* background-color: #212121; */
  color: #fff;
  text-align: left;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1em 3rem;

  h2 {
    font-weight: 400;
    text-align: center;
    padding: 1rem 0;
  }


  /* @media (max-width: 720px) {
    position: sticky;
    top: 0;
  } */  
`

export const RowLayout = styled.div`
  align-items: center;
  display: flex;
  overflow-x: hidden;
  /* background: #ff0; */

  // * Make sure to pass this rule value as a PROP!
  /* padding: 3rem; */

  input {
    width: 50%;
  }

  input:nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 566px) {
   display: flex;
   flex-direction: column; 

   input {
     width: 100%;
     margin: 1.5rem 0
   }

   input:nth-child(2) {
     margin: 0;
   }
  }  
`

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;

  .back {
    margin: 0 auto 4em;
  }  

  p {
    text-align: center;
    font-size: 1.3rem;
  }


  @media (min-width: 315px) and (max-width: 626px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 1.5rem 0;
    justify-content: center;

    .items-length {
      /* background-color: #904154; */
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
          display: none;
      }
    }
    .total-price {
      width: 100%;
      /* background-color: #549815; */
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 1.5rem;
      }
    }
    /* div:last-child {
      display: flex;
      flex-direction: column-reverse;
    } */
  } 
`

export const Page = styled.div`
  /* height: 100vh; */
  padding: 0 5rem;
  display: flex;
  /* height: 0vh; */
  height: 80%;
  flex-direction: column;
  /* background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606402883/Taieri_z4cz7f.png") fixed no-repeat; */
  /* background-size: cover; */
  /* align-items: center; */

  @media (max-width: 558px) {
    padding: 0 2rem;
  }

  @media (max-width: 340px) {
    padding: 0 .5rem;
  }
`

export const ItemForCarousel = styled.div`
  background-color: url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397756/IMG_E4430_vzk1ol.jpg") fixed no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  ${({ bgColor }) =>
    bgColor && css`
    background: linear-gradient(to right, #00000050, #00000040), url(${bgColor}) no-repeat; 
    background-position-y: 45%;
    background-size: cover;

    @media (max-width: 534px) {
      background-size: cover;
      height: 50vh;
      background-position-y: 0;
    }
  `
  } 

  &:focus, &:active {
    outline: 0;
    border: 0;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const SuccessCard = styled.div`
  text-align: center;
  /* font-family: Lato; */
  padding: 2rem 0;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606402883/Taieri_z4cz7f.png") fixed no-repeat;
  background-size: cover;
  /* linear-gradient(to right, rgba(253, 200, 48, .2), rgba(243, 115, 53, .4)), */


  h1 {
    margin-bottom: .5em;
  }

  
  p {
    margin: .3em 0;
    color: #fff;
    /* font-style: italic; */
    font-size: 1.5em;
    /* font-weight: 800; */
  }

  button {
    margin: 1em;
  }
`

export const IframePage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F36B2B;

  button {
    position: relative;
    top: 4em;
  }
  

  @media (min-width: 318px) and (max-width: 527px) {
    background-color: #fff;

    button {
      position: relative;
      top: .2em;
      background-color: #F36B2B;
      color: #fff;
    }
  }
`

export const IframeStyle = styled.iframe`
  height: 1000px;
  width: 1000px;

  @media (min-width: 320px) and (max-width: 510px) {
    height: 100vh;
    width: 50vh;
  }
`

export const HeaderStyle = styled.div`
  height: 100vh;
  width: 100%;
  /* background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397756/IMG_E4430_vzk1ol.jpg") fixed no-repeat; */
  /* background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ) fixed no-repeat; */
  background-size: cover;

  @media (max-width: 530px) {
    height: 30%;
  }
`

export const BasicBox = styled.div`
  /* height: 70%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F36B2B;
  ${({ url }) =>
    url && css`
      background: url(${url}) no-repeat;
      background-size: cover
    `
  }
  background-image: linear-gradient(163deg, #f36b2b 0%, #F7CE68 100%);
  box-shadow: 0px 2px 16px 6px rgba(0, 1, 3, .2);
  padding: 2em;
  height: 80%;
  border-radius: .3em;
  overflow: hidden;

  p {
    margin: .5em 0;
    line-height: 30px;
  }

  @media (min-width: 320px) and (max-width: 485px) {
    width: 90%;
  }
`

export const Style404 = styled.div`
  background: #fff;
  color: #333;
`

export const AppStyle = styled.div`
  /* background-color: #1a1a1a; */
  background: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), url("https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606402883/Taieri_z4cz7f.png") fixed no-repeat;
  background-size: cover;
`


export const EmptyCartStyle = styled.div`
  background: #FFFFFF;
  /* background-color: #1a1a1a; */
  margin: 0 auto;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0 1em 0;
  border-radius: .2em;
  position: relative;
  width: 30em;

  img {
    height: auto;
    width: 50%;
    position: relative;
  }

  h2 {
    font-weight: 400;
    color: #1a1a1a;
  }

  div {
    background-color: #fff;
    text-align: center;
    width: 100%;
    border-radius: .2em;

  }
  @media (min-width: 318px) and (max-width: 593px) {
    width: 100%;
  }

  @media (max-width: 361px) {
    h1 {
      font-size: 1em
    }
  }
`

export const QuizPage = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;

  @media (min-width: 318px) and (max-width: 860px) {
    height: 100%;
  }
`
export const QuizBox = styled.div`
  background-color: #F36B2B;
  height: 80%;
  width: 60%;
  border-radius: .2em;

  .bold {
    font-weight: 800;
  }

  .score-title, .quiz-title {
    width: 100%;
    padding: 1.5em 3rem 1em;
    display: flex;
    border-bottom: .4em solid #F3B70045;
  }

  .score-title {
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 1rem 1em;

    button {
      margin: 0;
    }
  }

  .score-display {
    display: flex;
    line-height: 55px;
    padding-top: 3em;
    align-items: center;
    // add black color to background
    flex-direction: column;
    height: 100%;
  }

  .quiz-title {
    justify-content: space-between;
    padding: 1.5em 3em 1em;
    /* ff6201 */
    /* F3B700 */
  }

  .row {
    display: flex;
    padding: 0 3em;
    margin: 3em 0;
    justify-content: space-between;

    p {
      color: darken(#ddd, 60%);
    }
  }

  .question, .options {
    margin: 0 3rem;
  }

  .question p {
    font-size: 1.3em;
  }

  .options {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 2em;
  }

  .button { 
    width: 100%; 
    background-color: #F3B700;
    padding: 1em;
    font-size: 1em;
    color: #542E71;
    outline: none;
    border: none;
    transition: 300ms ease-in-out;
    border-radius: 5em;
    /* color: #1a1a1a; */
    /* 542E71 */
    &:hover {
      transform: translateY(.2em) scale(1.03);
      background-color: #1a1a1a;
      cursor: pointer;
      color: #F3B700;
    }

    &:active {
      transform: translateY(-.5em);
      outline: none;
      border: 0;
    }
  }
  @media (min-width: 318px) and (max-width: 450px) {
    width: 100%;
    padding-bottom: 3em; 

    .options {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 450px) and (max-width: 860px) {
    height: 100%;
    width: 80vw;
    padding-bottom: 3em;
    margin-bottom: 3em;
    .options {
      display: flex;
      flex-direction: column;
    }
  }
  
`
