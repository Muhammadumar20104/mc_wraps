import React from "react";

function Slider() {
  return (
    <div className="container flex justify-center">
      <ul className="slides overflow-hidden w-75vmin h-screen relative">
        <li className="w-full h-full absolute z-1" id="slide1">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg"
            alt=""
            className="h-full object-cover"
          />
        </li>
        <li className="w-full h-full absolute z-1" id="slide2">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg"
            alt=""
            className="h-full object-cover"
          />
        </li>
        <li className="w-full h-full absolute z-1" id="slide3">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg"
            alt=""
            className="h-full object-cover"
          />
        </li>
        <li className="w-full h-full absolute z-1" id="slide4">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg"
            alt=""
            className="h-full object-cover"
          />
        </li>
        <li className="w-full h-full absolute z-1" id="slide5">
          <img
            src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg"
            alt=""
            className="h-full object-cover"
          />
        </li>
      </ul>

      <ul className="thumbnails flex flex-col">
        <li>
          <a href="#slide1">
            <img
              src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg"
              alt=""
              className="w-30vmin h-20vmin object-cover"
            />
          </a>
        </li>
        <li>
          <a href="#slide2">
            <img
              src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg"
              alt=""
              className="w-30vmin h-20vmin object-cover"
            />
          </a>
        </li>
        <li>
          <a href="#slide3">
            <img
              src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg"
              alt=""
              className="w-30vmin h-20vmin object-cover"
            />
          </a>
        </li>
        <li>
          <a href="#slide4">
            <img
              src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg"
              alt=""
              className="w-30vmin h-20vmin object-cover"
            />
          </a>
        </li>
        <li>
          <a href="#slide5">
            <img
              src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg"
              alt=""
              className="w-30vmin h-20vmin object-cover"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
