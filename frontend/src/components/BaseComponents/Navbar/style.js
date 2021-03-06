import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
	width: 100%;
	padding: 0 15px;
	height: 80px;
	display: flex;
	align-items: center;
	background: #fff !important;
	/* background-color: red; */
`;

export const NavbarLeft = styled.nav`
	width: 60%;
`;

export const NavbarRight = styled.nav`
	width: 40%;
	/* background-color: blue; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	.homeLink,
	.searchLink,
	.profileLink {
		display: flex;
		align-items: center;
		font-size: ${props => props.theme.fontNormal};
		color: ${props => props.theme.link};
		padding: 0.5rem;
		height: 100%;
		/* background-color: green; */
		border-bottom: 3px solid transparent;
	}

	.homeLink:hover,
	.searchLink:hover,
	.profileLink:hover {
		border-bottom: 3px solid ${props => props.theme.orangeMain};
		transition: linear .09s;
	}

	.active {
		border-bottom: 3px solid ${props => props.theme.orangeMain};
		color: ${props => props.theme.linkActive};
	}
`;

export const BtnsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 0.7rem;
	.signUp,
	.login {
		padding: 0.8rem;
		border: 1px solid white;
		text-transform: uppercase;
		background-color: ${props => props.theme.orangeMain};
		color: #fff;
	}
	.signUp {
		padding-left: 1.2rem;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}
	.login {
		padding-right: 1.2rem;
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
	}
`;
