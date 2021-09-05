import s from './Registration.module.css'
import React from 'react'
import { Carousel } from 'antd';
import { Button } from 'antd';


const Registration = () => {
	
   return (
		<Carousel autoplay>
			<div>
				<div className={[s.container, s.fon1].join(' ')}>
					<div className={s.header}>
						<img src="../img/logo.png" alt="" />
						<div className={s.header__btm}>
							<Button id={s.header__button} type="primary">ENTRANCE TO YOURS</Button>
							<Button id={s.header__button2} type="primary">REGISTRATION</Button>
						</div>
					</div>
					<div className={s.foother}>
						<h1>FOOTBALL MANAGER IТ FOOTBALL</h1>
						<p>Create a dream team and bring it to victory <br/> free online game. </p>
						<Button id={s.button} type="primary">CREATE A TEAM</Button>
					</div>
				</div>
			</div>
			<div>
				<div className={[s.container, s.fon2].join(' ')}>
					<div className={s.foother2}>
						<h1>We are waiting for you</h1>
						<p>Communicating in the chat and on football forums there you will find new friends.<br/> 
							The consultant team will help you to go through a difficult path from the <br/>
							not famous football club to the manager of one of the top teams of his championship. </p>
						<Button id={s.button} type="primary">CREATE A TEAM</Button>
					</div>
				</div>
			</div>
			<div>
				<div className={[s.container, s.fon3].join(' ')}>
					<div className={s.foother2}>
						<h1>New football manager </h1>
						<p>We launch a new project in which you have tried to collect all the best that is <br/>
							in the browser games of the category "Virtual Football Manager". IT Football is an <br/>
							offline game. The new European Championship opens every season, so newbies have a <br/>
							chance to pass from creating a team to the championship title, you can choose a form, <br/>
							stadium, buy players and so on. We are waiting for you in the highest league of the <br/>
							chosen championship.  </p>
						<Button id={s.button} type="primary">CREATE A TEAM</Button>
					</div>
				</div>
			</div>
		</Carousel>
   );
}

export default Registration