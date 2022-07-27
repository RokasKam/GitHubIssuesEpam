import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParams } from '../../Navigation/Navigation.types';

export type Props = {
    organization?: string;
    repository?: string;
    findIssues: boolean;
    findPullRequests: boolean;
    howToSort: string;

};

export type NavigateToList = StackNavigationProp<NavigatorParams, 'List'>;

type navigateToListScreenType = (args: Props) => void;

export type useNavigateToListScreenType = () => navigateToListScreenType;