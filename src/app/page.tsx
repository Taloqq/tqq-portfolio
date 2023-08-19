import Image from 'next/image'
import styles from './page.module.scss'
import duty_logo from '../images/duty_logo.png'
import { inter, ysabeau } from './fonts'
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
          <h3 className={ysabeau.className} style={{color: 'black', paddingRight: 5}}>antte.alatalo@hotmail.com</h3>
        </div>
        <header className={ysabeau.className}>
          <h2 className={styles.header}>Antte Alatalo - Fullstack/Frontend developer</h2>
        </header>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.line} />
        </div>
        <div className={styles.duty}>
          <div className={styles.black_overlay} />
          <section className={styles.project_container}>
            <Link href='https://dutyapp.fi/' target='_blank'>
              <Image src={duty_logo} alt='Duty' className={styles.duty_logo} />
            </Link>
            <div className={styles.project_info}>
              <h3 className={inter.className} style={{color: '#ffee0c', paddingBottom: 5}}>Get ready to work</h3>
              <h4 className={inter.className} style={{color: '#5c5c5c', paddingBottom: 4}}>or</h4>
              <h3 className={inter.className} style={{color: '#e34fa3'}}>take it easy</h3>
              <div className={styles.desc_black}>Duty is an application that lets you find and hire people to do small work for you - or find work for yourself
                <div style={{color: '#ffee0c'}}>to earn money.</div>
              </div>
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
            <div className={styles.project_info_white}>
            <h3 className={inter.className} style={{color: '#73ab5c', paddingBottom: 5}}>Environmentally friendly farming</h3>
            <div className={styles.desc_white}>
              Ympäristökioski is an application - that is part of a bigger project, aiming for sustainable farming practices
              and increased collaboration between farms. Ympäristökioski suggests environmentally friendly farming solutions for farmers,
              based on their farms&apos; properties.
            </div>
            <div className={inter.className} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingTop: 50, gap: 50}}>
              <Link target='_blank' href='https://www.ymparistokioski.fi/' className={styles.ykioski_link}>
                Website  &#8250;
              </Link>
              <Link target='_blank' href='https://app.ymparistokioski.fi/login' className={styles.ykioski_link}>
                Application  &#8250;
              </Link>
            </div>
            </div>
 
          </section>
        </div>
    </main>
  )
}
