import './homes.css';
import back from './backgroundgym.jpg';
import yoga from './yoga.jpg';
import kangoo from './kangoo.jpg';
import cycling from './cycling.jpg';
import fitness from './fitness.jpg';

const Home = () => {
  return (
    <div>
        <p className='descriere'>
            <h2 className="titludesc">ÎNCEPE ANTRENAMENTUL ACUM LA ONEGYM SALĂ FITNESS GALAȚI!</h2>
             Cu abonamente flexibile, orar prelungit, o gamă variată de echipamente de cea mai bună calitate, dar și dotări de ultimă generație, ONEGYM Sală Fitness Galați va deveni locul tău preferat atunci când vei dori să faci mișcare. Te invităm să ne cunoaștem mai întâi!
        </p>
        <img src={back} alt="b" className='banner' />

        <div className='activity'>
        <ul className='activitati'>
          <li><h3>Yoga</h3></li>
          <li> FITNESS I AEROBIC I FUNCTIONAL TRAINING I CYCLING </li>
          <li><img src={yoga} alt="yoga"className='yogaimg'/> </li>
        </ul>
        <ul className='activitati'>
          <li><h3>Fitness</h3></li>
          <li> FITNESS I AEROBIC I FUNCTIONAL TRAINING I CYCLING </li>
          <li><img src={fitness} alt="fitness"className='yogaimg'/></li>
        </ul>
        <ul className='activitati'>
          <li><h3>Kangoo Jumps </h3></li>
          <li> FITNESS I AEROBIC I FUNCTIONAL TRAINING I CYCLING </li>
          <li><img src={kangoo} alt="kangoo"className='yogaimg'/></li>
        </ul>
        <ul className='activitati'>
          <li><h3>Cycling</h3> </li>
          <li> FITNESS I AEROBIC I FUNCTIONAL TRAINING I CYCLING </li>
          <li><img src={cycling} alt="cycling"className='yogaimg'/> </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
