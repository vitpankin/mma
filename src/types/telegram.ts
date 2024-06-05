export type RGB = `#${string}`;

export interface IThemeParams {
    [x: string]: RGB | undefined;
}