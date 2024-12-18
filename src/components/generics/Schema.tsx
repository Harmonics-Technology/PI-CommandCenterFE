import {
    ClientLicenseUpdatesLogViewData,
    ClientSubscriptionView,
    ClientSubscriptionViewPagedCollection,
    ClientView,
    ClientViewPagedCollection,
    FeatureView,
    SubscriptionView,
    UserView,
    UserViewPagedCollection,
} from 'src/services';

export interface IChartCardProps {
    title: string | number | undefined;
    count: string | number | undefined;
    from: string | number | undefined;
    rise: string | number | undefined;
    chart?: any;
}
export interface IActivitySingleProps {
    time: any;
    text: string;
    error?: boolean;
}
export interface ITableWrapperProps {
    tableTitle: string;
    buttonTitle: string;
    onChange: () => void;
    options?: any[];
    tables: any;
    openModal: any;
    data?: any;
}
export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export interface IClientInfoProps {
    id?: string;
    currentSub?: ClientSubscriptionView;
    allSub?: ClientSubscriptionViewPagedCollection;
    sub?: ClientSubscriptionViewPagedCollection;
    data?: ClientView;
    activity?: ClientLicenseUpdatesLogViewData;
}
export interface IRenewSubProps {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
    isLoading?: boolean;
    isValid?: boolean;
    clickFn?: any;
}
export interface ISinglePackage {
    type: string | null | undefined;
    price?: string | null | undefined;
}
export interface ISubscriptionInfoProps {
    label?: string;
    packages: ISinglePackage[];
    total?: boolean;
}
export interface IPackageCardProps {
    selected?: boolean;
    name: string | null | undefined;
    desc: string | null | undefined;
    price: number | null | undefined;
    prices?: number | null | undefined;
    billed: string | null | undefined;
    recommended: string | null | undefined;
    features: string[] | undefined;
    id: string | null | undefined;
    updateSubscription: any;
    isEdit?: boolean;
    isDisabled?: boolean;
    freeTrial?: boolean;
    freeTrialDuration?: any;
}
export interface ISubscriptionProps {
    isEdit?: boolean;
    base?: SubscriptionView | any;
    addon?: SubscriptionView | any;
    clients?: ClientViewPagedCollection;
    features?: FeatureView[];
    data?: SubscriptionView | any;
    country?: any;
}
export interface IManageSubProps {
    base: SubscriptionView[];
}
export interface IAdminProps {
    data?: UserViewPagedCollection;
    user?: UserView;
    id?: any;
}
export interface IClientProps {
    data: ClientSubscriptionViewPagedCollection;
    clients?: ClientViewPagedCollection;
}
export interface ISubHistory {
    data: ClientSubscriptionViewPagedCollection;
}
