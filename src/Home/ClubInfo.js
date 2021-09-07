import s from './Home.module.css'

function ClubInfo(props) {
	console.log(props)

	return (
		<>
			<div className={s.clubinfo}>
				<img src={props.img} alt={props.id} width="100" height="100"/>
				<h2> {props.clubName} </h2>
				<h3>{"Power player : "+props.force} </h3>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus amet repudiandae, in consectetur, illum ad doloribus ducimus quibusdam itaque quos suscipit placeat modi, voluptatum saepe sed eaque dolores velit.</p>
			</div>
		</>
	);
}

export default ClubInfo;
