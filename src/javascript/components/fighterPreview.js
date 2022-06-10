import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
	const positionClassName =
		position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
	const fighterElement = createElement({
		tagName: 'div',
		className: `fighter-preview___root ${positionClassName}`,
	});

	if (fighter) {
		const fighterImg = createFighterImage(fighter);
		const fighterName = createElement({ tagName: 'div' });
		const fighterDetails = createElement({
			tagName: 'div',
			className: 'fighter-preview__details',
		});
		const fighterDetailsWrapper = createElement({
			tagName: 'div',
			className: 'fighter-preview__details-wrapper',
		});
		fighterDetails.innerHTML = `
			Health:
			${fighter.health}
		`;
		fighterName.innerText = fighter.name;
		fighterDetailsWrapper.append(fighterName, fighterDetails);
		fighterElement.append(fighterImg, fighterDetailsWrapper);
	}

	return fighterElement;
}

export function createFighterImage(fighter) {
	const { source, name } = fighter;
	const attributes = {
		src: source,
		title: name,
		alt: name,
	};
	const imgElement = createElement({
		tagName: 'img',
		className: 'fighter-preview___img',
		attributes,
	});

	return imgElement;
}
