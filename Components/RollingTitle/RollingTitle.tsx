import { s } from './RollingTitle.styles';

import { RollingTitle } from './RollingTitle.types';

export default function RollingTitle({ title, altMode }: RollingTitle) {
	return (
		<s.Wrapper altMode={altMode}>
			<div className='edge'>
				<span>{title}</span>
			</div>
			<div className='middle'>
				<span>{title}</span>
			</div>
			<div className='edge'>
				<span>{title}</span>
			</div>
		</s.Wrapper>
	);
}
