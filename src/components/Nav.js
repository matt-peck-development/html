import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NavStyles = styled.header`
  input {
    display: none;
    position: absolute;
    top: 10px;
    left: 50px;
  }

  input:checked ~ nav label img {
    transform: rotate(90deg);
  }

  label {
    display: none;
    cursor: pointer;
  }

  label img {
    transition: transform 0.5s linear;
  }

  nav {
    background-color: #3b3b3b;
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 100px;
  }

  nav ul li {
    list-style-type: none;
    /* display: inline-block; */
    display: block;
    margin: 0 15px;
    padding: 8px 5px;
    font-weight: 300;
    cursor: pointer;
  }

  nav ul li .btn-action {
    margin-left: -10px;
  }

  nav ul li a {
    display: block;
    text-decoration: none;
    color: #f3f3f3;
    font-size: 1.25rem;
    border-bottom: 3px solid transparent;
    transition: border-bottom 0.2s linear;
  }

  nav ul li a:not(.is-button):hover {
    border-bottom: 3px solid #6c85db;
  }

  nav ul li a.active {
    font-weight: 600;
  }

  @media screen and (max-width: 750px) {
    nav ul li .btn-action {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 600px) {
    nav {
      position: static;
      height: 55px;
      transition: height 0.5s linear;
    }

    label {
      display: block;
    }

    input:checked ~ nav {
      height: 255px;
    }

    input:checked ~ nav ul {
      height: 255px;
      top: 0px;
    }

    nav ul {
      position: relative;
      top: -175px;
      flex-direction: column;
      margin: 0;
      transition: top 0.5s linear;
    }

    nav ul li {
      display: block;
      text-align: center;
    }

    nav ul li .btn-action {
      padding: 2px 10px;
      margin: 0;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <input type="checkbox" id="toggle" />
      <nav>
        <ul>
          <li>
            <Link to="/" className="active">
              home
            </Link>
          </li>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/">portfolio</Link>
          </li>
          <li>
            <Link className="is-button" to="/">
              <div className="btn-action btn-primary">get quote</div>
            </Link>
          </li>
          <li>
            <label htmlFor="toggle">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAABBdJREFUWAnFmFFSGkEQhgGxUF/APFilVkpygnADNycIOYF4gJR4gmxOADlByAlcTxA8gfqcF6yUWuWDwItioZD/W2eoFZbNorJ21dA9vTPd/3T3DLObTj2DLi8vi8Ph8LOmlpkuuZBOp0tGPpHcQRZ5kg/X19dbfm+Gn3Tcse12u9Dr9fYEoqI5xbjzzLiWADaWlpZ+rK6uWtCRJmIBU4R2BoNBXcYLxlpXnGg0xVsLCwudtbW1E55dXV2VHh4eGEdUHfGyWl6NyHYymUxVEfxFP4oigZEyAToQgJIxciTZleFmlNHxZ7LjCJQr/TbPJJ8I4JeoFE8Fxsr7/f5vAWH1Z+KVWQEBIkgXFxdEr662RfQWFxc/2UgHxyGHAtMKK5r40ww+XF5ersStjXEH431q9fb2tiE9myelBe9qwfSjiUhpZUPTWN1cSPbr1g8+I51QU+fn5+15g7IgLDh84tvqJ7gGHBtQ3sTDOSnkz8MnvoMuMrZDXSnfhPSMmrL6eXPji81VAoP15wOjIHUs1FBqwKsVunUSxc2mqjIGDGBB9oHd3NxUBQjF0UuPBIzOShsbG57mHIEBLMzP8iPFjuEuPEj77t93d7m7d0HdS+XcXe665r6/HrNTV3/bYHGz7AadWUUpu2HR6ud6XzPDlKvnr0ay6crY96BBoqZNwF9dEUxZgSqbAYRzkgZprWz4Z/LBCzRDbIYSGHZ8TELZZLsGd0TolASUYACLmjc6LuS3lYDv/7mwGAqkMq+CY4JVIo8oweJPcX26v7/n9pHPClQJFCr81ghNQEiq+HHJTUNp5JQo+cdFAMekmGzxj/ynhbCl3pZQfpgWtdHoOQvcMpTKY6XylOJvGX9Fw9+MmSs5qewEUxkKLMniV0QsBh8Yh9q2wueIN9SeUJLFbzDgv8mu9KSoqflX3Seo6CRY/GAQHlL5+C/EBlDj9HcmgCWkkP8yGMCCS//kF9IGHfFv8DeiPfxaLD6wlZWVunT8szsgZ0CSZHw68tk1WB4jxi1Sea0aMKNbZBLgzI3V3p6roa+JeiHgL4E8HyQBCh/4wie+gz6Dt4uUXttJIymlEOvBgfOQjQ/fp/E93c3YC68f4umjn/9EoGpEihb2wuvfd8bNc2HT7rCfCDy9Yu2G5n58Yow+NaVPBNgmUpxZoZ8IQoExwfyhNiXm1Vpq++ZtRuLzSNEBDFkoqnWz2awz00cVTfJJkeMzFN/BPhpVU5Gsb25uHpp+LKbC5kSvarDDBNk4paaibjNTI4YBSya1dfWJHoY7Yp6MN8X5cNe1KyfSuiUwjkU54mWBKohDXQAKUMPvRfzEAsZ8asO8GFfU3UI3A51pMQ0Oz7i1GhtYEAQplqOydI5aQXLBplvyqWQiSmtK9qJSpjGh9A9B+2T7TdAtoAAAAABJRU5ErkJggg=="
                alt=""
              />
            </label>
          </li>
        </ul>
      </nav>
    </NavStyles>
  );
}
