import { SiCraftcms } from 'react-icons/si';
import { Link, Icon } from '@chakra-ui/react';

export default function CraftCmsIcon() {
	return (
		<Link
			display="inline-flex"
			alignItems="baseline"
			isExternal
			href="https://craftcms.com/"
			color={'brand.craftRed'}
			role="group"
		>
			<Icon
				as={SiCraftcms}
				boxSize="1rem"
				title="Craft CMS"
				alignSelf="center"
				marginRight="0.2rem"
				transition="150ms all cubic-bezier(0.175, 0.885, 0.3, 1.9)"
				_groupHover={{ transform: 'scale(1.1)' }}
			/>
			{'Craft CMS'}
		</Link>
	);
}
