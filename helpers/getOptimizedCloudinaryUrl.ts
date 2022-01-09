export function getOptimizedCloudinaryUrl(
	url: string | undefined,
	size: string
): string | undefined {
	const positionToSplit = url?.lastIndexOf('/');

	if (!positionToSplit) return;

	const optimizedUrl =
		url?.substring(0, positionToSplit) +
		'/' +
		size +
		'_' +
		url?.substring(positionToSplit + 1);

	return optimizedUrl;
}
