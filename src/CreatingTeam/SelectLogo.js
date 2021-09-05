import s from './CreatingTeam.module.css'
import React from 'react'
import {Radio} from 'antd';

const SelectLogo = () => {
   return (
		<div className={s.form__block}>
			<p> Choice of Logo (Avatar) Teams  </p> 
			<Radio.Group className={s.form__radio} name="radiologo" defaultValue={1}>
				<div className={s.form}>
					<img src="../img/Club1.png" alt="" />
					<Radio className={s.form__button} value={1}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club2.png" alt="" />
					<Radio className={s.form__button} value={2}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club3.png" alt="" />
					<Radio className={s.form__button} value={3}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club4.png" alt="" />
					<Radio className={s.form__button} value={4}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club5.png" alt="" />
					<Radio className={s.form__button} value={5}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club6.png" alt="" />
					<Radio className={s.form__button} value={6}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club7.png" alt="" />
					<Radio className={s.form__button} value={7}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/Club8.png" alt="" />
					<Radio className={s.form__button} value={8}></Radio>
				</div>
			</Radio.Group>
		</div>
	
   );
}

export default SelectLogo