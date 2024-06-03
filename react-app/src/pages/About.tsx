import React, { Component } from "react";
import banner from "../assets/banner.png";
import pic1 from "../assets/gym-1440x900vybu.jpg";
import AndrewPic1 from "../assets/CMT09561-Enhanced-NR.jpg";
import AndrewPic2 from "../assets/CMT09563.jpg";
import KarinPic1 from "../assets/1676510625845.jpg";
import KarinPic2 from "../assets/ghows-WL-210ece0a-b579-1078-e053-0100007fc1cd-f64f9091.webp";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="short-banner">
          <img src={banner} alt="" style={{ filter: "brightness(100%)" }} />
        </div>
        <div className="body">
          <div className="narrow-body">
            <div className="about-section">
              <h1>The Story</h1>
              <div className="content">
                <img src={pic1} alt="" />
                <p>
                  In March 2024, Fitout was imagined and pursued as a second
                  option of a project to aid a struggling job search. Honestly,
                  I couldn’t have imagined a more roundabout way to create a
                  product. <br />
                  <br />
                  Hi, I’m Andrew and I co-founded Fitout with my friend and
                  mentor, Karin Aizawa. We met as a freshman and senior combo at
                  Santa Clara University in 2019 while she was the president of
                  the powerlifting club and I was new to the sport, eager to
                  join. Fast forward a bit, Karin has been working as a software
                  engineer for a few years and I just graduated with a CS degree
                  into a terrible job market looking for roles in product
                  design. One thing that didn’t change, though, was our passion
                  for fitness. I dove deeper and deeper into it, familiarizing
                  myself with powerlifting and the opportunity it was providing
                  for technological upgrades. March 2024 came along, and so our
                  roundabout journey began
                </p>
              </div>
            </div>
            <div className="about-section">
              <h1>The Team</h1>
              <div className="Andrew">
                <div className="member-description">
                  <h1 className="name">Andrew Ren</h1>
                  <h2>Role</h2>
                  <p>Co-founder, Designer, Engineer, Matcha Consumer</p>
                  <h2>Fitness for me</h2>
                  <p>Powerlifting, running</p>
                  <h2>I Like...</h2>
                  <p>
                    Drawing, Krnb, Food (cooking and eating), and Studio Ghibli
                  </p>
                </div>
                <img src={AndrewPic1} alt="" className="team-photo" />
                <img src={AndrewPic2} alt="" className="team-photo" />
              </div>
              <div className="Karin">
                <img src={KarinPic1} alt="" className="team-photo" />
                <img src={KarinPic2} alt="" className="team-photo" />
                <div className="member-description">
                  <h1 className="name">Karin Aizawa</h1>
                  <h2>Role</h2>
                  <p>Co-founder, Project Manager, Senpai</p>
                  <h2>Fitness for me</h2>
                  <p>Olympic Weightlifting, Swimming, 14 mile hikes</p>
                  <h2>I Like...</h2>
                  <p>Samoyeds, Star Wars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
