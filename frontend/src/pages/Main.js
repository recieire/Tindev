import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src="https://avatars.githubusercontent.com/u/38233554?v=4" alt="" />
          <footer>
            <strong>Recieire</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus, asperiores, voluptas sunt aperiam, porro eveniet consectetur officia distinctio nisi ea quos qui nesciunt alias odit consequatur molestias veritatis. Magnam?</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars.githubusercontent.com/u/38233554?v=4" alt="" />
          <footer>
            <strong>Recieire</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus, asperiores, voluptas sunt aperiam, porro eveniet consectetur officia distinctio nisi ea quos qui nesciunt alias odit consequatur molestias veritatis. Magnam?</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars.githubusercontent.com/u/38233554?v=4" alt="" />
          <footer>
            <strong>Recieire</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus, asperiores, voluptas sunt aperiam, porro eveniet consectetur officia distinctio nisi ea quos qui nesciunt alias odit consequatur molestias veritatis. Magnam?</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars.githubusercontent.com/u/38233554?v=4" alt="" />
          <footer>
            <strong>Recieire</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni accusamus, asperiores, voluptas sunt aperiam, porro eveniet consectetur officia distinctio nisi ea quos qui nesciunt alias odit consequatur molestias veritatis. Magnam?</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}