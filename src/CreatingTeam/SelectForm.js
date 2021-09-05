import s from './CreatingTeam.module.css'
import React from 'react'
import {Radio} from 'antd';

const SelectForm = () => {
   return (
		<div className={s.form__block}>
			<p>Select form</p> 
			<Radio.Group className={s.form__radio} name="radioform" defaultValue={1}>
				<div className={s.form}>
					<img src="./img/form.png" alt="" />
					<Radio className={s.form__button} value={1}></Radio>
				</div>
				<div className={s.form}>
					<img src="../img/form2.png" alt="" />
					<Radio className={s.form__button} value={2}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form3.png" alt="" />
					<Radio className={s.form__button} value={3}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form4.png" alt="" />
					<Radio className={s.form__button} value={4}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form5.png" alt="" />
					<Radio className={s.form__button} value={5}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form6.png" alt="" />
					<Radio className={s.form__button} value={6}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form7.png" alt="" />
					<Radio className={s.form__button} value={7}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form8.png" alt="" />
					<Radio className={s.form__button} value={8}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form9.png" alt="" />
					<Radio className={s.form__button} value={9}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form1.png" alt="" />
					<Radio className={s.form__button} value={10}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form10.png" alt="" />
					<Radio className={s.form__button} value={11}></Radio>
				</div>
				<div className={s.form}>
					<img src="./img/form11.png" alt="" />
					<Radio className={s.form__button} value={12}></Radio>
				</div>
			</Radio.Group>
		</div>
	
   );
}

export default SelectForm