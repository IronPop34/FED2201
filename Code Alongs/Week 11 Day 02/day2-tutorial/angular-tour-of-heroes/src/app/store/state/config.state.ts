import { IConfig } from '../../data-info/interfaces/config';

export interface IConfigState {
    config: IConfig | null;
}

export const initialConfigState: IConfigState = {
    config: null
}