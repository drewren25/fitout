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
            <div className="about-section">
              <h1>The Goal</h1>
              <div className="content">
                <img src={pic1} alt="" />
                <span>
                  Our overarching goal is to{" "}
                  <span className="bold">help you connect with fitness</span>.
                  Right now that means powerlifting meets, but the goal as we
                  grow is to expand to fitness in a greater context. That means
                  your next marathon, bodybuilding show, weightlifting
                  competition, etc. As we continue to develop the platform, we
                  also want to open up to non-competition events. Things like
                  run club meet ups, group workouts, and the like. Not only do
                  we want to help you find events to attend, but potential
                  fitness spaces you might be interested in or may not even know
                  about!
                  <br />
                  <br />
                  We also have a goal for you on the individual level because,
                  well, that’s something we care about:
                  <span className="bold"> The individual.</span> We love fitness
                  at large, but we want it to mean something to you too and
                  that’s a big reason we called this platform Fitout. To us,
                  fitting out means to genuinely represent yourself in your own
                  unique way through fitness. Not to try and blend in to the
                  crowd and feel like you have to do things a certain way
                  because that’s just how everyone does it. That being said, we
                  don’t want to push the message of rule breaking or disrespect,
                  there are certain things that everyone does just because
                  that’s the right thing to do. Do those things, but we want to
                  see you be 100% you in the gym, the pool, the track, wherever
                  fitness takes place for you. We think that the world can use a
                  whole lot more of <span className="bold">just you.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
