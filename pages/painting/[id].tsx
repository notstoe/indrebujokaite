import SinglePainting from 'Components/SinglePainting/SinglePainting';
import { useRouter } from 'next/router';

export default function SinglePaintingPage() {
	const router = useRouter();
	const { id } = router.query;

	return <SinglePainting id={id} />;
}
