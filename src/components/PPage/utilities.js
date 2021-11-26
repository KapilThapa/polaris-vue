import { PPageHeaderProps } from '../../components/PPage/components/PPageHeader/utilities';
import {
    DestructableAction,
    DisableableAction, IconableAction,
    LoadableAction,
} from '../../types/types.js';

export const PPageProps = {
    ...PPageHeaderProps,
    fullWidth: Boolean,
    narrowWidth: Boolean,
}

const PrimaryAction = {
    ...DestructableAction,
    ...DisableableAction,
    ...LoadableAction,
    ...IconableAction,
    primary: Boolean,
}