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
}
export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export interface IClientInfoProps {
    id: string;
}
export interface IRenewSubProps {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
}
export interface ISinglePackage {
    type: string;
    price?: string;
}
export interface ISubscriptionInfoProps {
    label?: string;
    packages: ISinglePackage[];
    total?: boolean;
}
export interface IPackageCardProps {
    selected?: boolean;
    name: string | undefined;
    desc: string | undefined;
    price: string | undefined;
    billed: string | undefined;
    recommended: string | undefined;
    features: any[];
    id: string;
    updateSubscription: any;
    isEdit?: boolean;
}
export interface ISubscriptionProps {
    isEdit?: boolean;
}
