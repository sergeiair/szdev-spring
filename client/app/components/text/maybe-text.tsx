import React, { FC } from 'react';

interface MaybeTextProps {
	text: string | null;
	className?: string;
	title?: string;
}

const MaybeText: FC<MaybeTextProps> = ({ text, className, title }) => {
	if (!text || text.trim() === '') {
		return null;
	}

	return (
		<div className={className}>
			{!!title && <strong className={`${className}-title`}>{title}</strong> }
			<div className={`${className}-text`}>
				{text}
			</div>
		</div>
	);
};

export default MaybeText;
