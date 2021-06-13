import { Theme } from '@/plugins/theme';

declare module 'styled-components' {
	interface DefaultTheme extends Theme {}
}
