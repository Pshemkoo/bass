import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faLinkedinIn,
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
	far,
	faStar,
	faCopyright,
	faHandPointRight,
	faCalendarAlt,
	faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
	faBars,
	fas,
	faChevronRight,
	faChevronLeft,
	faFilter,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';

const definitions = [
	fab,
	far,
	fas,
	faBars,
	faStar,
	faFilter,
	faSearch,
	faTimesCircle,
	faCopyright,
	faLinkedinIn,
	faChevronLeft,
	faChevronRight,
	faFacebookSquare,
	faInstagram,
	faCalendarAlt,
	faHandPointRight,
];

library.add(...definitions);
