import ClubTable from "./СlubTable"
import s from './Home.module.css'
import { Row, Col , Button } from 'antd';


function Home() {
	return (
		<div className={s.home__conteiner}>
			<Row>
				<Col span={12}>
					<div className={s.home__tablo}>
						<div className={s.home__command}>
							<img src="../img/Club2.png" alt="" />
							<p>Название команды</p>
						</div>
						<div className={s.home__check}>
							<h2>Match Championship</h2>
							<p>
								<span>0</span>
								<span>-</span>
								<span>0</span>
							</p>
						</div>
						<div className={s.home__command}>
							<img src="../img/Liverpool.png" alt="" />
							<p>Название команды</p>
						</div>
					</div>
					<div className={s.home__button}>
						<Button type="primary">Game</Button>
					</div>
				</Col>
				<Col span={12}>
					<div className={s.home__clubtable}>
						<div>
							<img src="../img/EuropeaLeague.png" alt="" />
							<h1>European Premier League</h1>
						</div>
						<ClubTable />
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Home;
