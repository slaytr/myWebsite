import React from 'react';
import './mystory.css';

class MyStory extends React.Component {
  render() {
    return (
      <div className="w3-content storyWrapper"  style={{maxWidth:1400}}>

      <div className="w3-half">
        <div className="w3-container w3-card w3-white w3-text-grey storyBox">
          <h1 className="w3-text-dark-grey" style={{paddingTop: 16}}>Hi, I’m Bill!</h1>
          <p>I’m a Software Engineer and Full Stack Developer. I enjoy creating things and my favourite languages to use are Python, JavaScript (ES6), Java and C++. I have created all sorts of dumb programs because I liked the challenge. You can
            find some of them under projects!</p>
          <p>I was on the core developer team at Nyriad, focusing on creating new high-tech software to enable computers to process data exceedingly quicker than before. For the nerds out there, my work involved writing kernel space code to connect
            non volatile memory. </p>
          <p>At the moment I am developing full stack web apps, I love being to express my creativity in frontend development whilst also problem solving backend related problems. </p>
          <hr />
        </div>
        <div className="w3-container w3-card w3-white w3-text-grey storyBox">
          <h4 className="w3-text-dark-grey">Two Frogs</h4>
          <p>Once upon a time two frogs stumbled into a pit and got stuck and couldn't jump out,
            the surrounding frogs gathered around and said there was no hope left for them.</p>
          <p>One of the frogs gave up and died, the other kept jumping as hard as he could, and he made it
            out. Once out, the other frogs asked, “Did you not hear us?”</p>
          <p>The surviving frog explained to them that he thought that they were encouraging
            him the entire time.</p>
          <hr />
          <p>I like to set my goals high, as such I have succeeded where others have failed and failed where others have succeeded.</p>
          <p style={{textAlign: "center"}}>My determination is personal and my drive is contagious, I can help you succeed.</p>
          <hr />
        </div>
      </div>
        <div className="w3-half">
          <div className="w3-container w3-card w3-white w3-text-grey storyBox" style={{paddingTop: 16}}>
            <h1 className="w3-text-dark-grey">My Story</h1>
            <p><i className="fas fa-kiwi-bird"></i> I grew up in the land of Kiwis. <i className="fas fa-kiwi-bird"></i><br />I always had a dream to be the best. It started with chess <i className="fas fa-chess-knight"></i> for me, when I was 10 the old
              librarian at school taught me how to play before entering me into a local competition. My mum took me there, I was so nervous. By the end of the day I had swept all the other kids in my group at the tournament and the hosts handed me 80
              bucks <i className="fas fa-dollar-sign"></i>. My addiction to began here. A year later, I was buying Yu-Gi-Oh cards from the weekend markets then flipping them at school on weekdays. I got into a lot of trouble for that later <i
                className="fas fa-exclamation-triangle"></i>.</p>
            <p>As I grew up I continued playing chess, each year I would compete in the regional competitions, but it wasn’t enough for me. Soon, I was playing at national tournaments and finally international by the time I was 15 <i
                className="far fa-smile"></i>. Then, I switched from chess to League of Legends <i className="fas fa-gamepad"></i>. I was determined to play professionally as all kids dreamed to do, on a big stage and with a cheering audience. I trained
              everyday and worked very hard and realised that dream of mine. I played League professionally for a few years. </p>
            <p><i className="fas fa-graduation-cap"></i> After I graduated university <i className="fas fa-graduation-cap"></i><br /> I was lost like most of the grads. My career wasn’t financially sustainable to continue and I had grown up. So I started
              coding things, all the things. If I’m not creating programs, I’ll be browsing frameworks or projects. On weekends I compete in coding competitions or contribute to open source. On weekdays I work on personal projects and upskilling</p>
            <hr />
            <h5 className="w3-text-dark-grey" style={{textAlign: "center"}}>Current Areas of Focus</h5>
            <h4 style={{textAlign: "center"}}>Responsive Web Design and Progressive Web Apps</h4>
            <hr />
          </div>
        </div>
      </div>

    )
  }
}

export default MyStory;
