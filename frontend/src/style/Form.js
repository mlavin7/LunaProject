import styled from 'styled-components';

const Form = styled.input`
	background-color: #fff;
	border-radius: 4px;
	padding: 1.2rem;
	font-size: ${props => props.theme.fontMedium};
	height: 46px;
	width: 30%;
	z-index: 1;
	border: none;
	outline: none;
	position: relative;

	${props => {
		if (props.searchBar) {
			return `
			height: 100%;
			border-radius: 0;
			padding: .8rem;
			background: #fff;
			font-size: ${props.theme.fontNormal};
			font-weight: bold;
			letter-spacing: .04rem;
			color: rgba(0, 0, 0, .75);
				::placeholder {
					color: rgba(0,0,0,.35);
				}
				&.hide-on-focus:focus {
				::-webkit-input-placeholder {
				color: white;
  }

			`;
		}
	}}
`;

export default Form;
