"use client";
import React from "react";
import Social from "./Social";
import Image from "next/image";
import "./css/profile.css";

function ProfileCard() {
  return (
    <div className="card !bg-custom-500">
      <div className="card__img">
        <Image src={"/programming.png"} width={540} height={450} className="w-full" />
      </div>
      <div className="card__avatar">
        <img
          className="my-svg-element object-cover w-full h-full rounded-full"
          src="/myImage.jfif"
          alt="profile-picture"
          // className="object-cover w-full h-full"
        />
      </div>
      <div className="card__title text-white nunito">Osama Hafeez</div>
      <div className="card__subtitle text-white nunito">Web Development</div>
      <div className="card__wrapper">
        <Social />
      </div>
    </div>
  );
}

export default ProfileCard;
