import Image from 'next/image'
import styles from './page.module.scss'
import duty_logo from '../images/duty_logo.png'
import duty_screenshot from '../images/duty_screenshot.jpg'
import duty_bg from '../images/duty_bg.jpg'
import Navbar from '@/components/Navbar/Navbar'
import { Chakra_Petch, Inter } from 'next/font/google';
import { inter, quicksand, robotoCursive, ysabeau } from './fonts'
import google_play_badge from '../images/google-play-badge.png'
import app_store_badge from '../images/apple-badge.svg'
import ykioski_logo from '../images/ymparisto-kioski.svg'
import linkedin from '../images/LI-Logo.png';
import github from '../images/GitHub_Logo.png';
import Link from 'next/link'

export default function Home() {

  return (
    <main className={styles.container}>

        <div className={styles.contact}>
          <Link href='https://www.linkedin.com/in/antte-alatalo/' target='_blank'>
            <Image src={linkedin} alt='Linkedin' className={styles.linkedin} />
          </Link>
          <Link href='https://github.com/Taloqq' target='_blank'>
            <Image src={github} alt='Github' className={styles.github} />
          </Link>
          <h3 className={ysabeau.className} style={{color: 'black', paddingLeft: 5}}>antte.alatalo@hotmail.com</h3>
        </div>
        <div className={ysabeau.className}>
          <h2 className={styles.name}>Antte Alatalo - Fullstack/Frontend developer</h2>

        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.line} />
        </div>
        <div className={styles.duty}>
          <div className={styles.black_overlay} />
          <section className={styles.project_container}>
            {/* <Image src={duty_screenshot} alt='Duty' className={styles.duty_screenshot} /> */}
            <Link href='https://dutyapp.fi/' target='_blank'>
              <Image src={duty_logo} alt='Duty' className={styles.duty_logo} />
            </Link>
            <div className={styles.desc}>
              <h3 className={inter.className} style={{color: '#ffee0c', paddingBottom: 5}}>Get ready to work</h3>
              <h4 className={inter.className} style={{color: '#5c5c5c', paddingBottom: 4}}>or</h4>
              <h3 className={robotoCursive.className} style={{color: '#e34fa3'}}>take it easy</h3>
              <div style={{paddingTop: 50}}>Duty is an application that lets you find and hire people to do small work for you - or find work for yourself</div>
              <div style={{color: '#ffee0c'}}>to earn money.</div>
              <div className={styles.app_links}>
                <Link target='_blank' href='https://play.google.com/store/apps/details?id=com.devolution.duty'>
                  <Image className={styles.google_play_badge} alt='Get it on Google Play' src={google_play_badge}/>
                </Link>
                <Link target='_blank' href='https://apps.apple.com/fi/app/duty/id6444645784'>
                  <Image className={styles.app_store_badge} alt='Download on App store' src={app_store_badge}/>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.ymparisto_kioski}>
          <div className={styles.white_overlay} />
          <section className={styles.project_container}>
            <Image src={ykioski_logo} alt='Ymparistö kioski' className={styles.ykioski_logo} />
            <div className={styles.desc_white}>
            <h3 className={inter.className} style={{color: '#73ab5c', paddingBottom: 5}}>Environmentally friendly farming</h3>
            <div style={{paddingTop: 50, color: 'black', fontSize: 22}}>
              Ympäristökioski is an application - that is part of a bigger project, aiming for sustainable farming practices
              and increased collaboration between farms. Ympäristökioski suggests environmentally friendly farming solutions for farmers,
              based their farms&apos; properties.
            </div>
            <div style={{display: 'flex'}}>
              <Link target='_blank' href='https://www.ymparistokioski.fi/' className={styles.ykioski_link}>
                Website  &#8250;
              </Link>
              <Link target='_blank' href='https://app.ymparistokioski.fi/login' className={styles.ykioski_app_link}>
                Application  &#8250;
              </Link>
            </div>
            </div>
 
          </section>
        </div>
    </main>
  )
}
