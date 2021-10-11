import React from 'react';
import './style.css';

import Man from '../../assets/man.svg';
import Woman from '../../assets/woman.svg';
import Skin from '../../assets/skin.svg';
import Tshirt from '../../assets/t-shirt.svg';
import LightBeige from '../../assets/color-FCD7B8.svg';
import Pink from '../../assets/color-E0A39A.svg';
import Beige from '../../assets/color-FCCC84.svg';
import Brown from '../../assets/color-533724.svg';
import Gray from '../../assets/color-B2C7C7.svg';
import Green from '../../assets/color-88C10F.svg';
import Red from '../../assets/color-FF1414.svg';
import Striped from '../../assets/color-striped.svg';

//Le travail se fera donc ici
//Ayant pour habitude de travailler avec le préprocesseur SCSS, mon nommage se fera en BEM

const Profile = () => (
	<div className='profile'>
		<div className='profile__window'>
			<h1 className='profile__window_title'>Profil</h1>
			<p className=' profile__window_question'>
				Lequel de ces deux avatars préférez-vous ?
			</p>
			<div className='profile__window_avatars'>
				<img className='profile__window_avatar_man' src={Man} alt='man' />
				<img className='profile__window_avatar_woman' src={Woman} alt='woman' />
			</div>
			<div className='profile__window_colors'>
				<div className='profile__window_colors_skin'>
					<img className='profile__window_skin_color' src={Skin} alt='skin' />{' '}
					<img
						className='profile__window_character man'
						src={LightBeige}
						alt='man'
					/>{' '}
					<img
						className='profile__window_skin_color_pink'
						src={Pink}
						alt='Pink'
					/>
					<img
						className='profile__window_skin_color_beige'
						src={Beige}
						alt='man'
					/>
					<img
						className='profile__window_skin_color_brown'
						src={Brown}
						alt='brown'
					/>
				</div>
				<div className='profile__window_tshirt_color'>
					<img className='profile__window_tshirt' src={Tshirt} alt='t-shirt' />
					<img
						className='tshirt__window_tshirt_color_gray'
						src={Gray}
						alt='gray'
					/>{' '}
					<img
						className='tshirt__window_tshirt_color_green'
						src={Green}
						alt='green'
					/>
					<img
						className='profile__window_tshirt_color_red'
						src={Red}
						alt='red'
					/>
					<img
						className='profile__window_tshirt_color_striped'
						src={Striped}
						alt='white_and_blue'
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Profile;
