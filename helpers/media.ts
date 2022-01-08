export enum Device {
	MobileSmall = 320,
	Mobile = 375,
	MobileLarge = 480,
	Tablet = 768,
	TabletLarge = 1024,
	Laptop = 1280,
	LaptopLarge = 1366,
	Desktop = 1600,
	DesktopLarge = 1920,
}

export function from(size: Device): string {
	return `(min-width: ${size}px)`;
}

export function until(size: Device): string {
	return `(max-width: ${size - 1}px)`;
}
