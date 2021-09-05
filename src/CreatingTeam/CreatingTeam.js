import s from './CreatingTeam.module.css'
import React from 'react'
import { Row, Col , Input , Radio , message , Button } from 'antd';
import { UserOutlined , ExclamationCircleOutlined , HomeOutlined} from '@ant-design/icons';
import SelectForm from './SelectForm';
import SelectLogo from './SelectLogo';

const CreatingTeam = () => {

	const warning = () => { // Description of the level of complexity 
		message.warning(`From the difficulty level that you select the depends 
			on the older amount ($) to which you can count `);
	};

   return (
		<div className={s.container}>
			<div className={s.header}>
				<img src="../img/logo.png" alt="" />
				<div className={s.header__title}>
					<h1>FOOTBALL MANAGER IТ FOOTBALL</h1>
					<p>Create a dream team and bring it to victory </p>
				</div>
				<img src="../img/Cup6.png" alt="" />
			</div>
			<div className={s.creating}>
				<Row>
					<Col className={s.creating__col} span={11}>
						<div className={s.creating__block}>
							<div className={s.creating__team}>
								<p>Team name</p>
								<Input size="large" placeholder="Team name" prefix={<UserOutlined />} />
								<p>Тown</p>
								<Input size="large" placeholder="Тown" prefix={<HomeOutlined />} />
							</div>
							<div className={s.creating__leval}>
								<p><ExclamationCircleOutlined 
									style={{ fontSize: '24px'}} 
									onClick={warning}/><span>Difficulty level</span></p> 
								<Radio.Group name="radiodifficulty" defaultValue={1}>
									<Radio value={1}>Heavy</Radio><br/>
									<Radio value={2}>Medium</Radio><br/>
									<Radio value={3}>Light</Radio><br/>
								</Radio.Group>
							</div>
						</div>
						<div className={s.creating__button}>
							<Button id={s.button} type="primary">Create a team</Button>
						</div>
					</Col>
					<Col className={s.creating__col} span={11}>
						<div>
							<SelectForm className={s.selects} />
							<SelectLogo className={s.selects} />
						</div>
					</Col>
				</Row>
			</div>
		</div>
   );
}

export default CreatingTeam